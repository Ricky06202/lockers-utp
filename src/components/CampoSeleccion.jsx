export default function CampoSeleccion({ titulo, opciones }) {
  return (
    <select className="w-full p-1 mt-1 border-2 form-input text-1xl rounded-xl">
      <option value="" disabled selected>
        {titulo}
      </option>
      {opciones.map((opcion) => (
        <option key={opcion} value={opcion}>
          {opcion}
        </option>
      ))}
    </select>
  );
}
