import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Dynamic Section */}
      <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto px-12">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
