import React from 'react';

const CartItem = ({item, value}) => {
    const {id, title, image, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return(
      <div className="row center">
        <div className="col s12 m2">
            <img src={image} style={{width:"5rem",}} alt=""/>
        </div>
        <div className="col s12 m2">
            <span>Product: {title}</span>
        </div>
        <div className="col s12 m2">
            <span>Price:$ {price}</span>
        </div>
        <div className="col s12 m2">
            <div className="row">
                <i 
                className="material-icons col m4"
                style={{cursor:"pointer"}} 
                onClick={() => {decrement(id)}}>indeterminate_check_box</i>
                <span className="col m4" style={{border: "1px solid #CCC",fontSize:"14px"}}>
                {count}
                </span>
                <i 
                className="material-icons col m4"
                style={{cursor:"pointer"}} 
                onClick={() => {increment(id)}}>add_box</i>
            </div>
        </div>
        <div className="col s12 m2" onClick={() => {removeItem(id)}}>
                <i 
                className="material-icons"
                style={{cursor:"pointer"}}
                >delete</i>
            </div>
            <div className="col s12 m2">
                <span>Total:$ {total}</span>
            </div>
      </div>
    )
}

export default CartItem;