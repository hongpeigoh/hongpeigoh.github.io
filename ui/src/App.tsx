import { RouterProvider } from "react-router-dom";

import { router } from "./routes/Routes";
import { Fallback } from "./components/Layout/Fallback";

const App = () => (
  <RouterProvider router={router} fallbackElement={<Fallback />} />
);

export default App;
