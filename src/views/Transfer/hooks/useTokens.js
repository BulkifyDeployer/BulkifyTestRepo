import { useState, useEffect } from 'react';
import { getAllTokens } from 'services/tokenService';

export const useTokens = () => {
	const [tokens, setTokens] = useState([]);

	useEffect(() => {
		getAllTokens().then(setTokens);
	}, []);

	return tokens;
};
