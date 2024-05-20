import Boton from "./components/Boton";

export default function App() {
	return (
		<>
			<nav className='bg-blue-700 p-7 flex flex-col items-center gap-5'>
				<h1 className='text-5xl text-white text-center'>Sistema de Lockers UTP</h1>
				<div className='grid gap-5 w-full'>
					<button className='btn text-xl'>Iniciar Sesion</button>
					<Boton>Cerrar Sesion</Boton>
				</div>
			</nav>
			<section className=' flex flex-col items-center'>
				<h2 className='text-4xl text-center p-5'>
					Ubicaciones de
					<br />
					los Lockers
				</h2>
				<img
					src='https://previews.123rf.com/images/tatiana53/tatiana531406/tatiana53140600897/29571455-mapa-de-veraguas-panam%C3%A1-3d.jpg'
					alt=''
				/>
			</section>
			<section className='flex flex-col items-center'>
				<h2 className='text-4xl text-center p-5'>Zonas de Lockers</h2>
				<div className='w-5/6'>
					<div className='card bg-blue-600 p-1 flex-row'>
						<img
							className='w-32 rounded-l-xl'
							src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS'
							alt=''
						/>
						<div className='flex flex-col w-full items-center justify-center bg-blue-500 rounded-e-xl'>
							<h3 className="text-2xl">Cafeteria</h3>
              <span>Lockers Disponibles</span>
              <span>5/15</span>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
