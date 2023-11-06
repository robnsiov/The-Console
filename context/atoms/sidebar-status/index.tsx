import { atom } from "jotai";
import SidebarStatusImpl from "./types";

const sidebarStatusAtom = atom<SidebarStatusImpl>({
  minimum: false,
  open: false,
});

export default sidebarStatusAtom;
