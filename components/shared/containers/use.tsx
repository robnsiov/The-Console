import appConfigsAtom from "@/context/atoms/app-configs";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { UseRootContainerImpl } from "./types";
import { useDidUpdate } from "@mantine/hooks";
import { usePathname } from "next/navigation";
import sidebarStatusAtom from "@/context/atoms/sidebar-status";

const useRootContainer = ({ dir, locale }: UseRootContainerImpl) => {
  const [_, setAppConfig] = useAtom(appConfigsAtom);
  const [sidebarStatus, setSidebarStatus] = useAtom(sidebarStatusAtom);
  const pathname = usePathname();
  useEffect(() => {
    setAppConfig({ dir, locale });
  }, []);

  useDidUpdate(() => {
    setSidebarStatus({ ...sidebarStatus, open: false });
  }, [pathname]);

  return {};
};
export default useRootContainer;
