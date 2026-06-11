export function WorkingMargin() {
  return (
    <div className="working-margin" aria-hidden="true">
      <div className="working-margin__rule" />
      <div className="working-margin__marker working-margin__marker--top">
        <span>01</span>
        <strong>Build</strong>
      </div>
      <div className="working-margin__dot" />
      <div className="working-margin__marker working-margin__marker--middle">
        <span>02</span>
        <strong>Observe</strong>
      </div>
      <div className="working-margin__marker working-margin__marker--bottom">
        <span>03</span>
        <strong>Write</strong>
      </div>
    </div>
  );
}
