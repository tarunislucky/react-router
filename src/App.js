import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
function App() {
  // 1. create router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />
    }
  ]);
  // 2. provide router
  return <RouterProvider router={router} />;
}

export default App;
