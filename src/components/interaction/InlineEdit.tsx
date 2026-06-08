"use client";

import { useState } from "react";

export function InlineEdit() {
  const [value, setValue] = useState("Policy: human approval required after threshold");

  return (
    <label className="inline-edit">
      <span>Inline policy note</span>
      <span
        role="textbox"
        tabIndex={0}
        contentEditable={true}
        suppressContentEditableWarning
        onInput={(event) => setValue(event.currentTarget.textContent || value)}
      >
        {value}
      </span>
    </label>
  );
}
