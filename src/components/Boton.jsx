export default function Boton({ children, className, type }) {
	let nuevoClassName = 'btn ' + (className ? className : 'text-xl w-full')

	return <button className={nuevoClassName} type={type}>{children}</button>
}
