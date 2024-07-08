import { useEffect, useRef, useState } from "react"
import { iniciarSesion } from "../services/usuario"

export function useUsuario(){
	const [usuario, updateUsuario] = useState('')
	const [clave, updateClave] = useState('')
	const [error, setError] = useState(null)
	const isFirstInput = useRef(true)


	useEffect(() => {
		if (isFirstInput.current) {
			isFirstInput.current = usuario === '' || clave === ''
			return
		}
		if (usuario === '') {
			setError('El usuario no puede estar vacío')
			return
		}
		if (clave === '') {
			setError('La clave no puede estar vacía')
			return
		}
		
		setError(null)
	}, [usuario, clave])
}