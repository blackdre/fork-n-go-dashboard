import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div class='container-fluid'>
        <div class='row'>
          <Sidebar />
          <main class='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
