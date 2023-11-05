import { SidebarLinkImpl } from "../types";

export default interface SidebarItemImpl extends SidebarLinkImpl {
  minimumSidebar: boolean;
}
