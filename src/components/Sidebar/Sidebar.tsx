import "./Sidebar.scss";
import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../../store/slices/uiSlice";

function Sidebar() {
  const sidebar = useSelector((state: RootState) => state.ui.isSidebarOpen);
  const dispatch = useDispatch();
  return (
    <>
      <aside className={sidebar ? "sidebar-wrapper active" : "sidebar-wrapper"}>
        Sidebar
        <button onClick={() => dispatch(toggleSidebar())}>close</button>
      </aside>
    </>
  );
}

export default Sidebar;
