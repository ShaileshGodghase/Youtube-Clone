import { TabType } from "../TabTypes";
import "./Tabcard.scss";

function Tabcard({ label }: TabType) {
  return <div className="tab-card-wrapper">{label}</div>;
}

export default Tabcard;
