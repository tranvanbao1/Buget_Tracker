import {useContext} from 'react';
import { ExpenseTrackerContext } from './context/context';

import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

const useTransactions = (title) => {
    resetCategories();
    const {transactions} = useContext(ExpenseTrackerContext);
    const transactionsPerType =transactions.filter(t => t.type===title);
    const total = transactionsPerType.reduce((acc, currentValue)=>acc+=currentValue.amount,0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    console.log({transactionsPerType, total, categories});
    transactionsPerType.forEach((t) => {
        const category = categories.find(c => c.type === t.category);
        if(category) {
            category.amount += t.amount;
        }
    });

    const fileredCategories = categories.filter((c)=>c.amount > 0);
    const chartData = {
        datasets: [{
            data:fileredCategories.map((c)=>c.amount),
            backgroundColor:fileredCategories.map((c)=>c.color),
        }],
        labels: fileredCategories.map((c)=>c.type)
    }
    return {fileredCategories, total, chartData};
}
export default useTransactions;