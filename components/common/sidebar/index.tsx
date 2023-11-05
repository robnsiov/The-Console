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
  const { setSidebarStatus, minimumSidebar } = useSidebar();
  return (
    <>
      {" "}
      <div
        className={cls(
          `w-[280px] fixed inset-y-0 left-0 border-r-[1px]
      border-dashed border-gray-200 rtl:left-auto rtl:right-0
      rtl:border-r-0 rtl:border-l-[1px]`,
          { "w-[80px]": minimumSidebar }
        )}
      >
        <SidebarToggle />
        <ScrollArea className="w-full h-full">
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
                  <h2 className="text-xs ms-4 font-extrabold uppercase my-2">
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
