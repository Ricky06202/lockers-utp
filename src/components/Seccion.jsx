export default function Seccion({children, titulo, className, gap}) {
	let sectionClassName = 'flex flex-col items-center justify-center w-full ' + (className ? className : "")
	let divClassName = 'flex flex-col items-center justify-center ' + (gap ? gap : "gap-2")

	return (
		<section className={sectionClassName}>
			<h2 className='text-4xl text-center p-5'>
				{titulo}
			</h2>
			<div className={divClassName}>
				{children}
			</div>
		</section>
	)
}
