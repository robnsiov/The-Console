"use client";
import { Separator } from "@/components/ui/separator";
import Language from "./language";
import Profile from "./profile";
import Search from "./search";
import ToggleSidebar from "./toggle-sidebar";
import ToggleTheme from "./toggle-theme";
import useNavbar from "./use";
import cls from "classnames";

const Navbar = () => {
  const { sidebarStatus } = useNavbar();
  return (
    <>
      <div
        className={cls(
          `fixed right-0 left-[280px] top-0 rtl:left-0 rtl:right-[280px]
      lg:!right-0 lg:!left-0 flex justify-start items-start flex-col`,
          { "ltr:left-[92px] rtl:right-[92px]": sidebarStatus.minimum }
        )}
      >
        <div className="h-full w-full bg-white dark:bg-zinc-900 backdrop-blur-md flex justify-between items-center p-4 lg:p-2">
          <div className="flex justify-start items-center">
            <ToggleSidebar />
            <Search />
          </div>
          <div className="flex justify-center items-center">
            <Language />
            <ToggleTheme />
            <Profile />
          </div>
        </div>
        <Separator className="opacity-70" />
      </div>
    </>
  );
};
export default Navbar;
