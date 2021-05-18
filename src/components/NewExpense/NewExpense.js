import { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidV4()
    }
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing &&
        <button onClick={startEditingHandler}>Add New Expense</button>
      }
      {isEditing &&
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      }
    </div>
  )
}

export default NewExpense
