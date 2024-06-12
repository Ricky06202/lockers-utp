import { URL } from '../constants/DireccionesWeb'
import ImagenLogin from '../components/ImagenLogin'
import Boton from './Boton'
import Enlace from './Enlace'

export default function BarraDeNavegacion({ ocultarBotones, subtitulo }) {
	return (
		<>
		<nav className='flex flex-col items-center justify-center gap-5 text-white bg-blue-700 md:flex-row p-7'>
			<Enlace destino={URL.HOME} className='w-9/12'>
				<h1 className='text-5xl text-center'>Sistema de Lockers UTP</h1>
			</Enlace>
			{ocultarBotones ? (
				<></>
			) : (
				<div className='flex justify-center w-full gap-5 md:w-40' >
					<Enlace destino={URL.LOGIN} className='w-full'>
						<Boton>
							<h2>LOGIN</h2>
							<ImagenLogin/>
						</Boton>
					</Enlace>
					
				</div>
			)}
		</nav>
		<h2 className='py-4 text-5xl text-center'>{subtitulo}</h2>
		</>
	)
}
