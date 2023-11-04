export default interface RootContainerImpl extends UseRootContainerImpl {
  children: React.ReactNode;
}

export interface UseRootContainerImpl {
  locale: string;
  dir: "ltr" | "rtl";
}
