import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = () => {
    return (
        <div className='expense-item'>
            <div>23 Feb, 2023</div>
            <div className='expense-item__description'>
                <h2>Bike Insurance</h2>
                </div>
            <div className='expense-item__price'>Rs2500</div>
        </div>
    )
}

export default ExpenseItem