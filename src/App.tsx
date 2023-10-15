import HomePage from "./pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/image/:index",
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
