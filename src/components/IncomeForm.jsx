import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIncome } from '../redux/actions/incomeActions';
import { addNotification } from '../redux/actions/notificationActions';

const IncomeForm = () => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount && description) {
            dispatch(addIncome({ id: Date.now(), amount: parseFloat(amount), description }));
            dispatch(addNotification({ id: Date.now(), message: 'Income added successfully!', type: 'success' }));
            setAmount('');
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-medium">Add Income</h2>
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
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Income</button>
        </form>
    );
};

export default IncomeForm;
