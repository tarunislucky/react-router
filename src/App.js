import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
function App() {
  // 1. create router
  const router = createBrowserRouter([
    { path: "/", element: <Homepage /> },
    { path: "/products", element: <Products /> }
  ]);
  // 2. provide router
  return <RouterProvider router={router} />;
}

export default App;
