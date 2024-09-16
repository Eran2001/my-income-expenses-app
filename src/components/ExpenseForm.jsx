import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/actions/expenseActions';

const ExpenseForm = () => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount && description) {
            dispatch(addExpense({ id: Date.now(), amount: parseFloat(amount), description }));
            setAmount('');
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-medium">Add Expense</h2>
            <div>
                <label className="block text-gray-700">Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border rounded p-2 w-full"
                />
            </div>
            <div>
                <label className="block text-gray-700">Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border rounded p-2 w-full"
                />
            </div>
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
