
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [budgetUpdate, setBudgetUpdate] = useState(budget);

    const budgetLimit = 20000;

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const onBudgetUpdate = (e) => {
        // Set the upper limit value to 20,000
        if (budgetUpdate > (budgetLimit - 1)) {
            alert("Budget cannot exceed: 20000");
            setBudgetUpdate(budget);
        } else if (budgetUpdate < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            setBudgetUpdate(totalExpenses);
        } else {
            setBudgetUpdate(e.target.value)
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    step='10'
                    value={budgetUpdate}
                    style={{ size: 10}}
                    onChange={(event) => onBudgetUpdate(event)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;
