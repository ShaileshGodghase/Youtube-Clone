import "./Sidebar.scss";
import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, toggleSidebar } from "../../../store/slices/uiSlice";
import Logo from "../Logo/Logo";
import { categoryList } from "./CategoryList";
import CategoryLink from "./CategoryLink";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef } from "react";

function Sidebar() {
  const sidebar = useSelector((state: RootState) => state.ui.isSidebarOpen);
  const dispatch = useDispatch();

  const clickRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        clickRef.current &&
        !clickRef.current.contains(event.target as HTMLElement)
      ) {
        dispatch(closeSidebar());
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickRef]);

  return (
    <>
      <aside
        ref={clickRef}
        className={sidebar ? "sidebar-wrapper active" : "sidebar-wrapper"}
      >
        <div className="logo-wrapper">
          <div className="logo-content">
            <Logo />
          </div>
          <div className="close" onClick={() => dispatch(toggleSidebar())}>
            <AiOutlineClose />
          </div>
        </div>
        <div className="sidebar-content">
          <div className="list-heading-wrapper">
            <h2>Explore</h2>
          </div>
          <div>
            <ul>
              {categoryList.map((category) => {
                return (
                  <li key={category.label}>
                    <CategoryLink Icon={category.Icon} label={category.label} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
{
  /* <button onClick={() => dispatch(toggleSidebar())}>close</button> */
}

export default Sidebar;
