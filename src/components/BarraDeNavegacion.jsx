import { URL } from '../constants/DireccionesWeb'
import ImagenLogin from '../components/ImagenLogin'
import Boton from './Boton'
import Enlace from './Enlace'
import { obtenerDatosUsuario } from '../services/usuario'
import { useEffect, useState } from 'react'

export default function BarraDeNavegacion({ ocultarBotones, subtitulo }) {
	const idSesion = localStorage.getItem('idSesion')
	const [usuario, setUsuario] = useState(null)

	useEffect(() => {
		obtenerDatosUsuario(idSesion)
		.then((usuarioObtenido) => {
			setUsuario(usuarioObtenido)
		})
		.catch((error) => {
			console.log(error.message)
		})
	console.log(usuario)
	}, [])

	

	return (
		<>
			<nav className='flex flex-col items-center justify-center gap-5 text-white bg-blue-700 md:flex-row p-7'>
				<Enlace
					destino={URL.HOME}
					className='w-9/12'
				>
					<h1 className='text-5xl text-center'>Sistema de Lockers UTP</h1>
				</Enlace>
				{ocultarBotones ? (
					<></>
				) : (
					<div className='flex justify-center w-full gap-5 md:w-40'>
						<Enlace
							destino={URL.LOGIN}
							className='w-full'
						>
							<Boton>
								<h2>{usuario ? usuario.nombre : 'LOGIN'}</h2>
								<ImagenLogin />
							</Boton>
						</Enlace>
					</div>
				)}
			</nav>
			<h2 className='pt-4 text-5xl text-center'>{subtitulo}</h2>
		</>
	)
}
