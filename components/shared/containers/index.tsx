"use client";
import Navbar from "@/components/common/navbar";
import RootContainerImpl from "./types";
import ThemeContainer from "./theme";
import RadixUiContainer from "./radix-ui";
import useRootContainer from "./use";
import Sidebar from "@/components/common/sidebar";
import PagesContainer from "./pages";

const RootContainer = ({ children, dir, locale }: RootContainerImpl) => {
  useRootContainer({ dir, locale });
  return (
    <>
      <RadixUiContainer dir={dir}>
        <ThemeContainer>
          <Navbar />
          <Sidebar />
          <PagesContainer>{children}</PagesContainer>
        </ThemeContainer>
      </RadixUiContainer>
    </>
  );
};

export default RootContainer;
