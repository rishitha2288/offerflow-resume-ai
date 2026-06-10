function Card({ children }) {
  return (
    <div
      className="
        bg-white
        rounded-xl
        shadow-md
        p-5
        border
        border-gray-200
      "
    >
      {children}
    </div>
  )
}

export default Card