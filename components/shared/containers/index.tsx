"use client";
import Navbar from "@/components/common/navbar";
import RootContainerImpl from "./types";
import ThemeContainer from "./theme";
import RadixUiContainer from "./radix-ui";
import useRootContainer from "./use";
import Sidebar from "@/components/common/sidebar";

const RootContainer = ({ children, dir, locale }: RootContainerImpl) => {
  useRootContainer({ dir, locale });
  return (
    <>
      <RadixUiContainer dir={dir}>
        <ThemeContainer>
          <Navbar />
          <Sidebar />
          <div className="min-h-screen dark:bg-zinc-900">{children}</div>
        </ThemeContainer>
      </RadixUiContainer>
    </>
  );
};

export default RootContainer;
