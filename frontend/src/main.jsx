import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Errorpage from "./components/Errorpage.jsx";
import Categorypage from "./pages/category/Categorypage.jsx";
import Search from "./pages/Search.jsx";
import Singleproduct from "./pages/products/Singleproduct.jsx";
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
