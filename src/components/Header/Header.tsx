import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../../store/slices/uiSlice";
import "./Header.scss";

function Header() {
  const dispatch = useDispatch();

  return (
    <div className="header-wrapper">
      Header
      <button onClick={() => dispatch(toggleSidebar())}>click</button>
    </div>
  );
}

export default Header;
