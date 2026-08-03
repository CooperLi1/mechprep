"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/**
 * Light/dark toggle. The stored preference is applied by a blocking inline
 * script in the document head (see layout.tsx) so the page never paints in the
 * wrong theme; this component only reflects and updates that state.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const attr = document.documentElement.dataset.theme;
    if (attr === "light" || attr === "dark") {
      setTheme(attr);
      return;
    }
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    );
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("mechprep-theme", next);
    } catch {
      // Private browsing / disabled storage: the toggle still works for this
      // session, it just will not persist.
    }
  };

  // Render a stable placeholder until the client resolves the active theme,
  // so the button does not flip labels after hydration.
  const label =
    theme === null
      ? "Toggle colour theme"
      : `Switch to ${theme === "dark" ? "light" : "dark"} theme`;

  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-toggle"
      aria-label={label}
      title={label}
    >
      <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
    </button>
  );
}
