import React from 'react'
import Card from './card'
import "./expense-list.css"

const ExpenseList = () => {
    const list = [
    {
        title: "Title",
        logo: "osij",
        createdAt: Date.now(),
        amount: 123
    },
    {
        title: "Title",
        logo: "osij",
        createdAt: Date.now(),
        amount: 123
    }
]
  return (
    <div>
        {
            list.length ? list.map(item => <Card item={item}/>) : null
        }

    </div>
  )
}

export default ExpenseList;