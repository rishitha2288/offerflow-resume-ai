function Input({

  type = "text",

  placeholder = "",

  value,

  onChange,

  label,

}) {

  return (

    <div
      className="
        flex
        flex-col
        gap-2
      "
    >

      {label && (

        <label
          className="
            text-sm
            font-medium
            text-gray-700
          "
        >

          {label}

        </label>

      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full

          border
          border-gray-200

          bg-gray-50

          rounded-xl

          px-4
          py-3

          outline-none

          focus:border-black
          focus:bg-white

          transition-all
          duration-200
        "
      />

    </div>
  )
}

export default Input