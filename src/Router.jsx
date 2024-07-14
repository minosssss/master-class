import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import App from "./App.jsx";
import Coins from "./routes/Coins.jsx";
import Coin from "./routes/Coin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Coins />,
  },
  {
    path: "/:coinId",
    element: <Coin />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
