import { CSSProperties } from "react";

import Apartment from "../../../public/img/home/apartment.svg";
import Location from "../../../public/img/home/location.svg";
import Arrow from "../../../public/img/home/arrow-left.svg";
import Popular from "../../../public/img/home/popular.svg";
import Wallet from "../../../public/img/home/wallet.svg";
import New from "../../../public/img/home/newHouse.svg";
import Villa from "../../../public/img/home/villa.svg";
import Logo from "../../../public/img/header/logo.svg";
import Home from "../../../public/img/home/home.svg";

import Bathroom from "../../../public/img/home/bathroom.svg";
import Bedroom from "../../../public/img/home/bedroom.svg";
import Carport from "../../../public/img/home/carport.svg";
import Floor from "../../../public/img/home/floor.svg";
import Call from "../../../public/img/home/call.svg";

type Switcher =
  | "house"
  | "villa"
  | "apartment"
  | "arrow"
  | "location"
  | "logo"
  | "popular"
  | "wallet"
  | "newHouse"
  | "bedroom"
  | "bathroom"
  | "carport"
  | "floor"
  | "call";

interface Props {
  variant: Switcher | string;
  style?: CSSProperties;
}

export const SvgSwitcher = ({ variant, style }: Props) => {
  switch (variant) {
    case "house":
      return <Home style={style} />;
    case "villa":
      return <Villa style={style} />;
    case "apartment":
      return <Apartment style={style} />;
    case "arrow":
      return <Arrow style={style} />;
    case "location":
      return <Location style={style} />;
    case "logo":
      return <Logo style={style} />;
    case "wallet":
      return <Wallet style={style} />;
    case "popular":
      return <Popular style={style} />;
    case "newHouse":
      return <New style={style} />;
    case "bedroom":
      return <Bedroom style={style} />;
    case "bathroom":
      return <Bathroom style={style} />;
    case "carport":
      return <Carport style={style} />;
    case "floor":
      return <Floor style={style} />;
    case "call":
      return <Call style={style} />;
    default:
      return <></>;
  }
};
