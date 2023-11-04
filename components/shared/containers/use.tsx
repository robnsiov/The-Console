import appConfigsAtom from "@/context/atoms/app-configs";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { UseRootContainerImpl } from "./types";

const useRootContainer = ({ dir, locale }: UseRootContainerImpl) => {
  const [_, setAppConfig] = useAtom(appConfigsAtom);
  useEffect(() => {
    setAppConfig({ dir, locale });
  }, []);
  return {};
};
export default useRootContainer;
