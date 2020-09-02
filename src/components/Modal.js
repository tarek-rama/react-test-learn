import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import M from 'materialize-css';

class Modal extends Component {

    // componentDidMount () {
    //     document.addEventListener('DOMContentLoaded', function() {
    //         let elems = document.querySelectorAll('.modal');
    //         M.Modal.init(elems, {});
    //       });
    // }
    

  render(){
    return(
      <ProductConsumer>
        {(value) => {
            const {modalOpen, closeModal} = value;
            const {image, title, price} = value.modalProduct;
            if(!modalOpen) {
                return null
            }
            else {
                return (
                    <ModalContainer>
                        <div className="container">
                                <div id="modal" className="row">
                                    <div className="modal-content col s12 center">
                                    <h5 className="center">Item Add To Cart</h5>
                                    <img src={image} alt="item"/>
                                    <h6>{title}</h6>
                                    <h6>$ {price}</h6>
                                    <Link className="waves-effect waves-light btn" to="/" onClick={() => closeModal()}>Store</Link>
                                    <Link className="waves-effect waves-light btn" to="/cart" onClick={() => closeModal()}>Go To Cart</Link>
                                    </div>
                                </div>
                        </div>
                        
                    </ModalContainer>
                )
                
            }
        }}
      </ProductConsumer>
    )
  }
}

export default Modal;

const ModalContainer = styled.div `
z-index:5;
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal {
    overflow:hidden;
    background: var(--mainWhite);
}
img {
    width:70%;
}
`