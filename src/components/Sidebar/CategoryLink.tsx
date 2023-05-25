import "./Sidebar.scss";
import type { CategoryLinkProps } from "./CategoryList";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../../../store/slices/uiSlice";

function CategoryLink({ Icon, label }: CategoryLinkProps) {
  const dispatch = useDispatch();
  return (
    <Link
      className="category-link-wrapper"
      to={"/category/" + label}
      onClick={() => dispatch(closeSidebar())}
    >
      <div className="category-link">
        <Icon />
        {label}
      </div>
    </Link>
  );
}

export default CategoryLink;
