import React, { useState } from 'react';
import bakedetails from '../data/bakedetails.json';
import BakeOrderDetails from './BakeOrderDetails';

export default function BakesMenu() {
  const [order, setOrder] = useState([]);
  const totalOrders = order.reduce((acc, b) => acc + b.price * b.quantity, 0);

  const addToMyOrder = (bakedetails) => {
    const found = order.find((e) => e.id === bakedetails.id) 
    console.log(bakedetails);
    if (found) {
      setOrder((state) => 
           state.map((e) =>
      e.id === bakedetails.id ? { ...e, quantity: e.quantity + 1 } : e
      )
     );
    }
    else 
    setOrder((state) => [...state, { ...bakedetails, quantity:1 }]);
  };
  

  const deleteFromMyOrder = (bakedetails) => {
    const found = order.find((e) => e.id === bakedetails.id);
    if (found.quantity === 1) {
      setOrder(order.filter((e) => e.id !== bakedetails.id));
    } else {
      setOrder(
        order.map((e) =>
        e.id === bakedetails.id ? {...e, quantity: e.quantity - 1} : e
        )
      )
    }
  }

  return (
    <div>
    <div className="d-flex sticky-top border-bottom bg-white py-2" >
      {/*Order Display */}      
      <div className="row">
        {order.map((bakedetails, i) => (
            <div key={i} className="col-1 mb-4">
              <div>
                <img 
                  src={bakedetails.image} 
                  alt={bakedetails.name}
                  className="img-fluid"
                />
                <small><b>(x{bakedetails.quantity})</b></small>
              </div>
            </div>
          ))}
      </div>
      <div> <h1>{totalOrders}$  </h1><p><b>Total Price</b></p></div>
      </div>

      {/*bakedetails list*/}
      <div className="row mt-4">
        {bakedetails.map((bakedetails, i) => (
          <BakeOrderDetails 
            key={i} 
            bakedetails={bakedetails} 
            addToMyOrder={addToMyOrder} 
            deleteFromMyOrder={deleteFromMyOrder} 
          />
          ))}
      </div>
    </div>
  );
}





