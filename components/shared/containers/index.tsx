import Sidebar from "@/components/common/sidebar";
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
