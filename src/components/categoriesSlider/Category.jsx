function Category({ _id, name, slug, image }) {
  return (
    <div className="category">
      <img src={image} alt="RealC35" />
      <h3 className="category-name">{name}</h3>
    </div>
  );
}

export default Category;
