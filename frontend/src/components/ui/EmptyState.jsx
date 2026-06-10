function EmptyState({
  message,
}) {

  return (

    <div
      className="
        bg-white

        border

        rounded-3xl

        p-12

        flex
        flex-col
        items-center
        justify-center

        text-center
      "
    >

      <div
        className="
          w-20
          h-20

          rounded-full

          bg-gray-100

          flex
          items-center
          justify-center

          text-3xl
        "
      >
        📂
      </div>

      <h2
        className="
          text-2xl
          font-bold
          mt-6
        "
      >
        Nothing Here Yet
      </h2>

      <p
        className="
          text-gray-500
          mt-3
          max-w-md
          leading-7
        "
      >
        {message}
      </p>

    </div>
  )
}

export default EmptyState