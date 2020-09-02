import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';

class Details extends Component {
  render(){
    return(
      <ProductConsumer>
        {value => {
          const {id, image, title, company, price, info, inCart} = value.detailProduct;
          return (
            <div className="container">
              <div className="row">
              <h2 className="header">{title}</h2>
              <div className="card horizontal row">

                <div className="card-image">
                  <img src={image} alt="product"/>
                </div>
                <div className="card-stacked col">
                  <div className="card-content">
                    <h4>Company: {company}</h4>
                    <h5>Price :$ {price}</h5>
                    <h6>Information: {info}</h6>
                  </div>
                  <div className="card-action">
                    <Link to="/">Back to Products</Link>
                    <button 
                    disabled={inCart ? true : false} 
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                      }}>
                      {inCart ? "inCart" : "Add To Cart"}
                      </button>
                  </div>
                </div>

              </div>
            </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}

export default Details;