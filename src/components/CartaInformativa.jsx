import Enlace from "./Enlace";
import { URL } from '../constants/DireccionesWeb'

export default function CartaInformativa({ children, imagen, titulo}) {
	return (
		<div className='flex-row overflow-hidden bg-blue-600 border-4 border-blue-700 card'>
			{imagen}
			<div className='flex flex-col items-center justify-center bg-blue-500 sm:w-96'>
			<Enlace destino={URL.RENT}>
				<h3 className='text-2xl'>
					{titulo}
				</h3>
				{children}
				</Enlace>
			</div>
		</div>
	)
}
