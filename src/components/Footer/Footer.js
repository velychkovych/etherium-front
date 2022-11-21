import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.appText}>AppCo</h2>
			<h2 className={styles.copyrightText}>
				All rights reserved by ThemeTags
			</h2>
			<h2 className={styles.copyrightText}>Copyrights © 2019.</h2>
		</div>
	);
};

export default Footer;
