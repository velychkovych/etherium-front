import React from 'react';
import styles from './Input.module.scss';

const Input = ({ value, setValue }) => {
	return (
		<input
			className={styles.search}
			placeholder="Search..."
			type="search"
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
};

export default Input;
