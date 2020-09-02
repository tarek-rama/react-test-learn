import React, { Component } from 'react';

class CartColmuns extends Component {
  render(){
    return(
        <div className="row hide-on-med-and-down center">
        <h1 className="center">Your Cart</h1>
          <div className="col s1 m2">Products</div>
          <div className="col s1 m2">Produc's Name</div>
          <div className="col s1 m2">Price</div>
          <div className="col s1 m2">Quantity</div>
          <div className="col s1 m2">Remove</div>
          <div className="col s1 m2">Total</div>
        </div>
    )
  }
}

export default CartColmuns;