import { Link } from "react-router-dom";
import { TabType } from "../TabTypes";
import "./Tabcard.scss";

function Tabcard({ label }: TabType) {
  return (
    <Link to={"/category/" + label} className="tab-card-wrapper">
      {label}
    </Link>
  );
}

export default Tabcard;
