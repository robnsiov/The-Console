import Sidebar from "@/components/common/navbar";
import RootContainerImpl from "./types";
import ThemeContainer from "./theme";

const RootContainer = ({ children }: RootContainerImpl) => {
  return (
    <>
      <ThemeContainer>
        <div className="min-h-screen dark:bg-zinc-900">{children}</div>
        <Sidebar />
      </ThemeContainer>
    </>
  );
};

export default RootContainer;
