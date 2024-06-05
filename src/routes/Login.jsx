import BarraDeNavegacion from '../components/BarraDeNavegacion'
import Boton from '../components/Boton'
import Campo from '../components/Campo'
import Enlace from '../components/Enlace'
import Seccion from '../components/Seccion'

export default function Login() {
	return (
		<>
			<BarraDeNavegacion
				ocultarBotones
				subtitulo='LOGIN'
			/>
			<Seccion className='mt-4 text-2xl' gap="gap-4">
				<Campo placeholder="Introducir Usuario"/>
				<Campo placeholder="Introducir Contraseña" type="password"/>
				<Enlace destino="/register">
					<a className='mt-4 text-xl text-yellow-500'>¿Olvidaste la contraseña?</a>
				</Enlace>
				<Boton className="w-full text-2xl">Iniciar sesión</Boton>
			</Seccion>
		</>
	)
}
