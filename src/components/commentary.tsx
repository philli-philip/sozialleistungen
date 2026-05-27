import { useEffect, useId, useState, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Mermaid({ chart }: { chart: string }) {
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const reactId = useId();
  const id = `mmd-${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { default: mermaid } = await import("mermaid");
        mermaid.initialize({
          startOnLoad: false,
          theme: "neutral",
          securityLevel: "strict",
          fontFamily: "inherit",
        });
        const result = await mermaid.render(id, chart);
        if (!cancelled) setSvg(result.svg);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  if (error) {
    return (
      <pre className="not-prose rounded border border-destructive/40 bg-destructive/5 p-3 text-xs text-destructive overflow-auto">
        Mermaid-Fehler: {error}
      </pre>
    );
  }
  if (!svg) {
    return (
      <div className="not-prose text-xs text-muted-foreground italic my-4">
        Diagramm wird geladen…
      </div>
    );
  }
  return (
    <div
      className="not-prose my-4 flex justify-center [&_svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

type CodeElement = {
  props?: { className?: string; children?: ReactNode };
};

const extractMermaid = (children: ReactNode): string | null => {
  const child = Array.isArray(children) ? children[0] : children;
  if (!child || typeof child !== "object") return null;
  const el = child as CodeElement;
  const className = el.props?.className;
  if (typeof className !== "string" || !className.includes("language-mermaid"))
    return null;
  const inner = el.props?.children;
  const text = Array.isArray(inner) ? inner.join("") : String(inner ?? "");
  return text.replace(/\n$/, "");
};

function PreOrMermaid({
  children,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  const mermaidSource = extractMermaid(children);
  if (mermaidSource !== null) {
    return <Mermaid chart={mermaidSource} />;
  }
  return <pre {...props}>{children}</pre>;
}

const markdownComponents = { pre: PreOrMermaid };

const remarkPlugins = [remarkGfm];

export function Commentary({ source }: { source: string }) {
  return (
    <div className="prose prose-sm prose-neutral max-w-prose dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={remarkPlugins}
        components={markdownComponents}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
