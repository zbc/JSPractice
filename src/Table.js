import React, { useState } from 'react';

function Button({ children, onClick }) {
	return (
		<th>
			<button
				style={{
					border: 'none',
					width: '100%',
					cursor: 'pointer',
					backgroundColor: 'grey'
				}}
				onClick={onClick}
			>
				{children}
			</button>
		</th>
	);
}
function Table({ products }) {
	const [sort, setSort] = useState({ key: '', direction: true });
	const sortedProducts = products.sort((a, b) => {
		if (a[sort.key] < b[sort.key]) {
			return sort.direction ? -1 : 1;
		} else {
			return sort.direction ? 1 : -1;
		}
	});
	const requestSort = name => {
		const d = !sort.direction;
		setSort({ key: name, direction: d });
	};
	return (
		<table>
			<caption>Products</caption>
			<thead>
				<tr>
					<Button onClick={() => requestSort('name')}>Name</Button>
					<Button onClick={() => requestSort('price')}>Price</Button>
					<Button onClick={() => requestSort('stock')}>Stock</Button>
				</tr>
			</thead>
			<tbody>
				{sortedProducts.map(product => {
					return (
						<tr key={product.id}>
							<td>{product.name}</td>
							<td>${product.price}</td>
							<td>{product.stock}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default Table;
