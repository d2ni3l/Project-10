import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Movies from "./pages/Movies";
import Tvseries from "./pages/Tvseries";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="md:ml-[6.7rem]">
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/tvseries"} element={<Tvseries />} />
        <Route path={"/movies"} element={<Movies />} />
      </Routes>
      </div>
    </>
  );
};

export default App;
