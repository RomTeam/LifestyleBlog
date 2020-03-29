import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  onDelete = id => {
    this.props.onDelete(id);
  };
  render() {
    let { product, index } = this.props;
    let status = product.status ? `badge badge-warning` : `badge badge-danger`;
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{product.code}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          {
            <span className={status}>
              {product.status ? "Còn hàng" : "Hết hàng"}
            </span>
          }
        </td>
        <td>
          <Link className="btn btn-warning" to={`/product/edit/${product.id}`}>Edit</Link>
          {/* <button type="button" className="btn btn-warning">
            Edit
          </button> */}
          <button
            type="button"
            className="btn btn-danger ml-2"
            onClick={() => this.onDelete(product.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
