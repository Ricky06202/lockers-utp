import axios from "axios"
import Api from "../constants/Api"

export function buscarLockers({ filtro }) {
	let peticion
	if (filtro) 
		peticion = Api.UrlLockers.obtenerTodos()
	else 
		peticion = Api.UrlLockers.obtenerTodos()

	return axios
	.get(peticion)
	.then((res) => {
		const apiLockers = res.data.data
		return apiLockers?.map((locker => ({
			id: locker.id_locker,
			nombre: locker.nombre_locker,
			clave: locker.clave,
			estado: locker.estado,
			sector: locker.nombre_sector,
			descripcion: locker.descripcion
		})))
	})
	.catch(() => {
		throw new Error('Error Buscando Lockers')
	})
}