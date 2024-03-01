import React from 'react';

const TokenSelectorView = ({
	tokens,
	onTokenSelect,
	searchQuery,
	setSearchQuery,
	closeTokenSelector,
}) => {
	const filteredTokens = tokens.filter((token) => {
		return (
			(token.name &&
				token.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
			(token.symbol &&
				token.symbol.toLowerCase().includes(searchQuery.toLowerCase())) ||
			(token.address &&
				token.address.toLowerCase().includes(searchQuery.toLowerCase()))
		);
	});
	return (
		<div className='w-full transform overflow-hidden text-left align-middle transition-all'>
			<h3 className='text-lg font-medium leading-6 text-white'>
				Select tokens
			</h3>
			{/* <button onClick={closeTokenSelector}>CLOSE</button> */}
			{/* </div> */}
			<div className='mt-2'>
				{/* Список токенов */}
				<div className='mt-4'>
					<div className='relative rounded-md shadow-sm'>
						<input
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							type='text'
							className='block w-full px-6 border-gray-700 rounded-md bg-gray-600 text-gray-400 flex-grow text-xl py-2 outline-none'
							placeholder='Search Token Name or Paste Address'
						/>
					</div>
					<ul className='mt-4 max-h-60 overflow-y-auto'>
						{filteredTokens
							// .filter((token) =>
							// 	token.name.toLowerCase().includes(searchQuery.toLowerCase())
							// ) // Фильтруем токены по поисковому запросу(не понял зачем этот фильтр, если мы выше уже фильтруем токены)
							.map((token) => (
								<li
									key={token.symbol}
									className='flex items-center justify-between px-4 py-3 text-sm text-white hover:bg-gray-700 cursor-pointer'
									onClick={() => onTokenSelect(token)}
								>
									<span className='flex items-center'>
										{/* Иконка токена (заглушка, замените на <img>, если есть иконки) */}
										<img
											src={token.logoURI}
											className='flex-shrink-0 h-6 w-6 rounded-full mr-3'
											alt={token.name}
										/>
										{/* исправлено rounded-ful на rounded-full */}
										<span>{token.name}</span>
									</span>
									<span>{token.balance}</span>
								</li>
							))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TokenSelectorView;
