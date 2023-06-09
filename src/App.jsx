import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Journeys from "./components/journeys/Journeys";
import Home from "./components/homepage/Home";
import NavBar from "./components/navbar/NavBar";
import Stations from "./components/stations/Stations";
import SingleStation from "./components/stations/SingleStation";
import "./index.css";
import { stationLoader } from "./components/utils/stationLoader";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/journeys" element={<Journeys />} />
        <Route path="/stations" element={<Stations />}>
          <Route
            path="/stations/:id"
            element={<SingleStation />}
            loader={stationLoader}
          />
        </Route>
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
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
