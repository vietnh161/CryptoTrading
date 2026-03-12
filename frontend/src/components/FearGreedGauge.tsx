import { useMemo } from "react";

export default function FearGreedGauge({
  value = 19,
  width = 150,
  height = 80,
}) {
  const centerX = width / 2;
  const centerY = height - 20;
  const radius = Math.min(width / 2 - 10, height - 30);

  const pointerAngle = useMemo(() => {
    return (value / 100) * 180 - 90;
  }, [value]);

  const getLabel = (v: number) => {
    if (v < 25) return "Extreme Fear";
    if (v < 50) return "Fear";
    if (v === 50) return "Neutral";
    if (v < 75) return "Greed";
    return "Extreme Greed";
  };

  const getColor = (v: number) => {
    if (v <= 40) return "#f75757";
    if (v <= 60) return "#fca103";
    return "#039617";
  };

  function arcPath(startAngle: number, endAngle: number) {
    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);

    return `
    M ${start.x} ${start.y}
    A ${radius} ${radius} 0 0 0 ${end.x} ${end.y}
  `;
  }

  function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
    const rad = (angle * Math.PI) / 180;

    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  }

  return (
    <div className="flex items-center gap-2">
      <svg width={width} height={height}>
        <path
          d={arcPath(-180, -140)}
          stroke="#fa0202"
          strokeWidth="12"
          fill="none"
        />
        <path
          d={arcPath(-144, -108)}
          stroke="#f75757"
          strokeWidth="12"
          fill="none"
        />
        <path
          d={arcPath(-108, -72)}
          stroke="#fca103"
          strokeWidth="12"
          fill="none"
        />

        <path
          d={arcPath(-72, -36)}
          stroke="#79fc58"
          strokeWidth="12"
          fill="none"
        />

        <path
          d={arcPath(-36, 0)}
          stroke="#45cc02"
          strokeWidth="12"
          fill="none"
        />

        {/* pointer */}
        <g transform={`rotate(${pointerAngle} ${centerX} ${centerY})`}>
          <line
            x1={centerX}
            y1={centerY}
            x2={centerX}
            y2={centerY - radius + 10}
            stroke="#374151"
            strokeWidth="4"
          />
        </g>

        <circle cx={centerX} cy={centerY} r="6" fill="#374151" />
      </svg>
      <div>
        <div className="text-xl font-bold">{value}</div>
        <div className="text-sm font-bold" style={{ color: getColor(value) }}>
          {getLabel(value)}
        </div>
      </div>
    </div>
  );
}
