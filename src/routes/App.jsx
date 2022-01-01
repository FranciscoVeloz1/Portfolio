import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Importing pages and layout
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";

//Importing context
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";

//Importing styles and assets
import "@styles/App.scss"

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
