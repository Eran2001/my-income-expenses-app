import { useSelector } from 'react-redux';
import IncomeChart from './IncomeChart';
import ExpenseChart from './ExpenseChart';
import IncomeForm from './IncomeForm';
import ExpenseForm from './ExpenseForm';
import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';

import NotificationsList from './NotificationsList';

const Dashboard = () => {
    const totalIncome = useSelector((state) => state.income.totalIncome);
    const totalExpenses = useSelector((state) => state.expenses.totalExpenses);

    return (
        <div className="p-4 md:p-10 bg-gray-100 min-h-screen">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>
            </header>
            <NotificationsList />
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-medium">Total Income</h2>
                    <p className="text-3xl font-bold text-green-500">${totalIncome}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-medium">Total Expenses</h2>
                    <p className="text-3xl font-bold text-red-500">${totalExpenses}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-medium">Net Balance</h2>
                    <p className="text-3xl font-bold text-blue-500">
                        ${totalIncome - totalExpenses}
                    </p>
                </div>
            </section>
            <section className="mt-8 space-y-6">
                <IncomeForm />
                <ExpenseForm />
                <IncomeList />
                <ExpenseList />
            </section>
        </div>
    );
};

export default Dashboard;
