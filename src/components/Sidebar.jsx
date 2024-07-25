import { FaChartPie, FaFileAlt, FaShoppingCart, FaUser } from "react-icons/fa";
import { Fa0, Fa6, FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav
      id='sidebarMenu'
      className='col-md-3 col-lg-2 d-md-block bg-light sidebar collapse'>
      <div className='pt-3'>
        <ul className='nav flex-column'>
          <li className='nav-item'>
            <Link className='nav-link' aria-current='page' to='/dashboard'>
              <span>
                <FaHouse className='me-2' />
              </span>
              Dashboard
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='orders'>
              <span>
                <FaFileAlt className='me-2' />
              </span>
              Orders
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' href='#'>
              <FaShoppingCart className='me-2' />
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <span>
                <FaUser className='me-2' />
              </span>
              Customers
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <span>
                <FaChartPie className='me-2' />
              </span>
              Reports
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
