
import Nav from './components/Nav'
import FrontPage from "./components/FrontPage";
import Menu from "./components/Menu"
import Carousel from "./components/Carousel"
import LogIn from './components/LogIn';
import Order from "./components/Order"
import About from "./components/About"
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Nav />
      <FrontPage />
      <Menu />
      <Carousel />
      <Order />
      <About />
      <Footer />
      <LogIn isLoggedIn={false} />
    </div>
  );
}

export default App;
