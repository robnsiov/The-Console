import Profile from "./profile";

const Sidebar = () => {
  return (
    <>
      <div className="fixed right-0 left-[280px] top-0 h-[80px]">
        <div className="h-full w-full bg-white backdrop-blur-md flex justify-between items-center">
          <div>
            <Profile />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
