import sidebarStatusAtom from "@/context/atoms/sidebar-status";
import { useAtom } from "jotai";

const useToggleSidebar = () => {
  const [sidebarStatus, setSidebarStatus] = useAtom(sidebarStatusAtom);
  const toggleSidebar = () => {
    setSidebarStatus({ ...sidebarStatus, open: !sidebarStatus.open });
  };
  return { toggleSidebar };
};

export default useToggleSidebar;
