import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import Home from './component/Home/Home';
import BouquetFlowers from './component/Bouquetflowers/Home';
import GirlsGifts from './component/Girlsgifts/Home';
import Frames from './component/Frames/Home';
import MobileCases from './component/Mobilecase/Home';
import BoysGifts from './component/Boysgifts/Home';
import Ramadan from './component/Ramdan/Home';
import About from './component/About/About';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, 
      { path: "home", element: <Home /> },
      { path: "bouquet-flowers", element: <BouquetFlowers /> },
      { path: "girls-gifts", element: <GirlsGifts /> },
      { path: "frames", element: <Frames /> },
      { path: "mobile-cases", element: <MobileCases /> },
      { path: "boys-gifts", element: <BoysGifts /> },
      { path: "ramadan", element: <Ramadan /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={routers} />;
}
