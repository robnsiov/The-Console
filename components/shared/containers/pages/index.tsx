"use client";
import Footer from "@/components/common/footer";
import PagesContainerImpl from "./types";
import usePageContainer from "./use";
import cls from "classnames";

const PagesContainer = ({ children }: PagesContainerImpl) => {
  const { minimumSidebar } = usePageContainer();
  return (
    <>
      <div className="w-full dark:bg-zinc-900 flex justify-between items-end flex-col">
        <div
          className={cls(
            `lg:w-full w-[calc(100%-280px)] mt-[76px] 
            min-h-[calc(100vh-76px)] lg:mt-[59px] lg:min-h-[calc(100vh-52px)]
            p-4 lg:p-2`,
            { "w-[calc(100%-80px)]": minimumSidebar }
          )}
        >
          {children} 00
        </div>
        <Footer />
      </div>
    </>
  );
};
export default PagesContainer;
