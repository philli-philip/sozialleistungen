import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Scale } from "lucide-react";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-sidebar">
        <div className="mx-auto max-w-5xl flex items-center justify-between px-6 h-14">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold"
          >
            <Scale className="h-4 w-4 text-primary" strokeWidth={1.5} />
            Sozialleistungen
          </Link>
          <nav className="flex items-center gap-5 text-xs text-muted-foreground">
            <Link
              to="/about"
              className="hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              Über
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        <p className="mx-auto max-w-5xl px-6 py-4 text-xs text-muted-foreground">
          Für diese Seite werden keine Cookies verwendet · Keine Rechtsberatung
        </p>
      </footer>
    </div>
  ),
});
