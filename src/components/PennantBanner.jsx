import React from "react";

const FlagBanner = () => {
  const colors = [
    "#FF5733", "#FFC300", "#DAF7A6", "#33FF57", "#33C4FF", "#5733FF", "#FF33A8",
    "#FF8C33", "#FFD633", "#A6FFDA", "#57FF33", "#33FFF5", "#8C33FF", "#FF33D6",
  ];

  const renderFlags = (yOffset, flagCount) => {
    const flags = [];
    const flagWidth = 5; // Adjusted for responsiveness
    const flagHeight = 7; // Adjusted for responsiveness

    for (let i = 0; i < flagCount; i++) {
      flags.push(
        <polygon
          key={i}
          points={`${i * flagWidth},${yOffset} ${(i + 0.5) * flagWidth},${yOffset + flagHeight} ${(i + 1) * flagWidth},${yOffset}`}
          fill={colors[i % colors.length]}
        />
      );
    }

    return flags;
  };

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 50" // Adjusted for responsiveness
      preserveAspectRatio="xMidYMid meet"
      style={
        {
          position: "absolute",
        }
      }
    >
      {renderFlags(2, 20)}
      {renderFlags(8, 18)}
      {renderFlags(14, 16)}
      {renderFlags(20, 14)}
      {renderFlags(26, 12)}
    </svg>
  );
};

export default FlagBanner;