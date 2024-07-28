import { FaChartBar, FaHome, FaShoppingBag } from "react-icons/fa";
import { FaCartShopping, FaUserGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav
      id='sidebarMenu'
      className='col-md-3 col-lg-2 d-md-block bg-light sidebar collapse'>
      <div className='position-sticky pt-3'>
        <ul className='nav flex-column'>
          <li className='nav-item'>
            <Link className='nav-link' aria-current='page' to='/dashboard'>
              <span>
                <FaHome className='me-2' />
              </span>
              Dashboard
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='orders'>
              <span>
                {" "}
                <FaShoppingBag className='me-2' />
              </span>
              Orders
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='products'>
              <span>
                <FaCartShopping className='me-2' />
              </span>
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <span>
                <FaUserGroup className='me-2' />
              </span>
              Customers
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <span>
                <FaChartBar className='me-2' />
              </span>
              Reports
            </a>
          </li>
        </ul>

        <h6 className='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted'>
          <span>Saved reports</span>
          <a className='link-secondary' href='#' aria-label='Add a new report'>
            <span data-feather='plus-circle'></span>
          </a>
        </h6>
        <ul className='nav flex-column mb-2'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <span data-feather='file-text'></span>
              Current month
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <span data-feather='file-text'></span>
              Last quarter
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <span data-feather='file-text'></span>
              Social engagement
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <span data-feather='file-text'></span>
              Year-end sale
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
