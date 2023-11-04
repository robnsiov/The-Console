import { atom } from "jotai";
import AppConfigsAtomImpl from "./types";

const appConfigsAtom = atom<AppConfigsAtomImpl>({ dir: null, locale: null });

export default appConfigsAtom;
