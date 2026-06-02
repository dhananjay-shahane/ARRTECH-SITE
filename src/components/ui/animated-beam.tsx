"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement | null>;
  fromRef: React.RefObject<HTMLElement | null>;
  toRef: React.RefObject<HTMLElement | null>;
  curvature?: number;
  pathType?: "bezier" | "orthogonal";
  cornerRadius?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  midXOffset?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  pathType = "orthogonal",
  cornerRadius = 24,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.8,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  midXOffset = 0,
}) => {
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();

      setSvgDimensions({
        width: containerRect.width,
        height: containerRect.height,
      });

      const startX = fromRect.left - containerRect.left + fromRect.width / 2 + startXOffset;
      const startY = fromRect.top - containerRect.top + fromRect.height / 2 + startYOffset;
      const endX = toRect.left - containerRect.left + toRect.width / 2 + endXOffset;
      const endY = toRect.top - containerRect.top + toRect.height / 2 + endYOffset;

      let d = "";

      if (pathType === "orthogonal") {
        const dx = endX - startX;
        const dy = endY - startY;
        const signX = Math.sign(dx);
        const signY = Math.sign(dy);
        const r = Math.min(cornerRadius, Math.abs(dx) / 2, Math.abs(dy) / 2);

        if (Math.abs(dx) < 2 * r || Math.abs(dy) < 2 * r) {
          d = `M ${startX},${startY} L ${endX},${endY}`;
        } else {
          // Applied midXOffset here so parallel lines don't overlap vertically
          const midX = startX + dx / 2 + midXOffset;
          d = `M ${startX},${startY} 
               L ${midX - r * signX},${startY} 
               Q ${midX},${startY} ${midX},${startY + r * signY} 
               L ${midX},${endY - r * signY} 
               Q ${midX},${endY} ${midX + r * signX},${endY} 
               L ${endX},${endY}`;
        }
      } else {
        const midX = (startX + endX) / 2;
        const midY = (startY + endY) / 2;
        const dx = endX - startX;
        const dy = endY - startY;
        const controlX = midX - dy * curvature;
        const controlY = midY + dx * curvature;
        d = `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`;
      }

      setPathD(d);
    };

    const resizeObserver = new ResizeObserver(() => updatePath());
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    if (fromRef.current) resizeObserver.observe(fromRef.current);
    if (toRef.current) resizeObserver.observe(toRef.current);
    
    window.addEventListener("resize", updatePath);
    updatePath();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updatePath);
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    pathType,
    cornerRadius,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
    midXOffset,
  ]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 select-none",
        className
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
      style={{ overflow: "visible" }}
    >
      <style>{`
        @keyframes beamFlowOutward {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: 1000;
          }
        }
        .beam-flow-animation {
          stroke-dasharray: 50 300;
          animation: beamFlowOutward 7s linear infinite;
        }
      `}</style>

      {/* Solid Background Path (Base wire) */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={0.25}
        strokeLinecap="round"
        fill="none"
      />

      {/* Animated Flowing Outward Flash (Solid moving pulse) */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth + 1}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        fill="none"
        className="beam-flow-animation"
      />
    </svg>
  );
};
