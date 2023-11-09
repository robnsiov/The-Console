import {
  AirplaneSquare,
  Bag2,
  Bank,
  Blogger,
  Box,
  Calendar2,
  Coin1,
  Dash,
  Flag2,
  Folder2,
  FolderOpen,
  Note1,
  Profile2User,
  ShoppingBag,
  StatusUp,
  TransmitSqaure2,
  Whatsapp,
  WifiSquare,
} from "iconsax-react";
import { SidebarLinksImpl } from "./types";

const data: SidebarLinksImpl = [
  {
    mainTitle: "OverView",
    subs: [
      {
        title: "App",
        icon: Dash,
        href: "/",
      },
      {
        title: "E-Commerce",
        icon: ShoppingBag,
        href: "/ecoomerce",
      },
      {
        title: "Analitycs",
        icon: StatusUp,
        href: "/analitycs",
      },
      {
        title: "Banking",
        icon: Bank,
        href: "/banking",
      },
      {
        title: "Booking",
        icon: AirplaneSquare,
        href: "/booking",
      },
      {
        title: "File",
        icon: Folder2,
        href: "/file",
      },
    ],
  },
  {
    mainTitle: "Management",
    subs: [
      {
        title: "User",
        icon: Profile2User,
        href: "#",
        subs: [
          {
            title: "Profile",
            href: "/user",
          },
          {
            title: "Cards",
            href: "/user/cards",
          },
          {
            title: "List",
            href: "/user/list",
          },
          {
            title: "Create",
            href: "/user/create",
          },
          {
            title: "Edit",
            href: "/user/edit",
          },
          {
            title: "Account",
            href: "/user/account",
          },
        ],
      },
      {
        title: "Product",
        icon: Box,
        href: "#",
        subs: [
          {
            title: "List",
            href: "/product",
          },
          {
            title: "Details",
            href: "/product/details",
          },
          {
            title: "Create",
            href: "/product/create",
          },
          {
            title: "Edit",
            href: "/product/edit",
          },
        ],
      },
      {
        title: "Order",
        icon: Bag2,
        href: "#",
        subs: [
          {
            title: "List",
            href: "/order",
          },
          {
            title: "Details",
            href: "/order/details",
          },
        ],
      },
      {
        title: "Invoce",
        icon: Note1,
        href: "#",
        subs: [
          {
            title: "List",
            href: "/invoce",
          },
          {
            title: "Details",
            href: "/invoce/details",
          },
          {
            title: "Create",
            href: "/invoce/Create",
          },
          {
            title: "Edit",
            href: "/invoce/edit",
          },
        ],
      },
      {
        title: "Blog",
        icon: Blogger,
        href: "#",
        subs: [
          {
            title: "List",
            href: "/blog",
          },
          {
            title: "Details",
            href: "/blog/details",
          },
          {
            title: "Create",
            href: "/blog/Create",
          },
          {
            title: "Edit",
            href: "/blog/edit",
          },
        ],
      },
      {
        title: "Job",
        icon: Coin1,
        href: "#",
        subs: [
          {
            title: "List",
            href: "/job",
          },
          {
            title: "Details",
            href: "/job/details",
          },
          {
            title: "Create",
            href: "/job/Create",
          },
          {
            title: "Edit",
            href: "/job/edit",
          },
        ],
      },
      {
        title: "Tour",
        icon: Flag2,
        href: "#",
        subs: [
          {
            title: "List",
            href: "/tour",
          },
          {
            title: "Details",
            href: "/tour/details",
          },
          {
            title: "Create",
            href: "/tour/Create",
          },
          {
            title: "Edit",
            href: "/tour/edit",
          },
        ],
      },
      {
        title: "File Manager",
        icon: FolderOpen,
        href: "/file-manager",
      },
      {
        title: "Mail",
        icon: WifiSquare,
        href: "/mail",
        label: "+32",
      },
      {
        title: "Chat",
        icon: Whatsapp,
        href: "/chat",
      },
      {
        title: "Calender",
        icon: Calendar2,
        href: "/calender",
      },
      {
        title: "Kanban",
        icon: TransmitSqaure2,
        href: "/kanban",
      },
    ],
  },
];

export default data;
