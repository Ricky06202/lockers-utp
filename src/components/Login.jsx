

export default function BarraDeNavegacion() {
	return (
		<nav className='flex flex-col items-center gap-5 bg-blue-700 p-7' >
            <h3 className='text-4xl font-medium text-slate-50'>LOGIN</h3>
            <div className='mt-4 text-2xl'>
                <input className='w-full p-1 mt-1 border-2 form-input text-1xl rounded-xl' placeholder="Introducir usuario"></input>
                <input className='w-full p-1 mt-4 border-2 form-input text-1xl rounded-xl' placeholder="Introducir contraseña"></input>
                <button className='mt-4 text-yellow-200'>¿Olvidaste la contraseña?</button>
                <div className="flex flex-col items-center">
                    <button className='grid content-center p-4 mt-6 text-3xl text-slate-950 bg-purple-50 btn btn-md place-content-center'>Iniciar sesión</button>
                </div>
            </div>
		</nav>
	)
}