import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../../store/slices/uiSlice";
import { BiUserCircle } from "react-icons/bi";
import { CiMenuFries } from "react-icons/ci";
import Logo from "../Logo/Logo";
import "./Header.scss";
import Search from "../Search/Search";

function Header() {
  const dispatch = useDispatch();

  return (
    <header className="header-wrapper">
      <div className="header-logo">
        <Logo />
      </div>
      <div className="search-wrapper">
        <div className="search-container">
          <Search />
        </div>
        <div className="cta-section">
          <a className="cta-btn" onClick={() => dispatch(toggleSidebar())}>
            <BiUserCircle />
            Sign In
          </a>
        </div>
      </div>
      <div className="menu-btn" onClick={() => dispatch(toggleSidebar())}>
        <CiMenuFries />
      </div>
    </header>
  );
}

export default Header;
