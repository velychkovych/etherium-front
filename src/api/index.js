import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://etherium-back.herokuapp.com/api/v1',
});

export default {
	getTransactions: (frameNumber, findBy, value) =>
		instance.get('/transactions', {
			params: { findBy, value, frameNumber },
		}),
};
