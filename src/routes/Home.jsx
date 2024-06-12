import BarraDeNavegacion from '../components/BarraDeNavegacion'
import CartaInformativa from '../components/CartaInformativa'
import ImagenLocker from '../components/ImagenLocker'
import MapaDeLosLockers from '../components/MapaDeLosLockers'
import Seccion from '../components/Seccion'
import { LOCKERS, ZONAS } from '../constants/Lockers'

export default function Home(){
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
			<Seccion titulo={'Ubicación de los Lockers'} responsive>
				{ZONAS.map((zona) => (
					<CartaInformativa
						key={zona.nombre}
						imagen={<ImagenLocker src={zona.imagen}/>}
						titulo={zona.nombre}
						responsive
					>
						<div className='text-center'>Lockers Disponibles</div>
						<div className='text-center'>{zona.lockersDisponibles + '/' + zona.lockersTotales}</div>
					</CartaInformativa>
				))}
			</Seccion>
			<Seccion titulo={'Lista de Lockers'} responsive>
				{LOCKERS.map((locker) => (
					<CartaInformativa key={locker.nombre}
						imagen={<ImagenLocker />}
						titulo={locker.nombre}
						responsive
					>
						<div className='text-center'>{locker.zona}</div>
						<div className='text-center'>{locker.estaDisponible ? "Disponible" : "Ocupado"}</div>
					</CartaInformativa>
				))}
			</Seccion>
		</>
	)
}