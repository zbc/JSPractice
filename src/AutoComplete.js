import React, { useState } from 'react';

function AutoComplete({ options }) {
	const [textInput, setTextInput] = useState('');
	const [filteredOptions, setFilteredOptions] = useState([]);
	const handleChange = e => {
		setTextInput(e.target.value);
		let opts;
		if (e.target.value) {
			opts = options.filter(option => option.indexOf(e.target.value) !== -1);
		} else {
			opts = [];
		}
		console.log(opts);
		setFilteredOptions(opts);
	};
	const handleClick = e => {
		setTextInput(e.currentTarget.innerText);
		setFilteredOptions([]);
	};
	return (
		<>
			<label htmlFor="search">Search: </label>
			<input
				id="search"
				type="text"
				value={textInput}
				onChange={handleChange}
			/>
			<ul>
				{filteredOptions &&
					filteredOptions.map((f, index) => {
						return (
							<li key={index} onClick={handleClick}>
								{f}
							</li>
						);
					})}
			</ul>
		</>
	);
}

export default AutoComplete;
