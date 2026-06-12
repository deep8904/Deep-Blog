export function CastlePathDiagram() {
  return (
    <div className="castle-diagram" aria-hidden="true">
      <svg viewBox="0 0 560 360">
        <path className="castle-diagram__room" d="M64 76h132v92H64z" />
        <path className="castle-diagram__room" d="M196 168h128v116H196z" />
        <path className="castle-diagram__room" d="M324 64h172v128H324z" />
        <path className="castle-diagram__room" d="M92 232h104v52H92z" />
        <path className="castle-diagram__path" d="M130 168v38h130v-38h118v24" />
        <path className="castle-diagram__path" d="M260 206v78M324 226h96v-34" />
        <circle cx="130" cy="168" r="8" />
        <circle cx="260" cy="206" r="8" />
        <circle cx="378" cy="168" r="8" />
        <circle cx="420" cy="226" r="8" />
        <path className="castle-diagram__note" d="M42 320h476M42 40h476" />
      </svg>
    </div>
  );
}
