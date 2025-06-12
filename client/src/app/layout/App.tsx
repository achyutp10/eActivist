import { Outlet, ScrollRestoration, useLocation } from "react-router";
import HomePage from "../../features/home/HomePage";
import NavBar from "./NavBar";

function App() {
  const location = useLocation();

  return (
    <div className="bg-gray-200 min-h-screen">
      <ScrollRestoration />
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <div className="max-w-screen-xl mx-auto pt-20 px-4">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
