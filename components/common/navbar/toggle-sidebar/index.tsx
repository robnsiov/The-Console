"use client";

import RippleAnim from "@/components/shared/anims/ripple";
import Button from "@/components/shared/button";
import useToggleSidebar from "./use";

const ToggleSidebar = () => {
  const { toggleSidebar } = useToggleSidebar();
  return (
    <>
      <Button
        onClick={toggleSidebar}
        size="icon"
        variant="ghost"
        className="relative overflow-hidden me-2 md:me-1 rounded-full hidden lg:inline-block"
      >
        <RippleAnim />
        <div className="w-full p-2.5 flex justify-center items-center flex-col">
          <span
            className="w-full rounded-md h-0.5 border-b-[3px] border-black 
          inline-block opacity-75 dark:border-white dark:opacity-100"
          ></span>
          <span
            className="w-full rounded-md h-0.5 border-b-[3px] border-black 
          inline-block opacity-75 dark:border-white dark:opacity-100 my-1 ms-1.5"
          ></span>
          <span
            className="w-full rounded-md h-0.5 border-b-[3px] border-black 
          inline-block opacity-75 dark:border-white dark:opacity-100"
          ></span>
        </div>
      </Button>
    </>
  );
};
export default ToggleSidebar;
