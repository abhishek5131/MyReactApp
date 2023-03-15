import React from 'react'
// import ExpenseItem from './components/ExpenseItem'
import Expenses from './components/Expenses/Expenses' 

const App = () => {

  const expenses = [
    { id: 'e1', title: 'Tissue Paper', amount: 'Rs '+145, date: new Date(2023, 2, 12) },
    { id: 'e2', title: 'Bike Insurance', amount: 'Rs '+2345, date: new Date(2023, 1, 18) },
    { id: 'e3', title: 'Electricity Bill', amount: 'Rs '+1518, date: new Date(2022, 11, 27) },
    { id: 'e4', title: 'Rashan saman', amount: 'Rs '+7278, date: new Date(2022, 10, 16) }
  ]
  return (
    <div>
      <h1>Lets's get started</h1>
      <Expenses items = {expenses} />
      
    </div>
  )
}

export default App