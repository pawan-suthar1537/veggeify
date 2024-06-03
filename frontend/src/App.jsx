import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import "./app.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default App;
