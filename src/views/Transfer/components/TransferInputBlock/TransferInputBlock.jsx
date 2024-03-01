import {
	Wrapper,
	SelectorBlockWrapper,
	SelectorButton,
	TokenIcon,
	StyledText,
	BalanceWrapper,
	Button,
	SummaryText,
	InputWrapper,
	InnerInputWrapper,
	Input,
	DeleteButton,
} from './TransferInputBlock.styled';
import { ChevronDown, XCircle } from 'react-feather';

export const TransferInputBlock = ({
	id,
	type,
	value,
	onChange,
	placeholder,
	symbol,
	onSymbolClick,
	onRemoveClick,
	totalInputs,
	img,
	summary,
	index,
}) => {
	return (
		<div className='mt-[30px]'>
			<Wrapper>
				<SelectorBlockWrapper>
					<SelectorButton type='button' onClick={onSymbolClick}>
						<TokenIcon src={img} alt='' loading='lazy' />
						<StyledText size='md' color='text' casing='uppercase'>
							{symbol}
						</StyledText>
						<ChevronDown width='12px' />
					</SelectorButton>
					<BalanceWrapper>
						<StyledText color='text' size='sm'>
							balance
						</StyledText>

						<Button type='button' size='sm' textColor='secondary'>
							Max
						</Button>
					</BalanceWrapper>
				</SelectorBlockWrapper>
				<SummaryText size='sm' color='secondary'>
					~${summary}
				</SummaryText>
				<InputWrapper>
					<InnerInputWrapper>
						<Input
							id={id}
							type={type}
							value={value}
							onChange={onChange}
							placeholder={placeholder}
						/>
					</InnerInputWrapper>
				</InputWrapper>
				{totalInputs > 1 && (
					<DeleteButton type='button' onClick={() => onRemoveClick(index)}>
						<XCircle width={'16px'} />
					</DeleteButton>
				)}
			</Wrapper>
		</div>
	);
};
