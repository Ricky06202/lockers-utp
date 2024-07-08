import CartaInformativa from "./CartaInformativa"
import ImagenLocker from "./ImagenLocker"

function ListaDeLockers({ lockers }) {
	return (
		<>
			{lockers.map((locker) => (
				<CartaInformativa
					key={locker.id}
					id={locker.id}
					imagen={<ImagenLocker />}
					titulo={locker.nombre}
					responsive
				>
					<div className='text-center'>{locker.sector}</div>
					<div className='text-center'>{locker.estado}</div>
				</CartaInformativa>
			))}
		</>
	)
}

function SinResultados() {
	return <p>No se encontraron lockers</p>
}

export default function Lockers({ lockers }) {
	const hayLockers = lockers?.length > 0

	return (
		hayLockers
			?  <ListaDeLockers lockers={lockers} />
			: <SinResultados/>

	)
}
