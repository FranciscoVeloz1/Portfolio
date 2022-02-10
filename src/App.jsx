import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Importing pages, routes and layout
import Layout from "@containers/Layout";
import NotFound from "@pages/NotFound";
import routes from "@routes/index.routes";

//Importing context
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";

//Importing styles and assets
import "aos/dist/aos.css"
import "@styles/App.scss";

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map((r) => (
              <Route key={r.path} exact path={r.path} element={r.element} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
