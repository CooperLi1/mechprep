/**
 * Drafting-sheet primitives.
 *
 * DESIGN-V2 asks for the "drafting table" concept to be visible rather than
 * implied. These five pieces are the whole vocabulary, so the concept is
 * applied consistently instead of being redrawn per screen:
 *
 *   <Annot>      section header as a drawing annotation — `01 — FOUNDATIONS ——`
 *   <Sheet>      a drawing sheet: double rule, corner ticks
 *   <TitleBlock> the mono field strip along a sheet's bottom edge
 *   <Readout>    a quantity set as an instrument reading, unit beneath
 *   <SpecRow>    a dotted-leader parts-list row
 *
 * The frame is deliberately expensive-looking, so it is used with conviction in
 * two places (Home's coach sheet, the results screen) rather than on every card.
 */

/* -------------------------------------------------------------------------- */

export function Annot({
  num,
  children,
  className = "",
  as: Tag = "p",
  id,
}: {
  /** Two-digit sheet number, e.g. "01". */
  num: string;
  children: React.ReactNode;
  className?: string;
  as?: "p" | "h2" | "h3";
  id?: string;
}) {
  return (
    <Tag id={id} className={`annot ${className}`}>
      <span className="annot-num" aria-hidden="true">
        {num}
      </span>
      <span aria-hidden="true">—</span>
      <span>{children}</span>
    </Tag>
  );
}

/* -------------------------------------------------------------------------- */

export function Sheet({
  children,
  className = "",
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`sheet ${className}`} {...rest}>
      <div className="sheet-body">{children}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

export interface Field {
  key: string;
  /** Rendered in mono; long values ellipsize rather than wrap the strip. */
  val: string;
}

export function TitleBlock({ fields }: { fields: Field[] }) {
  return (
    // Presentational: every value here is stated in words elsewhere in the
    // sheet, so announcing the strip again would just be a second reading of
    // the same numbers.
    <div className="title-block" aria-hidden="true">
      {fields.map((f) => (
        <div key={f.key} className="title-block-field">
          <span className="title-block-key">{f.key}</span>
          <span className="title-block-val" title={f.val}>
            {f.val}
          </span>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */

export function Readout({
  value,
  unit,
  size = "md",
  className = "",
}: {
  value: React.ReactNode;
  /** The label beneath the number. Small, mono, uppercase. */
  unit: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const scale = size === "lg" ? "readout-lg" : size === "sm" ? "readout-sm" : "";
  return (
    <p className={`readout ${scale} ${className}`}>
      <span className="readout-value">{value}</span>
      <span className="readout-unit">{unit}</span>
    </p>
  );
}

/* -------------------------------------------------------------------------- */

export function SpecRow({ term, value }: { term: string; value: React.ReactNode }) {
  return (
    <div className="spec-row">
      <span className="spec-key">{term}</span>
      <span className="spec-leader" aria-hidden="true" />
      <span className="spec-val">{value}</span>
    </div>
  );
}
