import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3>Boroloxx</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <h3>order summary: {cart.length}</h3>
            {cart.length > 2 ? <span>Aro kino</span> : <span>fakir</span>}
            {message}
            {
                cart.map(tshirt => <p 
                key={tshirt._id}
                >{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. Use if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'false'
*/