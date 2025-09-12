import React from "react";

function PetFilter({ setFilter }) {
  const buttons = [
    { label: "All", value: "all" },
    { label: "Dogs", value: "dog" },
    { label: "Cats", value: "cat" },
    { label: "Rabbits", value: "rabbit" }
  ];

  return (
    <div className="shelter-filter-tabs">
      {buttons.map(btn => (
        <button
          key={btn.value}
          onClick={() => setFilter(btn.value)}
          className="px-3 py-1 rounded border bg-blue-600 text-white transition shltr-btn"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}

export default PetFilter;
