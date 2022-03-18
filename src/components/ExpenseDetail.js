import './ExpenseDetail.css'
function ExpenseDetail() {
    const expenseDate = new Date().toISOString(2, 28, 2021);
    const expenseTitle = ' Books'
    const expense

    return (
        <div className='expense-item'>
            <h5 className='expenseDateStyle'>{expenseDate}</h5>
            <h5 className='expenseItemStyle'>{expenseTitle}</h5>
        </div>
    )

}
export default ExpenseDetail;