"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ThemeContainerImpl from "./types";

const ThemeContainer = ({ children }: ThemeContainerImpl) => {
  return (
    <>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </>
  );
};

export default ThemeContainer;
