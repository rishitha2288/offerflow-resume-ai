function Modal({
  isOpen,
  children,
}) {

  if (!isOpen) {
    return null
  }

  return (

    <div
      className="
        fixed
        inset-0

        bg-black/40

        backdrop-blur-sm

        flex
        items-center
        justify-center

        z-50

        p-4
      "
    >

      <div
        className="
          bg-white

          w-full
          max-w-md

          rounded-3xl

          p-8

          shadow-2xl

          border
        "
      >

        {children}

      </div>

    </div>
  )
}

export default Modal