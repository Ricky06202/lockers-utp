import { Link } from 'react-router-dom'

export default function Enlace({ children, destino, className }) {
	return <Link to={destino} className={className}>{children}</Link>
}
