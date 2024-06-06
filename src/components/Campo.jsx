export default function Campo({placeholder, type, id, name, disabled}) {
	return (
		<input
			className='w-full p-1 mt-1 border-2 form-input text-1xl rounded-xl'
			placeholder={placeholder}
			type={type}
			id={id}
			name={name}
			disabled={disabled}
		>
		</input>
	)
}
