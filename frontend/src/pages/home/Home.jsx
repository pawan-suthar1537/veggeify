import Hero from "../../components/Hero";
import CategoryWrapper from "../category/CategoryWrapper";
import AboutSection from "./AboutSection";
import CompanySlice from "./CompanySlice";
import FeaturedSection from "./FeaturedSection";
import LatestRecepies from "./LatestRecepies";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center w-full py-20">
        <Hero />
        <CategoryWrapper/>
      </div>
      {/* others  */}
      <FeaturedSection/>
      <LatestRecepies/>
      <AboutSection/>
      <CompanySlice/>
    </div>
  );
};

export default Home;
