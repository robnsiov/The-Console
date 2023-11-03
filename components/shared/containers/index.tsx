import Sidebar from "@/components/common/navbar";
import RootContainerImpl from "./types";
import ThemeContainer from "./theme";

const RootContainer = ({ children }: RootContainerImpl) => {
  return (
    <>
      <ThemeContainer>{children}</ThemeContainer>
      <Sidebar />
    </>
  );
};

export default RootContainer;
