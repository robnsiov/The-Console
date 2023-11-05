import { atom } from "jotai";
import SidebarStatusImpl from "./types";

const sidebarStatusAtom = atom<SidebarStatusImpl>({ open: true });

export default sidebarStatusAtom;
