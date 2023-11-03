import Profile from "./profile";
import ToggleTheme from "./toggle-theme";

const Sidebar = () => {
  return (
    <>
      <div className="fixed right-0 left-[280px] top-0 h-[80px]">
        <div className="h-full w-full bg-white backdrop-blur-md flex justify-between items-center">
          <div className="flex justify-center items-center">
            <ToggleTheme />
            <Profile />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
