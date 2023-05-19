import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export default function HomeLayout() {
  return (
    <>
      <section>
        <Header />
        <Sidebar />
        <Outlet />
      </section>
    </>
  );
}
