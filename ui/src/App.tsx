import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Fallback } from "./components/Layout/Fallback";
import { router } from "./routes/Routes";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out-cubic",
    });
  }, []);

  return <RouterProvider router={router} fallbackElement={<Fallback />} />;
};

export default App;
