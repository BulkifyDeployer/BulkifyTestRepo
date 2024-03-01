import {
	InputBlockWrapper,
	AddTokenButton,
	ReceiverInputWrapper,
	ReceiverInput,
	CustomLabel,
	ReceiverWrapper,
	FeesBlockWrapper,
	FeesCalcWrapper,
	FeesItem,
} from './TransferForm.styled';
import { ConnectWalletButton, TransferButton } from '../ConnectWalletButton';
import { CardWrapper, SectionWrapper } from 'components';
import { Divider } from 'views/Transfer/Transfer.styled';
import { TransferInputBlock } from '../TransferInputBlock';

export const TransferForm = ({
	isConnected,
	isWrongNetwork,
	inputs,
	handleInputChange,
	handleAddToken,
	handleRemoveInput,
	setSelectedTokens,
	handleSymbolClick,
}) => {
	return (
		<SectionWrapper title='Transfer'>
			<CardWrapper>
				Transfer Tokens
				<Divider />
				<InputBlockWrapper>
					{/* Token Inputs */}
					{inputs.map((input, index) => (
						<TransferInputBlock
							key={index}
							id={`input-${index}`}
							type='number'
							img={input.token?.logoURI}
							placeholder={'0,0000'}
							value={input.value}
							onChange={(e) => handleInputChange(index, e)}
							symbol={input.token ? input.token.symbol : 'Select Token'}
							onSymbolClick={() => handleSymbolClick(index)}
							onRemoveClick={handleRemoveInput}
							index={index}
							totalInputs={inputs.length}
						/>
					))}
				</InputBlockWrapper>
				<AddTokenButton
					textColor='secondary'
					size='md'
					onClick={handleAddToken}
				>
					+ Add tokens
				</AddTokenButton>
				<ReceiverWrapper>
					<CustomLabel size='sm' color='text'>
						Receiver Address
					</CustomLabel>
					<ReceiverInputWrapper>
						<ReceiverInput maxLength={42} />
					</ReceiverInputWrapper>
				</ReceiverWrapper>
				<Divider />
				Transaction Details
				<Divider />
				<FeesBlockWrapper>
					<CustomLabel weight={600} color='text' size='md'>
						Fees:
					</CustomLabel>
					<FeesCalcWrapper>
						{/* {inputs.map((input, index) => ( */}
						<FeesItem>
							{/* <span key={index} className="flex gap-x-2"> */}
							{/* <strong>{calculateFees(input.value)}</strong> */}
							<CustomLabel size='md' color='text' weight={600}>
								{1}
							</CustomLabel>
							{/* {input.token && insufficientBalanceTokens[input.token.address] && ( */}
							<CustomLabel color='error' size='md' weight={500}>
								Insufficient Balance!
							</CustomLabel>
							{/* )} */}
							{/* {input.token ? input.token.symbol : ''} */}
						</FeesItem>
						{/* ))} */}
						<FeesItem>
							<CustomLabel>~ 0</CustomLabel> Gas
						</FeesItem>
					</FeesCalcWrapper>
				</FeesBlockWrapper>
				<Divider />
				{!isConnected ? (
					<ConnectWalletButton reasonToConnect={'Transfer'} />
				) : (
					<TransferButton />
				)}
			</CardWrapper>
		</SectionWrapper>
	);
};
