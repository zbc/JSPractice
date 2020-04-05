import React from 'react';
import './star.css';

function Star({ numsOfStar, currentRate = 0 }) {
	let stars = [...new Array(numsOfStar).keys()];
	const [rate, setRate] = React.useState(currentRate);
	stars = stars.map(x => x + 1);
	React.useEffect(() => {
		const starsElement = document.querySelectorAll('.star');
		starsElement.forEach(s => {
			if (rate >= s.dataset.value) {
				s.style.color = 'yellow';
			} else {
				s.style.color = 'grey';
			}
		});
	}, [rate]);
	const handleClick = e => {
		setRate(e.target.dataset.value);
	};
	const handleHover = e => {
		const starsElement = document.querySelectorAll('.star');
		starsElement.forEach(s => {
			if (e.target.dataset.value >= s.dataset.value) {
				s.style.color = 'yellow';
			} else {
				s.style.color = 'grey';
			}
		});
		console.log(e.target.dataset);
	};

	const handleOut = e => {
		const starsElement = document.querySelectorAll('.star');
		starsElement.forEach(s => {
			if (rate >= s.dataset.value) {
				s.style.color = 'yellow';
			} else {
				s.style.color = 'grey';
			}
		});
	};
	return (
		<div className="stars" onMouseOut={handleOut}>
			{stars.map(star => {
				return (
					<span
						key={star}
						data-value={star}
						className="star"
						onClick={handleClick}
						onMouseOver={handleHover}
					>
						&#9733;
					</span>
				);
			})}
		</div>
	);
}
export default Star;
