import { v4 as uuidV4 } from 'uuid'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = props => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidV4()
    }
    props.onAddExpense(expenseData)
  }

  return <div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
  </div>
}

export default NewExpense
