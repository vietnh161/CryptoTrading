import React, { useRef, useEffect } from "react";
import { btcKlines } from "../cores/home/mock";
import {
  createChart,
  LineSeries,
  CrosshairMode,
  type LineData,
  type UTCTimestamp,
} from "lightweight-charts";

interface LineChart24hProps {
  height?: number;
}

export default function LineChart24h({ height = 200 }: LineChart24hProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: height,
      layout: {
        background: { color: "#ffffff" },
      },
      grid: {
        vertLines: { visible: false },
        horzLines: { visible: false },
      },
      timeScale: { visible: false },
      rightPriceScale: { visible: false },
      leftPriceScale: { visible: false },
      handleScroll: false,
      handleScale: false,
      crosshair: { mode: CrosshairMode.Hidden },
    });

    const lineSeries = chart.addSeries(LineSeries, {
      color: "#0596eb",
      lineWidth: 2,
      lastValueVisible: false,
      priceLineVisible: false,
      crosshairMarkerVisible: false,
    });

    const data: LineData[] = btcKlines.map((k) => ({
      time: (+k[0] / 1000) as UTCTimestamp,
      value: parseFloat(String(k[4])),
    }));

    lineSeries.setData(data);
    chart.timeScale().fitContent();

    const resizeObserver = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      chart.applyOptions({ width });
      chart.timeScale().fitContent();
    });

    resizeObserver.observe(chartContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.remove();
    };
  }, [height]);

  return (
    <div ref={chartContainerRef} style={{ width: "100%", height: height }} />
  );
}
