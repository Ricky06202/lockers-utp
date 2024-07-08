const apiBase = "http://localhost:3000/api"

const apiUrl = {
	lockers: apiBase + "/lockers",
	usuario: apiBase + "/usuario",
	alquiler: apiBase + "/alquiler",
}

const UrlLockers = {
	obtenerTodos: () => apiUrl.lockers,
	obtenerPorId: (id) => `${apiUrl.lockers}/${id}`,
	cambiarDisponibilidad: (id, dispoID) => `${apiUrl.lockers}/${id}/${dispoID}`
}

const UrlUsuario = {
	buscarPorNombre: (nombre) => `${apiUrl.usuario}/buscar/${nombre}`,
	obtenerPorId: (id) => `${apiUrl.usuario}/${id}`,
	verificar: (nombre, clave) => `${apiUrl.usuario}/${nombre}/${clave}`,
	nuevo: (nombre, clave, nombre_completo, sexo, tipo, cedula, correo, telefono) => `${apiUrl.usuario}/${nombre}/${clave}/${nombre_completo}/${sexo}/${tipo}/${cedula}/${correo}/${telefono}`,
}

const UrlAlquiler = {
	nuevo: (usuarioID, lockerID, fechaFinal) => `${apiUrl.alquiler}/${usuarioID}/${lockerID}/${fechaFinal}`
}

export default {
	UrlLockers,
	UrlUsuario,
	UrlAlquiler
}