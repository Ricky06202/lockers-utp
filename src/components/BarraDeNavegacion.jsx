import { URL } from '../constants/DireccionesWeb'
import ImagenLogin from '../components/ImagenLogin'
import Boton from './Boton'
import Enlace from './Enlace'

export default function BarraDeNavegacion({ ocultarBotones, subtitulo }) {
	return (
		<nav className='flex flex-col items-center gap-5 text-white bg-blue-700 p-7'>
			<Enlace destino={URL.HOME} >
				<h1 className='text-5xl text-center'>Sistema de Lockers UTP</h1>
			</Enlace>
			{ocultarBotones ? (
				<h2 className='text-5xl text-center '>{subtitulo}</h2>
			) : (
				<div className='flex justify-center w-full gap-5' >
					<Enlace destino={URL.LOGIN}>
						<Boton>
							<h2>LOGIN</h2>
							<ImagenLogin/>
						</Boton>
					</Enlace>
					
				</div>
			)}
		</nav>
	)
}
