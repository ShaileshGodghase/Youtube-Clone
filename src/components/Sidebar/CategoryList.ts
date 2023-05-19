import {
  BsFire,
  BsRouterFill,
  BsNewspaper,
  BsTrophyFill,
  BsLightbulbFill,
} from "react-icons/bs";
import { TfiMusicAlt } from "react-icons/tfi";
import { BiCameraMovie } from "react-icons/bi";
import { SiYoutubegaming } from "react-icons/si";
import { FaShoppingBag } from "react-icons/fa";

export interface CategoryLinkProps {
  Icon: React.FC;
  label: string;
}

export const categoryList: CategoryLinkProps[] = [
  {
    Icon: BsFire,
    label: "Trending",
  },
  {
    Icon: TfiMusicAlt,
    label: "Music",
  },
  {
    Icon: BiCameraMovie,
    label: "Movies",
  },
  {
    Icon: BsRouterFill,
    label: "Live",
  },
  {
    Icon: SiYoutubegaming,
    label: "Gaming",
  },
  {
    Icon: BsNewspaper,
    label: "News",
  },
  {
    Icon: BsTrophyFill,
    label: "Sports",
  },
  {
    Icon: BsLightbulbFill,
    label: "Learning",
  },
  {
    Icon: FaShoppingBag,
    label: "Fashion",
  },
];
