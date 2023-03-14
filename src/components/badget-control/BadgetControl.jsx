import { useState } from 'react';
import Modal from '../modal/Modal';

const BudgetControl = ({ budget }) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<div>
				<div>
					<h2>Grafica</h2>
				</div>
				<div>
					<p>Budget: {formatCurrency(budget)}</p>
					<p>Avaliable: {formatCurrency(0)}</p>
					<p>Spent: {formatCurrency(0)}</p>
				</div>
			</div>
			{showModal && <Modal setShowModal={setShowModal} />}
			<button onClick={() => setShowModal(true)}>New Spent</button>
		</>
	);
};

const formatCurrency = currency => {
	return Number(currency).toLocaleString('es-ES', {
		style: 'currency',
		currency: 'EUR'
	});
};

export default BudgetControl;
