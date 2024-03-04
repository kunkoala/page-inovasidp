import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MainBackground from "./Components/main-background";

const App = () => {
  return (
    <>
      <Navbar />
      <MainBackground />
      <Outlet />
    </>
  );
};

export default App;
