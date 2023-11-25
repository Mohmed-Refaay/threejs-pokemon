import { atom } from "jotai";

export const sliderProgressAtom = atom(0);

export const activeSlideAtom = atom(0);

export const sliderDirectionAtom = atom<-1 | 1>(1);
