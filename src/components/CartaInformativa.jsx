import Enlace from "./Enlace";
import { URL } from "../constants/DireccionesWeb";

export default function CartaInformativa({
  children,
  imagen,
  titulo,
  responsive,
}) {
  let estilo = "flex overflow-hidden bg-blue-600 border-4 border-blue-700 card ";
  let estiloNormal = "flex-row";
  let estiloResponsive = "flex-row md:flex-col md:items-center md:justify-center";
  return (
    <div className={estilo + (responsive ? estiloResponsive : estiloNormal)}>
      {imagen}
      <div className="flex flex-col justify-center bg-blue-500 w-96 md:w-40">
        <Enlace destino={URL.RENT} className='items-center justify-center'>
          <h3 className="text-2xl text-center">{titulo}</h3>
          {children}
        </Enlace>
      </div>
    </div>
  );
}
