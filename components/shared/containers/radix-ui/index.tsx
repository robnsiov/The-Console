"use client";
import { DirectionProvider } from "@radix-ui/react-direction";
import RadixUiImpl from "./types";

const RadixUiContainer = ({ children, dir }: RadixUiImpl) => {
  return (
    <>
      <DirectionProvider dir={dir}>{children}</DirectionProvider>
    </>
  );
};

export default RadixUiContainer;
