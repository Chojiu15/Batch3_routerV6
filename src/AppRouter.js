import { Routes, Route } from "react-router-dom";
import FirstComponent from "./FirstComponent";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import SecondComponent from "./SecondComponent";
import User from "./User";
import Users from "./Users";

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route  path="myfirstcomponent" element={<FirstComponent />} />
        <Route exact path="secondcomponent" element={<SecondComponent />} />
        <Route  path="/" element={<HomePage />} />
        <Route path='users' element={<Users />} />
        <Route path='user/:userId' element={<User />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
