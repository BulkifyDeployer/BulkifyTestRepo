import axios from 'axios';

const ETH = {
	symbol: 'ETH',
	name: 'Ethereum',
	address: process.env.REACT_APP_ETH_ADDRESS,
	logoURI:
		'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png',
};

const TOKEN1 = {
	symbol: 'TK1',
	name: 'Token 1',
	address: process.env.REACT_APP_TOKEN1_ADDRESS,
	logoURI:
		'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e/logo.png',
};

const TOKEN2 = {
	symbol: 'TK2',
	name: 'Token 2',
	address: process.env.REACT_APP_TOKEN2_ADDRESS,
	logoURI:
		'https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0c7D5ae016f806603CB1782bEa29AC69471CAb9c/logo.png',
};

//default set for first entry
export const getDefaultTokens = async () => {
	if (process.env.REACT_APP_PROFILE === 'local') {
		return [ETH];
	}

	try {
		const response = await axios.get(
			'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/tokenlist.json'
		);
		const ethToken = response.data.tokens.find(
			(token) => token.symbol === 'ETH'
		);
		return [ethToken]; // Возвращаем только ETH
	} catch (error) {
		console.error('Failed to fetch default tokens:', error);
		return []; // Возвращаем пустой массив в случае ошибки
	}
};

export const getAllTokens = async () => {
	if (process.env.REACT_APP_PROFILE === 'local') {
		return [ETH, TOKEN1, TOKEN2];
	}

	return axios
		.get(
			'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/tokenlist.json'
		)
		.then((response) => [...response.data.tokens, ETH]);
};
