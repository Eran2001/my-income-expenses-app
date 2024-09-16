import { useSelector } from 'react-redux';

const ExpenseList = () => {
    const expenseList = useSelector((state) => state.expenses.expenseList);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-medium mb-4">Expense List</h2>
            <ul>
                {expenseList.map((expense) => (
                    <li key={expense.id} className="border-b py-2">
                        <p className="font-semibold">${expense.amount}</p>
                        <p>{expense.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
