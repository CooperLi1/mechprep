"use client";

import type { RefObject } from "react";

/**
 * A compact symbol palette for free-text answer fields. Engineering answers
 * want σ, τ, ×10ⁿ and friends, and no OS keyboard offers them; every button
 * inserts at the caret and hands focus straight back to the field.
 */
const SYMBOLS: { char: string; name: string }[] = [
  { char: "σ", name: "sigma (normal stress)" },
  { char: "τ", name: "tau (shear stress)" },
  { char: "ε", name: "epsilon (strain)" },
  { char: "γ", name: "gamma (shear strain)" },
  { char: "θ", name: "theta (angle)" },
  { char: "ω", name: "omega (angular velocity)" },
  { char: "π", name: "pi" },
  { char: "Δ", name: "delta (change)" },
  { char: "δ", name: "delta (deflection)" },
  { char: "ρ", name: "rho (density)" },
  { char: "ν", name: "nu (Poisson's ratio)" },
  { char: "µ", name: "mu (friction / micro)" },
  { char: "√", name: "square root" },
  { char: "²", name: "squared" },
  { char: "³", name: "cubed" },
  { char: "°", name: "degrees" },
  { char: "±", name: "plus-minus" },
  { char: "×", name: "times" },
  { char: "·", name: "dot product" },
  { char: "≤", name: "less than or equal" },
  { char: "≥", name: "greater than or equal" },
  { char: "≈", name: "approximately equal" },
  { char: "→", name: "arrow" },
];

interface Props {
  /** The input/textarea the symbols are typed into. */
  targetRef: RefObject<HTMLTextAreaElement | HTMLInputElement | null>;
  value: string;
  onValueChange: (next: string) => void;
  disabled?: boolean;
}

export default function MathKeyboard({ targetRef, value, onValueChange, disabled }: Props) {
  const insert = (char: string) => {
    const el = targetRef.current;
    const start = el?.selectionStart ?? value.length;
    const end = el?.selectionEnd ?? start;
    onValueChange(value.slice(0, start) + char + value.slice(end));
    // Put the caret after the inserted character once React has re-rendered.
    requestAnimationFrame(() => {
      const target = targetRef.current;
      if (!target) return;
      target.focus();
      const caret = start + char.length;
      target.setSelectionRange(caret, caret);
    });
  };

  return (
    <div
      role="toolbar"
      aria-label="Insert math symbol"
      className="flex flex-wrap items-center gap-1"
    >
      <span className="mono-key mr-1">Symbols</span>
      {SYMBOLS.map((s) => (
        <button
          type="button"
          key={s.char}
          // One tab stop for the whole palette would be ideal, but a simple
          // static palette is predictable; keep buttons out of the tab order
          // so the field-to-button flow stays two stops, mouse/touch primary.
          tabIndex={-1}
          disabled={disabled}
          onClick={() => insert(s.char)}
          aria-label={`Insert ${s.name}`}
          title={s.name}
          className="grid h-7 min-w-7 place-items-center rounded-[var(--r-sm)] border border-[var(--line)] bg-[var(--surface)] px-1 text-sm text-[var(--ink-soft)] hover:border-[var(--line-strong)] hover:bg-[var(--surface-muted)] hover:text-[var(--ink)] disabled:opacity-40"
        >
          <span aria-hidden="true">{s.char}</span>
        </button>
      ))}
    </div>
  );
}
