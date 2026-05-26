import { ExternalLink } from "lucide-react";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { getGesetzInfo } from "@/lib/gesetze";

export function GesetzSheet({
  code,
  onOpenChange,
}: {
  code: string | null;
  onOpenChange: (open: boolean) => void;
}) {
  const info = code ? getGesetzInfo(code) : undefined;
  return (
    <Sheet open={!!code} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <code className="font-mono text-base text-primary mr-2 block">
              {code}
            </code>
            <span className="font-normal text-foreground">
              {info?.name ?? code}
            </span>
          </SheetTitle>
          {info && (
            <SheetDescription className="sr-only">
              Beschreibung von {info.name}
            </SheetDescription>
          )}
        </SheetHeader>
        <SheetBody>
          {info ? (
            <>
              <p className="text-sm leading-relaxed text-foreground/90">
                {info.description}
              </p>
              <a
                href={info.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
              >
                Zum Gesetzestext
                <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
              </a>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              Für dieses Gesetz liegt noch keine Beschreibung vor.
            </p>
          )}
        </SheetBody>
      </SheetContent>
    </Sheet>
  );
}
