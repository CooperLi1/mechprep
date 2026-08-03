"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { useProgress } from "@/lib/progress";
import { dueCount } from "@/lib/review";

/**
 * Five destinations, not nine.
 *
 * The app grew to eleven routes. A flat nav listing all of them is a menu, not
 * an information architecture, so the nav carries the five things a candidate
 * actually navigates to on purpose — everything else is reachable from Home,
 * from the ⌘K palette, or from the footer.
 *
 * Ordered by how often a returning user wants them: Home answers "what now?",
 * Review is the daily habit, Interview is the milestone, and the last two are
 * lookup surfaces.
 */
const NAV = [
  { href: "/", label: "Home" },
  { href: "/review", label: "Review" },
  { href: "/interview", label: "Interview" },
  { href: "/bank", label: "Bank" },
  { href: "/reference", label: "Reference" },
] as const;

/**
 * /learn/* and /practice/* belong to Home's roadmap, so they keep it lit.
 * Previously every page hardcoded a `data-route="roadmap"` attribute, which
 * meant /figures and /bank all highlighted "Roadmap".
 */
function isActive(href: string, pathname: string): boolean {
  if (href === "/") {
    return (
      pathname === "/" ||
      pathname.startsWith("/learn/") ||
      pathname.startsWith("/practice/")
    );
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function PrimaryNav() {
  const pathname = usePathname() ?? "/";
  const progress = useProgress();
  // null until localStorage hydrates; render no badge rather than a flashing 0
  const due = progress ? dueCount(progress) : 0;

  return (
    <nav className="nav-list" aria-label="Primary navigation">
      {NAV.map((n) => {
        const active = isActive(n.href, pathname);
        const showBadge = n.href === "/review" && due > 0;
        return (
          <Link
            key={n.href}
            href={n.href}
            className={`nav-link${active ? " nav-link-active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            {n.label}
            {showBadge && (
              <span className="nav-badge" aria-label={`${due} due for review`}>
                {due > 99 ? "99+" : due}
              </span>
            )}
          </Link>
        );
      })}
      <ThemeToggle />
    </nav>
  );
}
