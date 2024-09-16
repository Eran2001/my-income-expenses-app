import { useSelector } from 'react-redux';

const IncomeList = () => {
    const incomeList = useSelector((state) => state.income.incomeList);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-medium mb-4">Income List</h2>
            <ul>
                {incomeList.map((income) => (
                    <li key={income.id} className="border-b py-2">
                        <p className="font-semibold">${income.amount}</p>
                        <p>{income.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IncomeList;
