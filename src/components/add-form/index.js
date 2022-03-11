import React, { useState } from 'react'
import { categories } from '../../constants/add-expense'
import './AddForm.css'
import { useDispatch } from 'react-redux'
import { addExpense } from '../../redux/actions/expenses'
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './success-modal'

const AddForm = () => {
    const cat = categories;
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0);
    const [category, setCategory] = useState(null);
    const [dropdown, setDropdown]= useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    const handleTitle = (e) => setTitle(e.target.value);

    const handleAmount = (e) => {
        const val = parseFloat(e.target.value);
        if(isNaN(val)){
            setAmount('')
            return
        }
        setAmount(val);
    }

    const handleCategory = (cate) => {
        setCategory(cate);
        setDropdown(false)
    }

    const notifyAdded = () => toast.success("Expense Added!");

    const handleSubmit = () => {
            if(title === '' || amount === '' || category === ''){
                const notify = () => toast("Please enter valid data!");
                notify();
                return;
            }
            const data = {
                title,
                amount,
                category,
                createdAt: new Date()
            }
            setModalOpen(true);
            dispatch(addExpense(data));
            notifyAdded();

            
    }

  return (
    <div className='add-form'>
          <ToastContainer
              position="bottom-left"
              autoClose={1500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
          />
          <SuccessModal modalOpen={modalOpen}/>
        <div className="form-item">
            <label>Title</label>
            <input type="text" 
            value={title} placeholder='Give a name to your expenditure'
            onChange={handleTitle}/>
        </div>
        <div className="form-item">
            <label>Amount ₹</label>
            <input type="text" 
            value={amount} 
            className = "amount-input"
            placeholder='Enter amount' onChange={handleAmount}/>
        
        </div>
        <div className="category-container-parent">
            <div className="category">
                <div className='category-dropdown' onClick={() => setDropdown(!dropdown)}>
                    <label>{category ? category.title : "category"}</label>
                    <i class="fi fi-rr-caret-down"></i>
                </div>
                {dropdown && <div className='category-container'>
                    {
                        cat.map(cate => (
                            
                            <div className='category-item' style={{
                                borderRight:`5px solid ${cate.color}`
                            }} key={cate.id} onClick={()=> handleCategory(cate)}>
                                <label>{cate.title}</label>
                                <img src={cate.icon} alt="img" />
                            </div>
                        ))
                    }

                    </div>}
            </div>
        </div>
        <div className="form-add-button">
            <div onClick={handleSubmit}>
                <label>Add</label>
                <i className='fi-rr-paper-plane'></i>
            </div>
        </div>
    </div>
  )
}

export default AddForm;