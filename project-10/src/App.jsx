import React from "react";
import { Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Movies from "./pages/Movies";
import Tvseries from "./pages/Tvseries";
import Account from "./pages/Account";
import Saved from './pages/Saved'
import ProtectedRoute from "./components/ProtectedRoute";

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
        <Route path={'/saved'} element={<ProtectedRoute><Saved/></ProtectedRoute>} />
      </Routes>
      </div>
    </>
  );
};

export default App;
