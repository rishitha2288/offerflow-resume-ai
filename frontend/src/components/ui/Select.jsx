function Select({
  value,
  onChange,
  options,
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="
        border
        border-gray-300
        rounded-md
        px-3
        py-2
        outline-none
        focus:border-blue-500
      "
    >

      {options.map((option) => (

        <option
          key={option}
          value={option}
        >
          {option}
        </option>

      ))}

    </select>
  )
}

export default Select