import { hubPoolChainId } from 'utils';
import { Wrapper } from './Transfer.styled';
import { TransferForm } from './components';
import { Layout, WrongNetworkHeader } from 'components';
import { useTransferView } from './hooks/useTransferView';
import { useTokenSelection } from './hooks/useTokenSelection';
import { useTokenInputs } from './hooks/useTokenInputs';
import { useTokens } from './hooks/useTokens';
import { getDefaultTokens } from 'services/tokenService';
import { useState } from 'react';
import TokenSelectorView from './components/TokenSelectorView/TokenSelectorView';

const TransferView = () => {
	const { isConnected, isWrongNetwork } = useTransferView();
	const tokens = useTokens();
	const defaultTokens = getDefaultTokens();
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedTokens, setSelectedTokens] = useState([]);
	const {
		inputs,
		handleInputChange,
		handleAddToken,
		handleRemoveInput,
		setInputs,
	} = useTokenInputs(tokens, defaultTokens, setSelectedTokens, selectedTokens);
	const {
		showTokenSelector,
		handleTokenSelect,
		handleSymbolClick,
		closeTokenSelector,
	} = useTokenSelection(
		setInputs,
		inputs,
		setSearchQuery,
		tokens,
		setSelectedTokens,
		selectedTokens
	);
	return (
		<>
			<WrongNetworkHeader requiredChainId={hubPoolChainId} />
			<Layout maxWidth={600}>
				<Wrapper>
					{!showTokenSelector ? (
						<TransferForm
							isConnected={isConnected}
							isWrongNetwork={isWrongNetwork}
							inputs={inputs}
							handleInputChange={handleInputChange}
							handleAddToken={handleAddToken}
							handleRemoveInput={handleRemoveInput}
							// calculateFees={calculateFees}
							setSelectedTokens={setSelectedTokens}
							handleSymbolClick={handleSymbolClick}
							// handleWalletChange={handleWalletChange}
							// walletConnected={walletConnected}
							// connecting={connecting}
						/>
					) : (
						<TokenSelectorView
							tokens={tokens.filter((token) => !selectedTokens.includes(token))}
							onTokenSelect={handleTokenSelect}
							searchQuery={searchQuery}
							setSearchQuery={setSearchQuery}
							closeTokenSelector={closeTokenSelector}
						/>
					)}
				</Wrapper>
			</Layout>
		</>
	);
};

export default TransferView;
