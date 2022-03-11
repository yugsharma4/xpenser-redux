import React from 'react'
import moment from 'moment';
import "./card.css"
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../redux/actions/expenses';

const Card = ({item ,notifySuccess}) => {
  const {title,amount,category,createdAt} = item;
  const time = moment(createdAt).fromNow();
  const dispatch = useDispatch();

  const handleDeleteExpense = () => {
    dispatch(deleteExpense(item));
    notifySuccess();
  }

  return (
    <div className='card' style={{ borderRight : `6px solid ${category.color}` }}>
      <div className="card-image-container">
        <img src={category.icon} alt="card-icon" className='card-image'/>
      </div>
      <div className="card-info">
          <label className = 'card-title'>{title}</label>
          <label className="card-time">{time}</label>
      </div>
      <div className="card-right">
        <div>
          <label className = "card-amount">₹ {amount}</label>
        </div>
        <div className="delete-icon" onClick={handleDeleteExpense}>
          <i className='fi-rr-trash'></i>
        </div>
      </div>

    </div>
  )
}

export default Card