import { Link } from 'react-router-dom'

export default function Enlace({ children, destino }) {
	return <Link to={destino}>{children}</Link>
}
