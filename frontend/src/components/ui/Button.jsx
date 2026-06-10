function Button({

  text,

  onClick,

  variant = "primary",

  size = "medium",

}) {

  const baseStyles =
    `
      rounded-xl

      font-medium

      transition-all
      duration-200

      active:scale-95
    `

  const variants = {

    primary:
      `
        bg-black
        text-white

        hover:opacity-90
      `,

    danger:
      `
        bg-red-500
        text-white

        hover:bg-red-600
      `,
  }

  const sizes = {

    small:
      `
        px-4
        py-2
        text-sm
      `,

    medium:
      `
        px-6
        py-3
      `,
  }

  return (

    <button
      onClick={onClick}
      className={`
        ${baseStyles}

        ${variants[variant]}

        ${sizes[size]}
      `}
    >

      {text}

    </button>
  )
}

export default Button