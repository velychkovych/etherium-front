import React from 'react';

import styles from './Table.module.scss';

const Table = ({ headers, values }) => {
	return (
		<table className={styles.wrapper}>
			<thead className={styles.header}>
				<tr>
					{headers.map((header) => (
						<th key={header}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{values.map((column, i) => (
					<tr key={i} className={styles.column}>
						{Object.values(column).map((value, i) => (
							<td key={i}>{value}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
