import { Routes, Route } from "react-router-dom";
import FirstComponent from "./FirstComponent";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import SecondComponent from "./SecondComponent";

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="myfirstcomponent" element={<FirstComponent />} />
        <Route exact path="secondcomponent" element={<SecondComponent />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
