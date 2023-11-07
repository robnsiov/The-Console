"use client";
import RootContainerImpl from "./types";
import ThemeContainer from "./theme";
import RadixUiContainer from "./radix-ui";
import useRootContainer from "./use";
import PagesContainer from "./pages";

const RootContainer = ({ children, dir, locale }: RootContainerImpl) => {
  useRootContainer({ dir, locale });
  return (
    <>
      <RadixUiContainer dir={dir}>
        <ThemeContainer>
          <PagesContainer>{children}</PagesContainer>
        </ThemeContainer>
      </RadixUiContainer>
    </>
  );
};

export default RootContainer;
