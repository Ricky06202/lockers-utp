export default function Seccion({children, titulo, className, gap, responsive, color}) {
	let sectionClassName = 'flex flex-col items-center justify-center w-full ' + (className ? className : "")
	let estiloNormal = 'flex flex-col items-center justify-center ' + (gap ? gap : "gap-2")
	let estiloResponsive = 'md:grid md:grid-cols-3 sm:flex sm:flex-col items-center justify-center ' + (gap ? gap : "gap-2")

	return (
		<section className={sectionClassName}>
			<h2 className='p-5 text-4xl text-center'>
				{titulo}
			</h2>
			<div className= {(responsive ? estiloResponsive:estiloNormal)+ ' ' +color}>
				{children}
			</div>
		</section>
	)
}
