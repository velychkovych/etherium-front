import React from 'react';

import styles from './Pagination.module.scss';

const ArrowIcon = () => (
	<svg
		width="17"
		height="28"
		viewBox="0 0 17 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M2 2L14 14L2 26"
			stroke="#3A80BA"
			strokeWidth="4"
			strokeLinecap="round"
		/>
	</svg>
);

const Pagination = ({ currentNumber, onClick }) => {
	const [pageNumbers, setPageNumbers] = React.useState([]);

	React.useEffect(() => {
		let start = currentNumber - 2;
		const variants = [];
		while (variants.length < 5) {
			if (start > 0) {
				variants.push(start);
			}
			start += 1;
		}
		setPageNumbers(variants);
	}, [currentNumber]);

	const firstPage = currentNumber == 1;

	return (
		<div className={styles.wrapper}>
			<div
				onClick={() => !firstPage && onClick(currentNumber - 1)}
				className={firstPage ? styles.rotateDisabled : styles.rotate}
			>
				<ArrowIcon />
			</div>
			{pageNumbers.map((pageNumber) => (
				<div
					key={pageNumber}
					onClick={() => onClick(pageNumber)}
					className={
						currentNumber == pageNumber
							? styles.pageNumberSelected
							: styles.pageNumber
					}
				>
					{pageNumber}
				</div>
			))}
			<div
				className={styles.arrow}
				onClick={() => onClick(currentNumber + 1)}
			>
				<ArrowIcon />
			</div>
		</div>
	);
};

export default Pagination;
