import { useCategories } from "../../contexts/CategoriesContext";
import HeroSlider from "../../components/HeroSlider";
import ProductsSlider from "../../components/productsSlider/ProductsSlider";
import CategoriesSlider from "../../components/CategoriesSlider/CategoriesSlider";
import "./home.css";

const choosenCategories = ["smartphones", "laptops"];

function Home() {
  const { categories, isLoading } = useCategories();
  const homeSlidersCategories = choosenCategories
    .map((name) => categories.find((ele) => ele.name === name))
    .filter(Boolean);

  return (
    <div>
      <HeroSlider />
      <CategoriesSlider categories={categories} />
      {homeSlidersCategories.map((category) => {
        return <ProductsSlider key={category.name} category={category} />;
      })}
    </div>
  );
}

export default Home;
