"use client";
import React, { useState, useLayoutEffect } from "react";
import { RippleContainer } from "./styles";
import RippleImpl from "./types";

let bounce: NodeJS.Timeout;
const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: () => void
) => {
  useLayoutEffect(() => {
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

const RippleAnim = ({ color = "#a2a2a2", duration = 1000 }: RippleImpl) => {
  const [rippleArray, setRippleArray] = useState<any>([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event: any) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <RippleContainer
      duration={duration}
      color={color}
      onPointerDown={addRipple}
    >
      {rippleArray.length > 0 &&
        rippleArray.map((ripple: any, index: number) => {
          return (
            <span
              key={"span" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </RippleContainer>
  );
};

export default RippleAnim;
