import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./HomeLayout.scss";
import Tablist from "../TablistComp/Tablist";

export default function HomeLayout() {
  return (
    <>
      <section className="layout-wrapper">
        <Sidebar />
        <section className="content-wrapper">
          <Header />
          <Tablist />
          <Outlet />
        </section>
      </section>
    </>
  );
}
