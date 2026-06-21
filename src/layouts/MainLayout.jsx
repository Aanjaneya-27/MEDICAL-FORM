import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import Footer from "../components/Footer";

function MainLayout() {
return(
   <div className="min-h-screen bg-[#faf9f5] flex">
      <Sidebar />
      <div className="ml-72 flex-1 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
)

}

export default MainLayout