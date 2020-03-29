import React, { Component } from 'react'
import ProductList from '../components/ProductList/productlist';
import {Link} from 'react-router-dom'
class ProductListPage extends Component {
    render() {
      return (
        <div className="col-12">
        <Link type="button" className="btn btn-info mt-1" to='/product/add'>Thêm sản phẩm</Link>
          {/* <button type="button" className="btn btn-info mt-1">
            Thêm sản phẩm
          </button> */}
          <ProductList />
        </div>
      );
    }
  }
  
  export default ProductListPage;