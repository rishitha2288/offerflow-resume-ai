function Dashboard() {

  return (

    <div
      className="
        space-y-8
      "
    >

      <div
        className="
          bg-black
          text-white

          rounded-3xl

          p-8

          flex
          flex-col
          gap-6

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >

        <div>

          <h1
            className="
              text-5xl
              font-extrabold
              tracking-tight
            "
          >
            OfferFlow
          </h1>

          <p
            className="
              text-gray-300
              text-lg
              mt-4
              max-w-2xl
            "
          >
            Track applications,
            manage interviews,
            and organize your
            complete placement journey
            in one modern workspace.
          </p>

        </div>

        <div
          className="
            grid
            grid-cols-2
            gap-4
          "
        >

          <div
            className="
              bg-white/10

              rounded-2xl

              p-5

              min-w-[140px]
            "
          >

            <p className="text-gray-300">
              Track
            </p>

            <h2
              className="
                text-3xl
                font-bold
                mt-2
              "
            >
              Jobs
            </h2>

          </div>

          <div
            className="
              bg-white/10

              rounded-2xl

              p-5

              min-w-[140px]
            "
          >

            <p className="text-gray-300">
              Manage
            </p>

            <h2
              className="
                text-3xl
                font-bold
                mt-2
              "
            >
              Interviews
            </h2>

          </div>

        </div>

      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
        "
      >

        <div
          className="
            bg-white

            border

            rounded-3xl

            p-8

            shadow-sm
          "
        >

          <h2
            className="
              text-2xl
              font-bold
            "
          >
            Why OfferFlow?
          </h2>

          <p
            className="
              text-gray-500
              mt-4
              leading-7
            "
          >
            A centralized dashboard
            to manage applications,
            interview rounds,
            preparation progress,
            and opportunities
            efficiently.
          </p>

        </div>

        <div
          className="
            bg-white

            border

            rounded-3xl

            p-8

            shadow-sm
          "
        >

          <h2
            className="
              text-2xl
              font-bold
            "
          >
            Current Focus
          </h2>

          <p
            className="
              text-gray-500
              mt-4
              leading-7
            "
          >
            Building a scalable
            internship-ready MERN
            application with
            authentication,
            analytics,
            and future ML features.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Dashboard