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
			<Seccion titulo={'Zonas de Lockers'}>
				{ZONAS.map((zona) => (
					<CartaInformativa
						key={zona.nombre}
						imagen={<ImagenLocker />}
						titulo={zona.nombre}
					>
						<span>Lockers Disponibles</span>
						<span>{zona.lockersDisponibles + '/' + zona.lockersTotales}</span>
					</CartaInformativa>
				))}
			</Seccion>
			<Seccion titulo={'Lista de Lockers'}>
				{LOCKERS.map((locker) => (
					<CartaInformativa key={locker.nombre}
						imagen={<ImagenLocker />}
						titulo={locker.nombre}
					>
						<span>{locker.zona}</span>
						<span>{locker.estaDisponible ? "Disponible" : "Ocupado"}</span>
					</CartaInformativa>
				))}
			</Seccion>
		</>
	)
}