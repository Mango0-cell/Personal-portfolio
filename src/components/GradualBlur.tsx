'use client';

import React, { useEffect, useRef, useMemo } from 'react';
import type { CSSProperties, PropsWithChildren } from 'react';

type GradualBlurProps = PropsWithChildren<{
  position?: 'top' | 'bottom' | 'left' | 'right';
  strength?: number;
  height?: string;
  width?: string;
  divCount?: number;
  exponential?: boolean;
  zIndex?: number;
  opacity?: number;
  curve?: 'linear' | 'bezier' | 'ease-in' | 'ease-out' | 'ease-in-out';
  target?: 'parent' | 'page';
  className?: string;
  style?: CSSProperties;
}>;

const CURVE_FUNCTIONS: Record<string, (p: number) => number> = {
  linear: p => p,
  bezier: p => p * p * (3 - 2 * p),
  'ease-in': p => p * p,
  'ease-out': p => 1 - Math.pow(1 - p, 2),
  'ease-in-out': p => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2),
};

const getGradientDirection = (position: string): string => {
  const directions: Record<string, string> = {
    top: 'to top',
    bottom: 'to bottom',
    left: 'to left',
    right: 'to right',
  };
  return directions[position] || 'to bottom';
};

const GradualBlur: React.FC<GradualBlurProps> = ({
  position = 'bottom',
  strength = 2,
  height = '6rem',
  width,
  divCount = 5,
  exponential = false,
  zIndex = 1000,
  opacity = 1,
  curve = 'linear',
  target = 'parent',
  className = '',
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const blurDivs = useMemo(() => {
    const divs: React.ReactNode[] = [];
    const increment = 100 / divCount;
    const curveFunc = CURVE_FUNCTIONS[curve] || CURVE_FUNCTIONS.linear;

    for (let i = 1; i <= divCount; i++) {
      let progress = i / divCount;
      progress = curveFunc(progress);

      let blurValue: number;
      if (exponential) {
        blurValue = Math.pow(2, progress * 4) * 0.0625 * strength;
      } else {
        blurValue = 0.0625 * (progress * divCount + 1) * strength;
      }

      const p1 = Math.round((increment * i - increment) * 10) / 10;
      const p2 = Math.round(increment * i * 10) / 10;
      const p3 = Math.round((increment * i + increment) * 10) / 10;
      const p4 = Math.round((increment * i + increment * 2) * 10) / 10;

      let gradient = `transparent ${p1}%, black ${p2}%`;
      if (p3 <= 100) gradient += `, black ${p3}%`;
      if (p4 <= 100) gradient += `, transparent ${p4}%`;

      const direction = getGradientDirection(position);

      const divStyle: CSSProperties = {
        maskImage: `linear-gradient(${direction}, ${gradient})`,
        WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
        backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
        opacity,
      };

      divs.push(<div key={i} className="absolute inset-0" style={divStyle} />);
    }

    return divs;
  }, [divCount, curve, exponential, strength, opacity, position]);

  const isVertical = position === 'top' || position === 'bottom';
  const isHorizontal = position === 'left' || position === 'right';
  const isPageTarget = target === 'page';

  const containerStyle: CSSProperties = useMemo(() => {
    const baseStyle: CSSProperties = {
      position: isPageTarget ? 'fixed' : 'absolute',
      pointerEvents: 'none',
      zIndex: isPageTarget ? zIndex + 100 : zIndex,
      ...style,
    };

    if (isVertical) {
      baseStyle.height = height;
      baseStyle.width = width || '100%';
      baseStyle[position] = 0;
      baseStyle.left = 0;
      baseStyle.right = 0;
    } else if (isHorizontal) {
      baseStyle.width = width || height;
      baseStyle.height = '100%';
      baseStyle[position] = 0;
      baseStyle.top = 0;
      baseStyle.bottom = 0;
    }

    return baseStyle;
  }, [isPageTarget, zIndex, style, isVertical, isHorizontal, height, width, position]);

  useEffect(() => {
    // Inject base styles
    const id = 'gradual-blur-styles';
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = `.gradual-blur{pointer-events:none}`;
    document.head.appendChild(el);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`gradual-blur relative isolate ${className}`}
      style={containerStyle}
    >
      <div className="relative w-full h-full">{blurDivs}</div>
    </div>
  );
};

export default React.memo(GradualBlur);
