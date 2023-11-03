import Sidebar from "@/components/common/sidebar";
import RootContainerImpl from "./types";

const RootContainer = ({ children }: RootContainerImpl) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default RootContainer;
