import sidebarStatusAtom from "@/context/atoms/sidebar-status";
import { useAtom } from "jotai";
import { useViewportSize } from "@mantine/hooks";

const useSidebar = () => {
  const [sidebarStatus, setSidebarStatus] = useAtom(sidebarStatusAtom);
  const { width } = useViewportSize();
  console.log(width);
  return {
    setSidebarStatus,
    minimumSidebar: !sidebarStatus.open && width > 1023,
  };
};
export default useSidebar;
