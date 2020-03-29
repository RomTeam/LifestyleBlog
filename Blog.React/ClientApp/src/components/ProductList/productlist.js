import React, { Component } from "react";
import ProductItem from "../ProductItem/productitem";
import { connect } from "react-redux";
import * as Actions from "../../redux/actions/actions";
import callApi from "../../utils/callApi";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  onDelete = id => {
    this.props.deleteProduct(id);
  };

  showProducts = products => {
    let result = null;
    result = products.map((product, index) => {
      return (
        <ProductItem
          product={product}
          key={index}
          index={index}
          onDelete={this.onDelete}
        />
      );
    });
    return result;
  };

  componentDidMount() {
    this.props.getProductList();
  }

  render() {
    let { products } = this.props;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Danh sách sản phẩm</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Mã</th>
                <th scope="col">Tên</th>
                <th scope="col">Giá</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>{this.showProducts(products)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.productProducer
  };
};

const mapPropToDispatch = dispatch => {
  return {
    getProductList: () => dispatch(() => {
      callApi("products").then(res => {
        dispatch(Actions.ActionGetProductList(res.data));
      });
    }),
    deleteProduct: (id) => {
      dispatch(() => {
        if (confirm("Are you sure?")) {//eslint-disable-line
          callApi(`products/${id}`, "Delete", null).then(res => {
            dispatch(Actions.ActionDeleteProduct(id));
          });
        }
      });
    } 
  };
};

export default connect(mapStateToProps, mapPropToDispatch)(ProductList);
