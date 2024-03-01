const ALLOWED_FLOAT_NUMBER_INPUT = '1234567890.'.split('');

export const handleFloatNumberInput = (prevValue, newValue) => {
	const filteredValue = newValue
		.split('')
		.filter((char) => ALLOWED_FLOAT_NUMBER_INPUT.indexOf(char) !== -1);

	if (filteredValue.length === 0) {
		return prevValue;
	}

	return filteredValue.join('');
};
