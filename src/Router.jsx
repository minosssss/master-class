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
import Chart from "./routes/Chart.jsx";
import Price from "./routes/Price.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Coins />,
//   },
//   {
//     path: "/:coinId",
//     element: <Coin />,
//   },
// ]);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Coins />,
    },
    {
      path: "/:coinId",
      element: <Coin />,
      children: [
        {
          path: "chart",
          element: <Chart />,
        },
        {
          path: "price",
          element: <Price />,
        },
      ],
    },
  ],
  { basename: "/" },
);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
