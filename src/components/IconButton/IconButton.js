import React from 'react';
import styles from './IconButton.module.scss';

const IconButton = ({ icon, onClick }) => {
	return (
		<div className={styles.wrapper} onClick={onClick}>
			{icon}
		</div>
	);
};

export default IconButton;
