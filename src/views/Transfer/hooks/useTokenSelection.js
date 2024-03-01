import { useState } from 'react';

export const useTokenSelection = (
	setInputs,
	inputs,
	setSearchQuery,
	availableTokens,
	setSelectedTokens,
	selectedTokens
) => {
	const [showTokenSelector, setShowTokenSelector] = useState(false);
	const [selectedInputIndex, setSelectedInputIndex] = useState(null);

	const handleTokenSelect = (token) => {
		if (selectedInputIndex !== null) {
			const newInputs = [...inputs];
			newInputs[selectedInputIndex].token = token;
			setInputs(newInputs);
			setShowTokenSelector(false);
			if (selectedInputIndex + 1 <= selectedTokens.length) {
				let newSelectedTokens = [...selectedTokens];
				newSelectedTokens[selectedInputIndex] = token;
				setSelectedTokens(newSelectedTokens);
			} else {
				setSelectedTokens((prevTokens) => [...prevTokens, token]);
			}
		}
	};

	const handleSymbolClick = (index) => {
		setShowTokenSelector(true);
		setSelectedInputIndex(index);
	};
	const closeTokenSelector = () => {
		setShowTokenSelector(false);
	};

	return {
		showTokenSelector,
		handleTokenSelect,
		handleSymbolClick,
		closeTokenSelector,
	};
};
