import { useCallback, useRef, useState } from 'react'
import { buscarLockers } from '../services/lockers'

export function UseLockers({ filtro }) {
	const [lockers, setLockers] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const filtroAnterior = useRef(filtro)

	const getLockers = useCallback(({ filtro }) => {
		if (filtroAnterior.current === filtro) return
		setLoading(true)
		setError(null)
		filtroAnterior.current = filtro
		buscarLockers({ filtro })
			.then((nuevosLockers) => setLockers(nuevosLockers))
			.catch((e) => {
				setError(e.message)
			})
			.finally(() => setLoading(false))
	}, [])

	return {lockers, getLockers, loading, error}
}
