import React, { useState } from 'react';
import './slide.css';

function SlideShow({ slides }) {
	const [active, setActive] = useState(0);
	const handleNext = () => {
		if (slides.length - 1 === active) {
			return;
		}
		setActive(prev => prev + 1);
	};

	const handlePrev = () => {
		if (active === 0) {
			return;
		}
		setActive(prev => prev - 1);
	};
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<div className="slides">
				{slides.map((slide, index) => {
					console.log(active);
					if (active === index) {
						return (
							<div key={index} className="slide still">
								{slide}
							</div>
						);
					} else if (active < index) {
						return (
							<div key={index} className="slide next">
								{slide}
							</div>
						);
					} else {
						return (
							<div key={index} className="slide prev">
								{slide}
							</div>
						);
					}
				})}
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<button onClick={handlePrev}>previous</button>
				<button onClick={handleNext}>next</button>
			</div>
		</div>
	);
}

export default SlideShow;
