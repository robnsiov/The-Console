import { Profile2User } from "iconsax-react";
import { SidebarLinksImpl } from "./types";

const data: SidebarLinksImpl = [
  {
    mainTitle: "Dashboard",
    subs: [
      {
        title: "Users",
        icon: Profile2User,
        href: "/",
        subs: [
          {
            title: "Profile",
            href: "/profile",
          },
          {
            title: "List",
            href: "/card",
          },
          {
            title: "Create",
            href: "/Create",
          },
        ],
      },
      { title: "Banking", href: "/banking", icon: Profile2User, label: "30%" },
    ],
  },
  {
    mainTitle: "Others",
    subs: [
      {
        title: "Users",
        icon: Profile2User,
        href: "/",
        subs: [
          {
            title: "Profile",
            href: "/profile",
          },
          {
            title: "List",
            href: "/card",
          },
          {
            title: "Create",
            href: "/Create",
          },
        ],
      },
      { title: "Banking", href: "/banking", icon: Profile2User, label: "30%" },
    ],
  },
  {
    mainTitle: "Others",
    subs: [
      {
        title: "Users",
        icon: Profile2User,
        href: "/",
        subs: [
          {
            title: "Profile",
            href: "/profile",
          },
          {
            title: "List",
            href: "/card",
          },
          {
            title: "Create",
            href: "/Create",
          },
        ],
      },
      { title: "Banking", href: "/banking", icon: Profile2User, label: "30%" },
    ],
  },
  {
    mainTitle: "Others",
    subs: [
      {
        title: "Users",
        icon: Profile2User,
        href: "/",
        subs: [
          {
            title: "Profile",
            href: "/profile",
          },
          {
            title: "List",
            href: "/card",
          },
          {
            title: "Create",
            href: "/Create",
          },
        ],
      },
      { title: "Banking", href: "/banking", icon: Profile2User, label: "30%" },
    ],
  },
];

export default data;
