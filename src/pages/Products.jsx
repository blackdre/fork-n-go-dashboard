import React from "react";
import Modal from "../components/Modal";

const Products = () => {
  return (
    <>
      <div class='row m-4'>
        <div class='col-xxl-12 mb-6 order-0'>
          <div class='card'>
            <div class='d-flex align-items-start row'>
              <div class='col-sm-7'>
                <div class='card-body'>
                  <h5 class='card-title text-primary mb-3'>Welcome John! 🎉</h5>
                  <p class='mb-6'>
                    Manage your products here
                    <br />
                  </p>

                  <button
                    class='btn btn-sm btn-outline-primary'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'>
                    View Badges
                  </button>
                  <Modal target='#exampleModal' />
                </div>
              </div>
              <div class='col-sm-5 text-center text-sm-left'>
                <div class='card-body pb-0 px-0 px-md-6'>
                  <img
                    src='../assets/img/illustrations/man-with-laptop.png'
                    height='175'
                    class='scaleX-n1-rtl'
                    alt='View Badge User'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='row m-4'>
        <div class='col-xxl-12 mb-6 order-0'>
          <div className='card'>
            <table class='table'>
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
