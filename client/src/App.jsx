import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import routes from "@/routes";
import { Home } from "./pages/home";


function App() {
  const { pathname } = useLocation();

  return (
    <>
      {/* <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes> */}
      return <Home />;
    </>
  );
}

export default App;
