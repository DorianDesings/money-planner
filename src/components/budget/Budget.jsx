import { useState } from 'react';
import BudgetControl from '../badget-control/BadgetControl';

const Budget = () => {
	const [budget, setBudget] = useState(0);
	const [error, setError] = useState('');
	const [isValidBudget, setIsValidBudget] = useState(false);
	return isValidBudget ? (
		<BudgetControl budget={budget} />
	) : (
		<div>
			<h2>BUDGET</h2>
			<form
				onSubmit={e => {
					e.preventDefault();
					handleSubmit(error, setIsValidBudget);
				}}
			>
				<div>
					<label htmlFor=''>Definir Presupuesto</label>
					<input
						type='text'
						placeholder='¿How much is your budget?'
						value={budget}
						onChange={e => validateBudget(e.target.value, setBudget, setError)}
					/>
				</div>
				<input type='submit' value='Create Budget' disabled={budget <= 0} />
			</form>
			{error && <p>{error}</p>}
		</div>
	);
};

const validateBudget = (value, setBudget, setError) => {
	if (Number(value) || Number(value) > 0) setError('');
	else setError('Not a valid budget');
	setBudget(value);
};

const handleSubmit = (error, setIsValidBudget) => {
	if (!error) setIsValidBudget(true);
};

export default Budget;
