"use client";

import { useRef } from "react";

type InteractiveFieldProps = {
  compact?: boolean;
};

export function InteractiveField({ compact = false }: InteractiveFieldProps) {
  const fieldRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  function moveLens(event: React.PointerEvent<HTMLDivElement>) {
    if (frame.current) cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      const element = fieldRef.current;
      if (!element) return;

      const bounds = element.getBoundingClientRect();
      element.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
      element.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
    });
  }

  function resetLens() {
    const element = fieldRef.current;
    if (!element) return;
    element.style.removeProperty("--pointer-x");
    element.style.removeProperty("--pointer-y");
  }

  return (
    <div
      ref={fieldRef}
      className={`signal-field${compact ? " signal-field--compact" : ""}`}
      onPointerMove={moveLens}
      onPointerLeave={resetLens}
      aria-hidden="true"
    >
      <div className="signal-field__grid" />
      <div className="signal-field__lens" />
      <div className="signal-field__coordinates">
        <span>MARGIN / 01</span>
        <span>MOVE TO NOTICE</span>
      </div>
      <div className="signal-field__type">
        <span>MAKE</span>
        <span className="signal-field__serif">NOTICE</span>
        <span>WRITE</span>
      </div>
      <div className="signal-field__note">A small loop for making sense of the work.</div>
    </div>
  );
}
