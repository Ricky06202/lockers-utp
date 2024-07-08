export default function Boton({ children, className, type, onClick }) {
	let nuevoClassName = 'btn ' + (className ? className : 'text-xl w-full')

	return (
		<button
			className={nuevoClassName}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
