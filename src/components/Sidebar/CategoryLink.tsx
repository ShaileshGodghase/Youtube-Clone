import "./Sidebar.scss";
import type { CategoryLinkProps } from "./CategoryList";

function CategoryLink({ Icon, label }: CategoryLinkProps) {
  return (
    <div className="category-link-wrapper">
      <a className="category-link" href="/trending">
        <Icon />
        {label}
      </a>
    </div>
  );
}

export default CategoryLink;
