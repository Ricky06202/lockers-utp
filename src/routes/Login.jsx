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
				subtitulo='LOGIN'
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
			</Seccion>
			<Seccion className='mt-4 text-2xl' gap="gap-4">
				<a className='mb-6 text-5xl text-slate-100'>Registrarse</a>
				<Campo placeholder="Nombre Completo"/>
				<Campo placeholder="Nombre de Usuario"/>
				<select className='w-full p-1 mt-1 border-2 form-input text-1xl rounded-xl'>
					<option value="" disabled selected>Sexo...</option>
					<option value="Hombre">Hombre</option>
					<option value="Mujer">Mujer</option>
				</select>
				<select className='w-full p-1 mt-1 border-2 form-input text-1xl rounded-xl'>
					<option value="" disabled selected>Tipo de Usuario...</option>
					<option value="Hombre">Hombre</option>
					<option value="Mujer">Mujer</option>
				</select>
				<Campo placeholder="Contraseña" type="password"/>
				<Campo placeholder="Cédula"/>
				<Campo placeholder="Correo"/>
				<Campo placeholder="Teléfono"/>
				<Boton className="w-full mb-6 text-2xl">Registrarse</Boton>
			</Seccion>
			</nav>
			
		</>
	)
}
