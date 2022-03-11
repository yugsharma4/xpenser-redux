import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { serachExpense } from '../../redux/actions/expenses';
import "./topFold.css";

const TopFold = () => {
    
    const[search,setSearch] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        setSearch(e.target.value);
        dispatch(serachExpense(e.target.value));
    }

  return (
    <div className='topFold'>
        {
        window.location.pathname === '/' 
        ? 
        <div className="topFold__home">
            <div className="topFold__searchbar">
            <i className="fi-rr-search"></i>
                <input type="text" value = {search}  placeholder='Search...'  onChange={ handleSearch} />

            </div>

            <Link to='/add-expense'>
            <div className="topFold__button">
                <i className = "fi-rr-add" ></i>
                <label>Add</label>
            </div>
            </Link>
            
        </div>
        
        : <div className='add__topFold'>
             
             <Link to="/" >              <div className='add__topFold__button'>
                  <i className='fi-rr-angle-left'></i>
                  <label>Back</label>
              </div>
              </Link>

              <Link to="/" > 
              <div className='add__topFold__button'>
                  <i className='fi-rr-cross-circle'></i>
                  <label>Cancel</label>
              </div>
              </Link>
            </div>
            }
        
        
        
    </div>
  )
}

export default TopFold