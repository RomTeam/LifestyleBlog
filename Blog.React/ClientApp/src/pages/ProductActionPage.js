import React, { Component } from "react";
import callApi from "../utils/callApi";
import { Link } from "react-router-dom";

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtCode: "",
      txtName: "",
      txtPrice: "",
      ckStatus: ""
    };
    this.onChange.bind(this);
  }

  componentDidMount() {
    let { match } = this.props;
    if (match) {
      callApi(`products/${match.params.id}`, "Get", null).then(res => {
        console.log(res.data);
        let { code, name, price, status } = res.data;
        this.setState({
          txtCode: code,
          txtName: name,
          txtPrice: price,
          ckStatus: status
        });
      });
    }
  }

  onSubmit = e => {
    
    e.preventDefault();
    let { match } = this.props;
    let method = match ? "put" : "Post";
    let endpoint = match ? `products/${match.params.id}` : "products";
    console.log(method);
    let { txtCode, txtName, txtPrice, ckStatus } = this.state;
    let data = {
      code: txtCode,
      name: txtName,
      price: txtPrice,
      status: ckStatus,
    };
    if(match){
      data["id"] = match.params.id;
    }
    callApi(endpoint, method, data).then(res => {
      this.props.history.push("/product");
    })
  };

  onChange = e => {
    let name = e.target.name;
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [name]: value
    });
  };

  getTitle = () => {
    let { match } = this.props;
    if (match) {
      return <h2>Cập nhật sản phẩm</h2>;
    } else {
      return <h2>Thêm sản phẩm</h2>;
    }
  };
  render() {
    let { txtCode, txtName, txtPrice, ckStatus } = this.state;
    return (
      <div className="col-12">
        {/* {this.getTitle()} */}
        <h2>Thêm sản phẩm</h2>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Mã sản phẩm:</label>
            <input
              name="txtCode"
              type="text"
              className="form-control"
              value={txtCode}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Tên sản phẩm:</label>
            <input
              name="txtName"
              type="text"
              className="form-control"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Giá:</label>
            <input
              name="txtPrice"
              type="number"
              className="form-control"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Còn hàng:</label>
            <input
              name="ckStatus"
              type="checkbox"
              className="form-check-input ml-3 mt-2"
              value={ckStatus}
              checked={ckStatus}
              onChange={this.onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/product" className="btn btn-default">
            Trở về
          </Link>
        </form>
      </div>
    );
  }
}

export default ProductActionPage;
