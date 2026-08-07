import TopHeader from "./components/header/TopHeader";
import BottomHeader from "./components/header/BottomHeader";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BottomHeader />
      </header>
      <Home />
    </>
  );
}

export default App;
