import TopHeader from "./components/header/TopHeader";
import BottomHeader from "./components/header/BottomHeader";
import Home from "./pages/home/Home";
import { CategoriesProvider } from "./contexts/CategoriesContext";

function App() {
  return (
    <>
      <CategoriesProvider>
        <header>
          <TopHeader />
          <BottomHeader />
        </header>
        <Home />
      </CategoriesProvider>
    </>
  );
}

export default App;
