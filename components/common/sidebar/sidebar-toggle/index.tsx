"use client";
import RippleAnim from "@/components/shared/anims/ripple";
import Button from "@/components/shared/button";
import { ArrowLeft2 } from "iconsax-react";
import useSidebarToggle from "./use";

const SidebarToggle = () => {
  const { setSidebarStatus, sidebarStatus } = useSidebarToggle();
  return (
    <>
      <div
        className="absolute top-[64px] right-[-11px] w-[22px] h-[22px] 
        rounded-full bg-white dark:bg-zinc-900 border-[1px]
      border-dashed border-gray-200 z-10 overflow-hidden
      rtl:right-auto rtl:left-[-11px] lg:hidden"
      >
        <Button
          onClick={() =>
            setSidebarStatus({
              ...sidebarStatus,
              minimum: !sidebarStatus.minimum,
            })
          }
          className="flex justify-center items-center p-0 h-full w-full rounded relative"
          variant="ghost"
        >
          <RippleAnim />
          <ArrowLeft2 size="12" />
        </Button>
      </div>
    </>
  );
};
export default SidebarToggle;
