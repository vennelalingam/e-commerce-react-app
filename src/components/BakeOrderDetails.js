import React from 'react';

export default function BakeOrderDetails({ bakedetails, addToMyOrder, deleteFromMyOrder }) {

   return (
    <div className="col-3 mb-4">
      <div>
        <img 
          src={bakedetails.image} 
          alt={bakedetails.name}
          className="img-fluid"
        />
      </div>
      <br />
      <div><b>Title: </b>{bakedetails.name}</div>
      <div><b>Price: </b>{bakedetails.price}</div>
      <br />
      <div className="d-grid gap-2 col-6 mx-auto">
        <button 
          className="btn btn-primary" 
          type="button" 
          onClick={() => addToMyOrder(bakedetails)}>
            Add To Cart
        </button>        
      </div>
      <br/>
      <div class="d-grid gap-2 col-6 mx-auto">
      <button 
        className="btn btn-primary" 
        type="button" 
        onClick={() => deleteFromMyOrder(bakedetails)}>
          Delete From Cart
      </button>
      </div>
    </div>
  );
}
