export default function Seccion({children, titulo}) {
	return (
		<section className='flex flex-col items-center justify-center w-full'>
			<h2 className='text-4xl text-center p-5'>
				{titulo}
			</h2>
			<div className='flex flex-col items-center justify-center gap-2'>
				{children}
			</div>
		</section>
	)
}
