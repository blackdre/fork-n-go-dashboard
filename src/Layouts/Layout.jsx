import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar />
          <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
