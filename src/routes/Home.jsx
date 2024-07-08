import { useState } from 'react'
import BarraDeNavegacion from '../components/BarraDeNavegacion'
import CartaInformativa from '../components/CartaInformativa'
import ImagenLocker from '../components/ImagenLocker'
import MapaDeLosLockers from '../components/MapaDeLosLockers'
import Seccion from '../components/Seccion'
import { ZONAS } from '../constants/Lockers'
import { UseLockers } from '../hooks/UseLockers'
import Lockers from '../components/Lockers'

export default function Home() {
	const [filtro, updateFiltro] = useState('')
	const {lockers, getLockers, loading: lockersLoading} = UseLockers({filtro})

	getLockers(filtro)

	let tituloMapaUbicaciones = (
		<>
			Ubicaciones de
			<br />
			los Lockers
		</>
	)
	return (
		<>
			<BarraDeNavegacion />
			<Seccion
				titulo={tituloMapaUbicaciones}
				className='flex flex-col items-center '
			>
				<MapaDeLosLockers />
			</Seccion>
			<Seccion
				titulo={'Ubicación de los Lockers'}
				responsive
			>
				{ZONAS.map((zona) => (
					<CartaInformativa
						key={zona.nombre}
						imagen={<ImagenLocker src={zona.imagen} />}
						titulo={zona.nombre}
						responsive
					>
						<div className='text-center'>Lockers Disponibles</div>
						<div className='text-center'>{zona.lockersDisponibles + '/' + zona.lockersTotales}</div>
					</CartaInformativa>
				))}
			</Seccion>
			<Seccion
				titulo={'Lista de Lockers'}
				responsive
			>
				{lockersLoading
					? <p>Cargando...</p>
					: <Lockers lockers={lockers}/>}
			</Seccion>
		</>
	)
}
