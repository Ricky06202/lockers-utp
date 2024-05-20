
export default function Boton({children, mensaje}) {
	return (
		<button className='btn text-xl'>
			{children}
			{mensaje}
		</button>
	)
}
