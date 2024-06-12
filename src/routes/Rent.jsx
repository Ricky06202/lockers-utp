import BarraDeNavegacion from '../components/BarraDeNavegacion'
import Boton from '../components/Boton'
import Campo from '../components/Campo'
import Seccion from '../components/Seccion'
import CampoSeleccion from '../components/CampoSeleccion'

export default function Rent(){
    return (
        <>
			<BarraDeNavegacion
				ocultarBotones
				subtitulo='Alquiler'
			/>
            <nav className="m-8 bg-indigo-800" >
            <Seccion  className='py-4 text-2xl' gap="gap-4" color='bg-indigo-800 p-6 rounded-xl'>
            <form className='flex flex-col gap-5'>
                <Campo placeholder="Locker 1" disabled/>
                <Campo placeholder="Duración (en días)" type="number"/>
                <CampoSeleccion titulo="Método de Pago" opciones={["Yapi", "PayPal", "Visa"]}/>
                <Boton className="mb-6" type="Submit">Alquilar</Boton>
            </form>
            </Seccion>
            </nav>
            

		</>
    )
}