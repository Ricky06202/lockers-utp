export default function CartaInformativa({ children, imagen, titulo}) {
	return (
		<div className='card bg-blue-600 flex-row overflow-hidden border-4 border-blue-700'>
			{imagen}
			<div className='flex flex-col sm:w-96 items-center justify-center bg-blue-500'>
				<h3 className='text-2xl'>
					{titulo}
				</h3>
				{children}
			</div>
		</div>
	)
}
