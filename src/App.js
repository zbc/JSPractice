import React from 'react';
// import Star from './Star';
// import Form from './Form';
// import AutoComplete from './AutoComplete';
// import FlashCard from './FlashCard';
// import SlideShow from './SlideShow';
import Table from './Table';
import './styles.css';

export default function App() {
	return (
		<div className="App">
			{/* <Star numsOfStar={5} currentRate={3} /> */}
			{/* <Form /> */}
			{/* <AutoComplete
				options={[
					'Papaya',
					'Persimmon',
					'Paw Paw',
					'Prickly Pear',
					'Peach',
					'Pomegranate',
					'Pineapple'
				]}
			/> */}
			{/* <FlashCard face={<div>Front</div>} back={<div>Back</div>} /> */}
			<Table
				products={[
					{ id: 1, name: 'Cheese', price: 4.9, stock: 20 },
					{ id: 2, name: 'Milk', price: 1.9, stock: 32 },
					{ id: 3, name: 'Yoghurt', price: 2.4, stock: 12 },
					{ id: 4, name: 'Heavy Cream', price: 3.9, stock: 9 },
					{ id: 5, name: 'Butter', price: 0.9, stock: 99 },
					{ id: 6, name: 'Sour Cream ', price: 2.9, stock: 86 },
					{ id: 7, name: 'Fancy French Cheese 🇫🇷', price: 99, stock: 12 }
				]}
			/>
			{/* <SlideShow
				slides={[
					<div style={{ backgroundColor: 'red', height: '100%' }}>1</div>,
					<div style={{ backgroundColor: 'yellow', height: '100%' }}>2</div>,
					<div style={{ backgroundColor: 'blue', height: '100%' }}>3</div>,
					<div style={{ backgroundColor: 'green', height: '100%' }}>4</div>
				]}
			/> */}
		</div>
	);
}
