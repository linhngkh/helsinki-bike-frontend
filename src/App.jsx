import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Journeys } from "./components/Journeys";
import LandingPage from "./components/LandingPage";
import "./index.css";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<LandingPage />} />
        <Route path="/journeys" element={<Journeys />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/journeys">Journey</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
