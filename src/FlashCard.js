import React, { useState } from 'react';
import './card.css';

function FlashCard({ face, back }) {
	const [flipped, setFlipped] = useState(false);
	const handleClick = () => {
		setFlipped(!flipped);
	};
	const getFlashcardClass = () => {
		return `card ${flipped ? 'flip' : ''}`;
	};
	return (
		<div className={getFlashcardClass()} onClick={handleClick}>
			<div className="card__face">{face}</div>
			<div className="card__back">{back}</div>
		</div>
	);
}

export default FlashCard;
