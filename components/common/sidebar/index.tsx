"use client";

import { Blogger } from "iconsax-react";
import data from "./data";
import SidebarItem from "./item";
import { ScrollArea } from "@/components/ui/scroll-area";
import SidebarToggle from "./sidebar-toggle";
import useSidebar from "./use";
import cls from "classnames";
import Link from "@/components/shared/link";

const Sidebar = () => {
  const { toggleOpen, minimumSidebar, sidebarStatus } = useSidebar();
  return (
    <>
      <div
        onClick={() => toggleOpen(false)}
        className={cls(
          `fixed inset-0 bg-white/80 backdrop-blur z-[48] transition-all duration-200 dark:bg-slate-950/80`,
          sidebarStatus.open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      ></div>
      <div
        className={cls(
          `w-[280px] fixed inset-y-0 left-0 border-r-[1px]
      border-dashed border-gray-200 rtl:left-auto rtl:right-0
      rtl:border-r-0 rtl:border-l-[1px] lg:left-[-291px] lg:rtl:left-auto lg:rtl:right-[-291px]
       bg-white dark:bg-zinc-900 z-[49] transition-transform duration-300`,
          { "w-[92px]": minimumSidebar },
          { "translate-x-[291px] rtl:translate-x-[-291px]": sidebarStatus.open }
        )}
      >
        <SidebarToggle />
        <ScrollArea
          scrollHideDelay={400}
          type="scroll"
          className="w-full h-full"
        >
          <div
            className={cls(`p-3 flex justify-start items-start flex-col`, {
              "px-1": minimumSidebar,
            })}
          >
            <Link className="ms-4 my-4" href={"/"}>
              <Blogger variant="Bulk" size="38" />
            </Link>
            {data.map(({ subs, mainTitle }) => (
              <div
                key={mainTitle}
                className="w-full flex justify-start items-start flex-col"
              >
                {!minimumSidebar && (
                  <h2 className="text-xs ms-4 font-extrabold uppercase my-2 opacity-40">
                    {mainTitle}
                  </h2>
                )}

                {subs.map(({ href, icon: Icon, title, subs, label }) => (
                  <SidebarItem
                    minimumSidebar={minimumSidebar}
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
