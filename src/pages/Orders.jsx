import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";

const Orders = () => {
  return (
    <>
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
        <h1 className='h2'>Orders</h1>
        <div className='btn-toolbar mb-2 mb-md-0'>
          <div className='btn-group me-2'>
            <button type='button' className='btn btn-sm btn-outline-secondary'>
              Share
            </button>
            <button type='button' className='btn btn-sm btn-outline-secondary'>
              Export
            </button>
          </div>
          <button
            type='button'
            className='btn btn-sm btn-outline-secondary dropdown-toggle'>
            <span data-feather='calendar'></span>
            This week
          </button>
        </div>
      </div>

      <div className='row'>
        <div className='col-xl-8 col-md-6 mb-4'>
          <div className='card border-left-primary shadow h-100 py-2'>
            <div className='card-body'>
              <div className='row no-gutters align-items-center'>
                <div className='col mr-2'>
                  <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                    Skhambani (Basic)
                  </div>
                  <div className='h5 mb-0 font-weight-bold text-gray-800'>
                    R 35.00
                  </div>
                  <div className='h6 mb-0 font-weight-bold text-gray-800'>
                    Blessing M
                  </div>
                </div>
                <div className='col-auto'>
                  <select name='' id=''>
                    <option value=''>preparing</option>
                    <option value=''>ready for collection</option>
                    <option value=''>collected</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-xl-8 col-md-6 mb-4'>
          <div className='card border-left-primary shadow h-100 py-2'>
            <div className='card-body'>
              <div className='row no-gutters align-items-center'>
                <div className='col mr-2'>
                  <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                    Skhambani (Basic)
                  </div>
                  <div className='h5 mb-0 font-weight-bold text-gray-800'>
                    R 35.00
                  </div>
                  <div className='h6 mb-0 font-weight-bold text-gray-800'>
                    Blessing M
                  </div>
                </div>
                <div className='col-auto'>
                  <select name='' id=''>
                    <option value=''>preparing</option>
                    <option value=''>ready for collection</option>
                    <option value=''>collected</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
