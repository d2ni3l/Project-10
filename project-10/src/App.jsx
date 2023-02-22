import React from "react";
import { Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Movies from "./pages/Movies";
import Tvseries from "./pages/Tvseries";
import Account from "./pages/Account";

const App = () => {
  return (
    <>
    
      <Navbar />
      <div className="md:ml-[6.7rem]">
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/tvseries"} element={<Tvseries />} />
        <Route path={"/movies"} element={<Movies />} />
        <Route path={'/account'} element={<Account/>} />
      </Routes>
      </div>
    </>
  );
};

export default App;
