import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Home/Home";
import Create from "./Create/Create";
import NoPage from "./Pages/NoPage";

// import { Contrast } from "@mui/icons-material";
const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
