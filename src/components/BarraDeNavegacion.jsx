import Boton from "./Boton";
import { Link } from "react-router-dom"

export default function BarraDeNavegacion() {
	return (
		<nav className='flex flex-col items-center gap-5 bg-blue-700 p-7'>
				<Link to="/">
				<h1 className='text-5xl text-center text-white'>Sistema de Lockers UTP</h1>
				</Link>
				<div className='grid w-full gap-5'>
					<Link to="/inicio" className='grid w-full gap-5'> 
					<button className='text-xl btn'>Iniciar Sesion</button>
					</Link>
					<Boton>Cerrar Sesion</Boton>
				</div>
			</nav>
	)
}
