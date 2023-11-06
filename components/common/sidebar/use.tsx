import sidebarStatusAtom from "@/context/atoms/sidebar-status";
import { useAtom } from "jotai";
import { useViewportSize } from "@mantine/hooks";

const useSidebar = () => {
  const [sidebarStatus, setSidebarStatus] = useAtom(sidebarStatusAtom);
  const { width } = useViewportSize();
  const toggleOpen = (open: boolean) => {
    setSidebarStatus({ ...sidebarStatus, open });
  };

  return {
    setSidebarStatus,
    minimumSidebar: sidebarStatus.minimum && width > 1023,
    sidebarStatus,
    toggleOpen,
  };
};
export default useSidebar;
