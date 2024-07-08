import { useState } from 'react'
import BarraDeNavegacion from '../components/BarraDeNavegacion'
import Boton from '../components/Boton'
import Campo from '../components/Campo'
import Enlace from '../components/Enlace'
import Seccion from '../components/Seccion'
import { URL } from '../constants/DireccionesWeb'
import { iniciarSesion } from '../services/usuario'
import { useNavigate } from 'react-router-dom'

export default function Login() {
	const [usuario, updateUsuario] = useState('')
	const [clave, updateClave] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	const realizarInicioDeSesion = () => {
		setLoading(true)
		setError(null)
		iniciarSesion(usuario, clave)
			.then((id) => {
				console.log(id)
				if (id){
					localStorage.setItem('idSesion', id)
					alert('Se inicio correctamente Sesion! ' + usuario)
					navigate(URL.HOME)
				}else{
					setError('Usuario o contraseña incorrectos')
					alert('Usuario o contraseña incorrectos')
				}
			})
			.catch(error => {
				setError(error.message)
				alert(error.message)
			})
			.finally(() => {
				setLoading(false)
			})
			
	}


	function manejarCambioDeUsuario(event){
		const nuevoUsuario = event.target.value
		updateUsuario(nuevoUsuario)
	}
	
	function manejarCambioDeClave(event){
		const nuevoClave = event.target.value
		updateClave(nuevoClave)
	}

	return (
		<>
			<BarraDeNavegacion
				ocultarBotones
				subtitulo='Inicio de Sesión'
			/>
			<div className='flex flex-col items-center justify-center'>
				<Seccion
					className=' text-2xl'
					gap='gap-4'
					color='bg-indigo-800 p-6 rounded-xl'
				>
					<Campo
						placeholder='Introducir Usuario'
						value={usuario}
						onChange={manejarCambioDeUsuario}
					/>
					<Campo
						placeholder='Introducir Contraseña'
						type='password'
						value={clave}
						onChange={manejarCambioDeClave}
					/>
					<Enlace>
						<a className='mt-4 text-xl text-yellow-500'>¿Olvidaste la contraseña?</a>
					</Enlace>
					<Boton
						className='w-full text-2xl'
						onClick={realizarInicioDeSesion}
					>
						Iniciar sesión
					</Boton>
					<Enlace destino={URL.REGISTER}>
						<a className='mt-4 text-xl text-yellow-500'>¿No tienes una cuenta? Registrarse</a>
					</Enlace>
				</Seccion>
			</div>
		</>
	)
}
