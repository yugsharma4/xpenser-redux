import React, { useState } from 'react'
import { categories } from '../../constants/add-expense'
import './AddForm.css'

const AddForm = () => {
    const cat = categories;
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0);
    const [category, setCategory] = useState(null);
    const [dropdown, setDropdown]= useState(false);

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

    const handleSubmit = () => {
        
    }

  return (
    <div className='add-form'>
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
                <div className='category-dropdwon' onClick={()=> setDropdown(!dropdown)}>
                    <label>{category ? category.title : "category"}</label>
                    <i className='fi fir-rr-angle-down'></i>
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