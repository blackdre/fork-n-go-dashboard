import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContexts";
import { CiTrash } from "react-icons/ci";
import { FaEye, FaTrash } from "react-icons/fa";

const Products = () => {
  const { pruducts, loading, error } = useContext(ProductsContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
                  <th scope='col'>Name</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>action</th>
                </tr>
              </thead>
              <tbody>
                {pruducts.map((product) => (
                  <tr key={product.id}>
                    <th scope='row'>{product.id}</th>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>R{product.price}</td>
                    <td>
                      <button className='btn btn-sm btn-outline-danger pb-2 me-2'>
                        <FaTrash />
                      </button>
                      <button className='btn btn-sm btn-outline-info pb-2 '>
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
