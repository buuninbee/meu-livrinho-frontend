import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "@/modules/shared/components/Footer";

const Index = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Index;
