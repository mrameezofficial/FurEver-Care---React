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
          className="px-4 py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}

export default PetFilter;
