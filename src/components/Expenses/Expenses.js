import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangedHandler = selectedYear => {
    console.log(selectedYear)
    setFilteredYear(selectedYear)
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />
        {props.items.map((expense, index) => {
          return <ExpenseItem key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        })}
      </Card>
    </div>
  )
}

export default Expenses
