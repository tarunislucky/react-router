import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import Homepage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Root from "./pages/Root";
function App() {
  // 1. create router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: <Homepage /> },
        { path: "products", element: <Products /> },
        { path: "products/:id", element: <ProductDetails /> }
      ]
    },
  ]);
  // 2. provide router
  return <RouterProvider router={router} />;
}

export default App;
