import React from 'react';
import { useParams, useNavigate } from 'react-router';
import Input from '../../components/Input';
import Dropdown from '../../components/Dropdown';
import IconButton from '../../components/IconButton';
import Table from '../../components/Table';
import API from '../../api';
import FrontendRoutes from '../../constants/FrontendRoutes';

import styles from '../../styles/Main.module.scss';
import Pagination from '../../components/Pagination';

const dropdownOptions = [
	'Block number',
	'Sender address',
	"Recipient's address",
	'Transaction ID',
];

const headers = [
	'Block number',
	'Transaction ID',
	'Sender address',
	"Recipient's address",
	'Block confirmations',
	'Date',
	'Value',
	'Transaction Fee',
];

const SearchIcon = () => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 6.92313C0 3.10631 3.10351 0 6.92451 0C10.7418 0 13.849 3.1026 13.849 6.92313C13.849 8.42815 13.3664 9.8228 12.5483 10.9597L15.6726 14.0833C16.1076 14.5183 16.1091 15.2281 15.6771 15.6649C15.4538 15.894 15.1591 16 14.8795 16C14.5864 16 14.2988 15.8817 14.0865 15.6695L10.962 12.5457C9.82484 13.3637 8.42986 13.8463 6.92451 13.8463C3.10698 13.8463 0 10.7402 0 6.92313ZM6.92127 2.2472C4.344 2.2472 2.24415 4.3441 2.24415 6.92313C2.24415 9.5027 4.34454 11.6023 6.92127 11.6023C9.5007 11.6023 11.5984 9.49999 11.5984 6.92313C11.5984 4.34681 9.50124 2.2472 6.92127 2.2472Z"
				fill="white"
			/>
		</svg>
	);
};

const MainPage = () => {
	const { pageNumber } = useParams();
	const navigate = useNavigate();

	const [searchValue, setSearchValue] = React.useState('');
	const [transactions, setTransactions] = React.useState(null);

	const [dropdownValue, setDropdownValue] = React.useState(
		dropdownOptions[0]
	);

	const fetchTransactions = (
		pageNumber,
		transformedDropdownValue,
		searchValue
	) =>
		API.getTransactions(pageNumber, transformedDropdownValue, searchValue)
			.then((res) => {
				const data = res.data.map((transaction) => {
					const date = new Date(transaction.date);
					return {
						blockNumber: transaction.blockNumber,
						transactionId: transaction.transactionId,
						senderAddress: transaction.senderAddress,
						recipientAdress: transaction.recipientAdress,
						blockConfirmations: transaction.blockConfirmations,
						date: `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`,
						value: transaction.value.toFixed(16),
						transactionFee: transaction.transactionFee.toFixed(8),
					};
				});
				setTransactions(data);
			})
			.catch((err) => console.error(err));

	React.useEffect(() => {
		if (!transactions) {
			fetchTransactions(pageNumber);
		}
	}, []);

	const handleSearchButtonClick = () => {
		const transformedDropdownValue = {
			'Block number': 'blockNumber',
			'Sender address': 'senderAddress',
			"Recipient's address": 'recipientAdress',
			'Transaction ID': 'transactionId',
		}[dropdownValue];
		fetchTransactions(pageNumber, transformedDropdownValue, searchValue);
	};

	const handlePaginationButtonClick = (pageNumber) => {
		fetchTransactions(pageNumber);
		navigate(FrontendRoutes.MAIN_PAGE(pageNumber));
	};

	return (
		<div className={styles.data}>
			<div className={styles.searchBlock}>
				<div className={styles.searchBar}>
					<Input value={searchValue} setValue={setSearchValue} />
					<Dropdown
						value={dropdownValue}
						setValue={setDropdownValue}
						options={dropdownOptions}
					/>
				</div>
				<IconButton
					icon={<SearchIcon />}
					onClick={handleSearchButtonClick}
				/>
			</div>
			<div className={styles.table}>
				{transactions && (
					<Table headers={headers} values={transactions} />
				)}
			</div>
			<Pagination
				currentNumber={pageNumber}
				onClick={handlePaginationButtonClick}
			/>
		</div>
	);
};

export default MainPage;
