import Tabcard from "./Tabcard/Tabcard";
import { TabList } from "./Tablabellist";
import "./Tablist.scss";

function Tablist() {
  return (
    <>
      <section className="tab-list-section">
        {TabList.map((tab) => {
          return <Tabcard key={tab.label} label={tab.label} />;
        })}
      </section>
    </>
  );
}

export default Tablist;
