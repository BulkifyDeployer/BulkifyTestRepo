import { useState, useEffect } from 'react';
import { getDefaultTokens } from 'services/tokenService';
import { handleFloatNumberInput } from 'utils/inputUtils';

export const useTokenInputs = (
	availableTokens,
	defaultTokens,
	setSelectedTokens,
	selectedTokens
) => {
	const [inputs, setInputs] = useState([
		{ value: '', token: defaultTokens[0] },
	]);

	useEffect(() => {
		const fetchDefaultTokens = async () => {
			try {
				const defaultTokensData = await getDefaultTokens();
				setInputs([{ value: '', token: defaultTokensData[0] }]);
			} catch (error) {
				console.error('Failed to fetch default tokens:', error);
			}
		};

		fetchDefaultTokens();
	}, []);
	const handleAddToken = () => {
		if (selectedTokens.length) {
			const selectedTokens = inputs.map((input) => input.token?.symbol);
			const remainingTokens = availableTokens.filter(
				(token) => !selectedTokens.includes(token.symbol)
			);

			const newToken = remainingTokens.length > 0 ? remainingTokens[0] : null;
			setInputs([...inputs, { value: '', token: newToken }]);
			setSelectedTokens((prev) => [...prev, newToken]);
		}
	};

	const handleRemoveInput = (index) => {
		setInputs(inputs.filter((_, i) => i !== index));
		setSelectedTokens(selectedTokens.filter((_, i) => i !== index));
	};

	const handleInputChange = (index, event) => {
		const newValue = handleFloatNumberInput(
			inputs[index].value,
			event.target.value
		);
		const newInputs = [...inputs];
		newInputs[index].value = newValue;
		setInputs(newInputs);
	};

	return {
		inputs,
		setInputs,
		handleInputChange,
		handleAddToken,
		handleRemoveInput,
		defaultTokens,
	};
};
