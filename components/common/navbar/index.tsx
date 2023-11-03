import Profile from "./profile";
import Search from "./search";
import ToggleTheme from "./toggle-theme";

const Sidebar = () => {
  return (
    <>
      <div className="fixed right-0 left-[280px] top-0 h-[80px]">
        <div className="h-full w-full bg-white dark:bg-zinc-900 backdrop-blur-md flex justify-between items-center p-4">
          <div>
            <Search />
          </div>
          <div className="flex justify-center items-center">
            <ToggleTheme />
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
