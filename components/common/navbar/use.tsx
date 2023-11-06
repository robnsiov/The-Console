import sidebarStatusAtom from "@/context/atoms/sidebar-status";
import { useAtom } from "jotai";

const useNavbar = () => {
  const [sidebarStatus] = useAtom(sidebarStatusAtom);
  return { sidebarStatus };
};
export default useNavbar;
