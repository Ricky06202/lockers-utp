import BarraDeNavegacion from '../components/BarraDeNavegacion'
import Boton from '../components/Boton'
import Campo from '../components/Campo'
import Enlace from '../components/Enlace'
import Seccion from '../components/Seccion'
import { URL } from '../constants/DireccionesWeb'

export default function Informacion() {
	return (
        <>
			<BarraDeNavegacion
				ocultarBotones
				subtitulo='Información de los Lockers'
			/>
            <Seccion>
            <form className='flex flex-col gap-5'>
            </form>
            </Seccion>

		</>
	)
}