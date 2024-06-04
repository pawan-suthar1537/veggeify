import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Errorpage from "./components/Errorpage.jsx";
import Categorypage from "./pages/category/Categorypage.jsx";
import Search from "./pages/Search.jsx";
import Singleproduct from "./pages/products/Singleproduct.jsx";
import Recipes from "./pages/products/Recipes.jsx";
import About from "./pages/about/About.jsx";
import Contactus from "./pages/contact/Contactus.jsx";
const apiUrl = import.meta.env.VITE_API_URL;


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "categories/:category",
        element: <Categorypage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/item/:id",
        element: <Singleproduct />,
        loader:({params}) => fetch(`${apiUrl}/api/items/${params.id}`),
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
