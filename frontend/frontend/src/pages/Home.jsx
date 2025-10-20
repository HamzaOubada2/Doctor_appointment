import AboutUs from "../components/AboutUs";
import CallToAction from "../components/CallToAction";
import Departments from "../components/Departments";
import HeroSlider from "../components/HeroSlider";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <CallToAction/>
      <AboutUs/>
      <Stats/>
      <Departments/>
    </div>
  );
};

export default Home;
