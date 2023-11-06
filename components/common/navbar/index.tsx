"use client";
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
          `fixed right-0 left-[280px] top-0 h-[80px] rtl:left-0 rtl:right-[280px]
      lg:!right-0 lg:!left-0`,
          { "ltr:left-[80px] rtl:right-[80px]": sidebarStatus.minimum }
        )}
      >
        <div className="h-full w-full bg-white dark:bg-zinc-900 backdrop-blur-md flex justify-between items-center p-4">
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
      </div>
    </>
  );
};
export default Navbar;
