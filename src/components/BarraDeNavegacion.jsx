import Boton from './Boton'
import Enlace from './Enlace'

export default function BarraDeNavegacion({ ocultarBotones, subtitulo }) {
	return (
		<nav className='flex flex-col items-center gap-5 bg-blue-700 p-7 text-white'>
			<Enlace destino='/'>
				<h1 className='text-5xl text-center '>Sistema de Lockers UTP</h1>
			</Enlace>
			{ocultarBotones ? (
				<h2 className='text-5xl text-center '>{subtitulo}</h2>
			) : (
				<div className='grid w-full gap-5'>
					<Enlace destino='/login'>
						<Boton>Iniciar Sesion</Boton>
					</Enlace>
					<Boton>Cerrar Sesion</Boton>
				</div>
			)}
		</nav>
	)
}
