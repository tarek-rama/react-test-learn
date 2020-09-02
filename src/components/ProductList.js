import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import Product from './Product';
// import products  from '../reducers/products';


class ProductList extends Component {
  render(){
    return(
      <div className="row">
        <ProductConsumer>
          {value=> {
            return value.products.map(product => {
              return <Product product={product} key={product.id}/>
            })
          }}
        </ProductConsumer>
      </div>
    )
  }
}




export default ProductList;

