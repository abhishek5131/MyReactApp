import React from 'react'
import ExpenseItem from './components/ExpenseItem'

const App = () => {

  const expenses = [
    { id: 'e1', title: 'Tissue Paper', amount: 'Rs'+102.10, date: new Date(2023, 2, 12) },
    { id: 'e2', title: 'Bike Insurance', amount: 'Rs'+2345, date: new Date(2023, 1, 18) },
    { id: 'e3', title: 'Electricity Bill', amount: 'Rs'+1518, date: new Date(2022, 11, 27) },
    { id: 'e4', title: 'Rashan saman', amount: 'Rs'+7278, date: new Date(2022, 10, 16) }
  ]
  return (
    <div>
      <h1>Lets's get started</h1>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </div>
  )
}

export default App