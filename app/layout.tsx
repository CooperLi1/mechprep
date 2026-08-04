import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import PrimaryNav from "@/components/PrimaryNav";
import CommandPalette from "@/components/CommandPalette";
import TermTooltip from "@/components/TermTooltip";
import "./globals.css";

// The design system is set in Geist; without loading it the whole app silently
// falls back to system fonts.
const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

// Runs before first paint so a stored dark preference never flashes light.
const THEME_INIT = `try{var t=localStorage.getItem('mechprep-theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch(e){}`;

export const metadata: Metadata = {
  title: "MechPrep — Mechanical Engineering Interview Practice",
  description:
    "Fully local practice site for mechanical engineering interviews: lessons, diagrams, quizzes, custom tests, and a question bank.",
  openGraph: {
    title: "MechPrep",
    description:
      "A local mechanical engineering study dashboard for lessons, diagrams, quizzes, mock tests, and interview Q&A.",
    type: "website",
  },
};

const NAV = [
  { href: "/", label: "Roadmap" },
  { href: "/test", label: "Test Builder" },
  { href: "/bank", label: "Question Bank" },
  { href: "/qna", label: "Interview Q&A" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <header className="app-header">
          <div className="app-container app-nav-shell">
            <Link href="/" className="brand-mark" aria-label="MechPrep roadmap">
              <span className="brand-icon" aria-hidden="true" />
              MechPrep
            </Link>
            <PrimaryNav />
            <CommandPalette />
          </div>
        </header>
        <main id="main-content" className="app-main">
          <div className="app-container">{children}</div>
        </main>
        <footer className="app-footer">
          <div className="app-container footer-row">
            <span>
              <span className="mono-key mr-2">Local</span>
              MechPrep runs fully offline. Progress is stored in your browser.
            </span>
            {/* Secondary destinations. These are deliberately out of the primary
                nav — five items is an architecture, nine is a menu — but they
                must stay reachable, and ⌘K finds them all too. */}
            <span className="flex flex-wrap gap-3">
              <Link href="/test" className="hover:text-accent-dark">Custom test</Link>
              <Link href="/qna" className="hover:text-accent-dark">Interview Q&amp;A</Link>
              <Link href="/reference" className="hover:text-accent-dark">Formula sheet</Link>
              <Link href="/glossary" className="hover:text-accent-dark">Glossary</Link>
              <Link href="/figures" className="hover:text-accent-dark">Figure QA</Link>
            </span>
          </div>
        </footer>
        <TermTooltip />
      </body>
    </html>
  );
}
