import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useConnection, useIsWrongNetwork } from 'hooks';
import { useAmountInput, useValidAmount } from './useAmountInput';

export const useTransferView = () => {
	const { isConnected, provider } = useConnection();
	const { isWrongNetwork, isWrongNetworkHandler } = useIsWrongNetwork();

	const { amountValidationError, isAmountValid } =
		useValidAmount();
		// parsedAmount,
		// maxBalance,

	return {
		isWrongNetwork,
		isWrongNetworkHandler,
		isConnected,
		provider,
		// amountValidationError,
	};
};
