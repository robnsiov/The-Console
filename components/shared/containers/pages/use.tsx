import sidebarStatusAtom from "@/context/atoms/sidebar-status";
import { useViewportSize } from "@mantine/hooks";
import { useAtom } from "jotai";

const usePageContainer = () => {
  const [sidebarStatus] = useAtom(sidebarStatusAtom);
  const { width } = useViewportSize();
  return { minimumSidebar: sidebarStatus.minimum && width > 1023 };
};
export default usePageContainer;
