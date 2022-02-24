import { useRef, useState } from "react";
import Nav from "./components/Nav";
import FrontPage from "./components/FrontPage";
import Menu from "./components/Menu";
import Carousel from "./components/Carousel";
import LogIn from "./components/LogIn";
import About from "./components/About";
import Footer from "./components/Footer";
import Allergens from "./components/Allergens";
import Patties from "./components/Patties"

function App() {

  const [viewAllergens, setViewAllergens] = useState(false)

  const openAllergensModal = () => {
    setViewAllergens(true)
  }
  const closeAllergensModal = () => {
    setViewAllergens(false)
  }

  const scrollToMenu = useRef();
  const scrollToOrder = useRef();
  const scrollToAbout = useRef();
  const menuScrollHandler = () => {
    scrollToMenu.current.scrollIntoView({ behavior: "smooth" });
  };
  const orderScrollHandler = () => {
    scrollToOrder.current.scrollIntoView({ behavior: "smooth" });
  };
  const aboutScrollHandler = () => {
    scrollToAbout.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Nav
        menuScroll={menuScrollHandler}
        orderScroll={orderScrollHandler}
        aboutScroll={aboutScrollHandler}
        openModal={openAllergensModal}
      />
      <FrontPage
        menuScroll={menuScrollHandler}
        orderScroll={orderScrollHandler}
      />
      <div ref={scrollToMenu}></div>
      <Menu />
      <div ref={scrollToOrder}></div>
      <Carousel />
      <Patties />
      <div ref={scrollToAbout}></div>
      <About />
      <Footer />
      <Allergens view={viewAllergens} closeModal={closeAllergensModal}/>
      <LogIn isLoggedIn={false} />
    </div>
  );
}

export default App;
