import axios from 'axios';

axios.defaults.baseURL = '/api/v1';

export default {
	getTransactions: (frameNumber, findBy, value) =>
		axios.get('/transactions', { params: { findBy, value, frameNumber } }),
};
