import sidebarStatusAtom from "@/context/atoms/sidebar-status";
import { useAtom } from "jotai";

const useSidebarToggle = () => {
  const [sidebarStatus, setSidebarStatus] = useAtom(sidebarStatusAtom);
  return { setSidebarStatus, sidebarStatus };
};
export default useSidebarToggle;
