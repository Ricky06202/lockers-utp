export default function Boton({ children, className }) {
	let nuevoClassName = 'btn ' + (className ? className : 'text-xl w-full')

	return <button className={nuevoClassName}>{children}</button>
}
