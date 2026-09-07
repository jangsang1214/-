const steps = [
  ["01", "Form", "A remembered curve is reduced to proportion, weight, and empty space."],
  ["02", "Wax", "The digital line becomes a physical volume before it becomes precious metal."],
  ["03", "Casting", "Sterling silver gives the form its permanence, density, and cold light."],
  ["04", "Finish", "Satin planes and polished edges create contrast without decoration."],
  ["05", "Jade", "A restrained green point anchors the open form without closing it."],
  ["06", "Archive", "Each object leaves the workshop as part of GARANG's continuing record."],
] as const;

export function CraftSequence() {
  return (
    <section className="craft-section hairline" id="craft">
      <div className="shell craft-grid">
        <div className="craft-intro">
          <p className="eyebrow">Craft / Seoul</p>
          <h2 className="craft-title serif">From line<br />to object.</h2>
          <p className="craft-lede">The story is not added after production. The act of making is part of the object itself.</p>
        </div>
        <ol className="craft-list">
          {steps.map(([number, title, body]) => (
            <li className="craft-step" key={number}>
              <span className="craft-step__number">{number}</span>
              <div>
                <h3 className="serif">{title}</h3>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
