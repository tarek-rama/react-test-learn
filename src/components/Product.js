import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

class Product extends Component  {
  render(){
    const {id, title, image, price, inCart} = this.props.product;
    return(
      <div className="col s12 m4">
      <div className="card hoverable">
        <ProductConsumer>
          {(value) => (
            <div className="card-image">
            <Link to="/details" >
            <img src={image} alt="product" onClick={() => value.handleDetail(id)}/>
            </Link>
            
            <button 
            className="btn-floating halfway-fab waves-effect waves-light red"
            disabled={inCart ? true : false} 
            onClick={() => {
            value.addToCart(id);
            value.openModal(id);
            }}>
              {inCart ? "inCart" : <i className="material-icons">add_shopping_cart</i>}
              </button>
            </div>
          )}
        
        </ProductConsumer>
        <div className="card-action">
        <span className="card-title">{title}</span>
        <span className="card-title right">$ {price}</span>
        </div>
      </div>
    </div>
    )
  }
  
}
export default Product;

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}
