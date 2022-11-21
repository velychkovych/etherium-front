import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.text}>AppCo</h1>
		</div>
	);
};

export default Header;
