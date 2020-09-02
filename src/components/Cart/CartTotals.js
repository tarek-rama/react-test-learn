import React, { Fragment } from 'react';
import { Link } from 'react-router-dom' ;

const CartTotals = ({value}) => {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col s12 m10 right">
                        <Link to="/" onClick={() => {clearCart()}}>
                            <button className="waves-effect waves-light btn">Clear Cart</button>
                        </Link>
                        <h5><span>Subtotal: $ {cartSubTotal}</span></h5>
                        <h5><span>Tax: $ {cartTax}</span></h5>
                        <h5><span>Total: $ {cartTotal}</span></h5>
                    </div>
                </div>
            </div>
        </Fragment>
        
    )
}

export default CartTotals;