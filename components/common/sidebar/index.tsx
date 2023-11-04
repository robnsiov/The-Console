"use client";

import RippleAnim from "@/components/shared/anims/ripple";
import { Button } from "@/components/ui/button";
import { ArrowLeft2, Blogger } from "iconsax-react";
import data from "./data";
import SidebarItem from "./item";
import Link from "next-intl/link";
import { ScrollArea } from "@/components/ui/scroll-area";

const Sidebar = () => {
  return (
    <>
      {" "}
      <div
        className="w-[280px] fixed inset-y-0 left-0 border-r-[1px]
      border-dashed border-gray-200 rtl:left-auto rtl:right-0
      rtl:border-r-0 rtl:border-l-[1px]"
      >
        <div
          className="absolute top-[50px] right-[-11px] w-[22px] h-[22px] 
        rounded-full bg-white dark:bg-zinc-900 border-[1px]
      border-dashed border-gray-200 z-10 overflow-hidden
      rtl:right-auto rtl:left-[-11px]"
        >
          <Button
            className="flex justify-center items-center p-0 h-full w-full rounded relative"
            variant="ghost"
          >
            <RippleAnim />
            <ArrowLeft2 size="12" />
          </Button>
        </div>
        <ScrollArea className="w-full h-full">
          <div className="p-3 flex justify-start items-start flex-col">
            <Link className="ms-4 my-4" href={"/"}>
              <Blogger variant="Bulk" size="38" />
            </Link>
            {data.map(({ subs, mainTitle }) => (
              <div
                key={mainTitle}
                className="w-full flex justify-start items-start flex-col"
              >
                <h2 className="text-xs ms-4 font-extrabold uppercase my-2">
                  {mainTitle}
                </h2>
                {subs.map(({ href, icon: Icon, title, subs, label }) => (
                  <SidebarItem
                    href={href}
                    icon={Icon}
                    title={title}
                    subs={subs}
                    label={label}
                    key={title + href}
                  />
                ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>{" "}
    </>
  );
};
export default Sidebar;
