import React from 'react';

function BillDisplay({ order, price, friends }) {
  return (
    <div>
      <p>Bill for {order}:</p>
      <p>Total Price: ${price}</p>
      {friends.length > 0 && (
        <>
          <p>Each friend will pay: ${(price / friends.length).toFixed(2)}</p>
          <p>Friends:</p>
          <ul>
            {friends.map((friend, index) => (
              <li key={index}>{friend}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default BillDisplay;
