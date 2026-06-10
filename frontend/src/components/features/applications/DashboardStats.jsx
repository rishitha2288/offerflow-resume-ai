function DashboardStats({
  totalApplications,
  totalOA,
  totalInterview,
  totalSelected,
}) {

  const stats = [
    {
      title: "Applications",
      value: totalApplications,
    },
    {
      title: "OA Rounds",
      value: totalOA,
    },
    {
      title: "Interviews",
      value: totalInterview,
    },
    {
      title: "Selected",
      value: totalSelected,
    },
  ]

  return (

    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-5
      "
    >

      {stats.map((stat) => (

        <div
          key={stat.title}
          className="
            bg-white

            border
            border-gray-200

            rounded-2xl

            p-6

            shadow-sm

            hover:shadow-md
            transition-all
            duration-300
          "
        >

          <p
            className="
              text-sm
              text-gray-500
              font-medium
            "
          >
            {stat.title}
          </p>

          <h2
            className="
              text-4xl
              font-bold
              mt-3
            "
          >
            {stat.value}
          </h2>

        </div>

      ))}

    </div>
  )
}

export default DashboardStats