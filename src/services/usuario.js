import axios from 'axios'
import Api from '../constants/Api'

export function iniciarSesion(usuario, clave) {
	return axios.get(Api.UrlUsuario.verificar(usuario, clave)).then((res) => {
		const apiUsuario = res.data.data
		return apiUsuario.length === 0 ? 0 : apiUsuario[0].id_usuario
	})
}

export function obtenerDatosUsuario(id) {
	return axios.get(Api.UrlUsuario.obtenerPorId(id)).then((res) => {
		const apiUsuario = res.data.data
		console.log(apiUsuario)
		return {
			id: apiUsuario[0].id_usuario,
			nombre: apiUsuario[0].nombre_usuario,
			nombre_completo: apiUsuario[0].nombre_completo,
			cedula: apiUsuario[0].cédula_usuario,
			sexo: apiUsuario[0].descripSexo,
			tipo: apiUsuario[0].descripUsuario,
			correo: apiUsuario[0].correo_usuario,
			telefono: apiUsuario[0].telefono_usuario,
		}
	})
}
