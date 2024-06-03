import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import "./app.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Header />
      <div className="hin-h-[calc(100vh-136px)]">
      <Outlet />
        </div>
      <Footer/>
    </div>
  );
};

export default App;
