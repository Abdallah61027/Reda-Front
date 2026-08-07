import HeroSlider from "../../components/HeroSlider";
import ProductsSlider from "../../components/productsSlider/ProductsSlider";
import CategoriesSlider from "../../components/CategoriesSlider/CategoriesSlider";
import "./home.css";

const categories = [];

function Home() {
  return (
    <div>
      <HeroSlider />
      <CategoriesSlider />
      <ProductsSlider title="Mobile" />
      <ProductsSlider title="Mobile" />
      <ProductsSlider title="Mobile" />
    </div>
  );
}

export default Home;
