import BarraDeNavegacion from '../components/BarraDeNavegacion'
import Boton from '../components/Boton'
import Campo from '../components/Campo'
import Seccion from '../components/Seccion'
import CampoSeleccion from '../components/CampoSeleccion'

export default function Register(){
    return (
        <>
			<BarraDeNavegacion
				ocultarBotones
				subtitulo='Registrarse'
			/>
            <nav className='m-8 bg-indigo-800'>
            <Seccion  className='text-2xl ' gap="gap-4" color='bg-indigo-800 p-2 rounded-xl'>
				<Campo placeholder="Nombre Completo"/>
				<Campo placeholder="Nombre de Usuario"/>
                <CampoSeleccion titulo="Sexo..." opciones={["Hombre", "Mujer"]}/>
                <CampoSeleccion titulo="Tipo de Usuario..." opciones={["Estudiante", "Docente", "Administrativo", "Otros"]}/>
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