"use client";
import Sidebar from "@/components/common/navbar";
import RootContainerImpl from "./types";
import ThemeContainer from "./theme";
import RadixUiContainer from "./radix-ui";
import useRootContainer from "./use";

const RootContainer = ({ children, dir, locale }: RootContainerImpl) => {
  useRootContainer({ dir, locale });
  return (
    <>
      <RadixUiContainer dir={dir}>
        <ThemeContainer>
          <div className="min-h-screen dark:bg-zinc-900">{children}</div>
          <Sidebar />
        </ThemeContainer>
      </RadixUiContainer>
    </>
  );
};

export default RootContainer;
