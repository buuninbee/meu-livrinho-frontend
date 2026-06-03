import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const Index = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Index;
