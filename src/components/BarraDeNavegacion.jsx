import Boton from "./Boton";

export default function BarraDeNavegacion() {
	return (
		<nav className='bg-blue-700 p-7 flex flex-col items-center gap-5'>
				<h1 className='text-5xl text-white text-center'>Sistema de Lockers UTP</h1>
				<div className='grid gap-5 w-full'>
					<button className='btn text-xl'>Iniciar Sesion</button>
					<Boton>Cerrar Sesion</Boton>
				</div>
			</nav>
	)
}
