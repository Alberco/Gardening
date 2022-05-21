import BannerPrincipalComponent from "./components/BannerPrincipalComponent";
import FooterComponent from "./components/FooterComponent";
import HeroComponent from "./components/HeroComponent";
import NavbarComponent from "./components/NavbarComponent";
import NosotrosComponent from "./components/NosotrosComponent";
import ProductComponent from "./components/ProductComponent";
import ServiciosComponent from "./components/ServiciosComponent";
import SliderBussinesComponent from "./components/SliderBussinesComponent";

const App = () => {
  return (
    <div>
        <BannerPrincipalComponent />
        <NavbarComponent />
        <HeroComponent />
        <NosotrosComponent />
        <SliderBussinesComponent />
        <ServiciosComponent />
        <ProductComponent />
        <FooterComponent />
    </div>
  )
};

export default App;
