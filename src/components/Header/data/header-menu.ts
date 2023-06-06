import doubleView from "assets/double-view.png";
import blockView from "assets/block-view.png";
import gridView from "assets/grid-view.png";
import { MenuItem } from "../types/menu-item";

export const headerMenu: MenuItem[] = [
  { id: 1, image: doubleView, isActive: false },
  { id: 2, image: blockView, isActive: false },
  { id: 3, image: gridView, isActive: true },
];
