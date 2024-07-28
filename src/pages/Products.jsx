import React from "react";
import Modal from "../components/Modal";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className='row m-4'>
        <div className='col-xxl-12 mb-6 order-0'>
          <div className='card'>
            <div className='d-flex align-items-start row'>
              <div className='col-sm-7'>
                <div className='card-body'>
                  <h5 className='card-title text-primary mb-3'>
                    Welcome John! 🎉
                  </h5>
                  <p className='mb-6'>
                    Manage your products here
                    <br />
                  </p>

                  <Link
                    to='/dashboard/addproducts'
                    className='btn btn-sm btn-outline-primary'>
                    {/* <FaPlusCircle />  */}
                    Add new products
                  </Link>
                </div>
              </div>
              <div className='col-sm-5 text-center text-sm-left'>
                <div className='card-body pb-0 px-0 px-md-6'>
                  <img
                    src='../assets/img/illustrations/man-with-laptop.png'
                    height='175'
                    className='scaleX-n1-rtl'
                    alt='View Badge User'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row m-4'>
        <div className='col-xxl-12 mb-6 order-0'>
          <div className='card'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>First</th>
                  <th scope='col'>Last</th>
                  <th scope='col'>Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td colspan='2'>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
