"use client";

import { useState } from "react";

export function DensityToggle() {
  const [density, setDensity] = useState("comfortable");

  return (
    <label className="density-toggle">
      <span>Density</span>
      <select
        data-density={density}
        value={density}
        onChange={(event) => {
          setDensity(event.target.value);
          document.documentElement.dataset.density = event.target.value;
        }}
      >
        <option value="compact">Compact</option>
        <option value="comfortable">Comfortable</option>
      </select>
    </label>
  );
}
