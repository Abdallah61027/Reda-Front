import { Link } from "react-router-dom";
function Category({ name, slug, image }) {
  return (
    <Link to={`/categories/${slug}`}>
      <div className="category">
        <img src={image} alt={name} />
        <h3 className="category-name">{name}</h3>
      </div>
    </Link>
  );
}

export default Category;
