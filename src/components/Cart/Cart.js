import React, { Component, Fragment } from 'react';
import CartColmuns from './CartColmuns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals'

class Cart extends Component {
  render(){
    return(
      <section>
        <ProductConsumer>
          {value => {
            const {cart} = value;
            if(cart.length > 0) {
              return (
                <Fragment>
                  <CartColmuns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </Fragment>
              );
            }
            else {
              return (
                <Fragment>
                  <EmptyCart />
                </Fragment>
              )
              
            }
          }}
          
          
        </ProductConsumer>
          
      </section>
    )
  }
}

export default Cart;
