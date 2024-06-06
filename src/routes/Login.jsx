import BarraDeNavegacion from '../components/BarraDeNavegacion'
import Boton from '../components/Boton'
import Campo from '../components/Campo'
import Enlace from '../components/Enlace'
import Seccion from '../components/Seccion'
import { URL } from '../constants/DireccionesWeb'

export default function Login() {
	return (
		<>
			<BarraDeNavegacion
				ocultarBotones
				subtitulo='Inicio de Sesión'
			/>
			<nav className='flex items-start flex-raw'>
			<Seccion className='py-4 mt-4 text-2xl' gap="gap-4">
				<a className='mb-6 text-5xl text-slate-100'>Iniciar Sesión</a>
				<Campo placeholder="Introducir Usuario"/>
				<Campo placeholder="Introducir Contraseña" type="password"/>
				<Enlace destino={URL.REGISTER}>
					<a className='mt-4 text-xl text-yellow-500'>¿Olvidaste la contraseña?</a>
				</Enlace>
				<Boton className="w-full text-2xl">Iniciar sesión</Boton>
				<Enlace destino={URL.REGISTER}>
					<a className='mt-4 text-xl text-yellow-500'>¿No tienes una cuenta? Registrarse</a>
				</Enlace>
			</Seccion>
			</nav>
		</>
	)
}
