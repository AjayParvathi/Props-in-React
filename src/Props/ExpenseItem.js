import React from 'react';

const ExpenseItem = (props) => {
  return (
      <div>
      <div className='expense-item_description'>
    <h2>CAR MODEL:{props.title}</h2></div>
    <div className='expense-item_price'>
    PRICE:{props.amount}$</div>
    <div className='expense-item_date'>RELEASE DATE:{props.date.toISOString()}</div>
      </div>
      );
};

export default ExpenseItem;
