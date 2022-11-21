import React from 'react';
import styles from './Dropdown.module.scss';

const CheckIcon = () => (
	<svg
		width="16"
		height="10"
		viewBox="0 0 16 10"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M15.6653 0.348093C15.219 -0.116031 14.4953 -0.116031 14.049 0.348093L8 6.63851L1.95098 0.348092C1.50467 -0.116032 0.781049 -0.116032 0.334736 0.348092C-0.111578 0.812217 -0.111578 1.56471 0.334736 2.02884L8 10L15.6653 2.02884C16.1116 1.56471 16.1116 0.812218 15.6653 0.348093Z"
			fill="#3A80BA"
		/>
	</svg>
);

const DropdownItem = ({ isActive, value, onClick }) => {
	const handleClick = () => onClick(value);
	return (
		<div
			className={isActive ? styles.buttonActive : styles.button}
			onClick={handleClick}
		>
			{value}
			{!isActive && <CheckIcon />}
		</div>
	);
};

const Dropdown = ({ options, value, setValue }) => {
	const [isActive, setIsActive] = React.useState(false);

	const handleOptionClick = (option) => {
		setValue(option);
		setIsActive(false);
	};

	const handleValueClick = () => setIsActive(true);

	return (
		<div className={styles.wrapper}>
			{isActive ? (
				<div className={styles.activeList}>
					{options.map((option) => (
						<DropdownItem
							key={option}
							isActive={true}
							value={option}
							onClick={handleOptionClick}
						/>
					))}
				</div>
			) : (
				<div>
					<DropdownItem value={value} onClick={handleValueClick} />
				</div>
			)}
		</div>
	);
};

export default Dropdown;
