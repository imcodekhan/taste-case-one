import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import AddProducts from "./components/AddProduct";
import Products from "./components/Products";

class App extends Component {
  state = {
    currentLoggedinId: "",
    isLoggedIn: false,
    loggedInVendor: {},
    isRegistered: true,
    addProductDisplay: false,
    dashBoardDisplay: false
  };

  // functions to handle clicks

  handlePostLogin = (vendor, id) => {
    console.log("login clicked", vendor);
    this.setState({
      isLoggedIn: true,
      currentLoggedinId: id,
      loggedInVendor: vendor
    });
  };

  handleProductAdd = () => {
    this.setState({ addProductDisplay: false });
    console.log("product added");
  };

  handleSubmit = (vendor, id) => {
    console.log("registration completed and logged in as well");
    this.setState({
      isLoggedIn: true,
      currentLoggedinId: id,
      isRegistered: true,
      loggedInVendor: vendor
    });
  };

  handleInput = e => {
    // console.log(e.target.name)
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <nav>vendor corner</nav>

        {/* login signup page */}

        <div style={{ display: this.state.isLoggedIn ? "none" : "block" }}>
          <div style={{ display: this.state.isRegistered ? "block" : "none" }}>
            <Login handlePostLogin={this.handlePostLogin} />
            <input
              type="button"
              value="Register"
              onClick={() => {
                this.setState({ isRegistered: false });
              }}
            />
          </div>
          <div style={{ display: this.state.isRegistered ? "none" : "block" }}>
            <Register handleSubmit={this.handleSubmit} />
            <input
              type="button"
              value="Login"
              onClick={() => {
                this.setState({ isRegistered: true });
              }}
            />
          </div>
        </div>

        {/* Main page after login */}
        <div style={{ display: this.state.isLoggedIn ? "block" : "none" }}>
          <div
            className="dashboard"
            style={{ display: this.state.dashBoardDisplay ? "block" : "none" }}
          >
            <input
              type="button"
              value="products"
              onClick={() => {
                this.setState({ dashBoardDisplay: false });
              }}
            />
            this is dashboard
          </div>

          <div
            className="productlist"
            style={{ display: this.state.dashBoardDisplay ? "none" : "block" }}
          >
            <input
              type="button"
              value="dashboard"
              onClick={() => {
                this.setState({ dashBoardDisplay: true });
              }}
            />
            <Products currentId={this.state.currentLoggedinId} />
            <div
              style={{
                display: this.state.addProductDisplay ? "block" : "none"
              }}
            >
              <AddProducts
                handleProductAdd={this.handleProductAdd}
                currentId={this.state.currentLoggedinId}
              />
            </div>
            <input
              style={{
                borderRadius: "50%",
                height: 50,
                width: 50,
                display: this.state.addProductDisplay ? "none" : "block"
              }}
              type="button"
              value="+"
              onClick={() => {
                this.setState({ addProductDisplay: true });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
