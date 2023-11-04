import { Icon } from "iconsax-react";

export interface SidebarLinkImpl {
  title: string;
  label?: string;
  href: string;
  icon: Icon;
  subs?: Array<{ title: string; href: string }>;
}

export type SidebarLinksImpl = Array<{
  mainTitle: string;
  subs: Array<SidebarLinkImpl>;
}>;
