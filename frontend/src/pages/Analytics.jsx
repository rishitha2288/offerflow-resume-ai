function Analytics() {

  const applications =
    JSON.parse(
      localStorage.getItem("applications")
    ) || []

  const totalApplications =
    applications.length

  const selectedCount =
    applications.filter(
      (app) => app.status === "Selected"
    ).length

  const rejectedCount =
    applications.filter(
      (app) => app.status === "Rejected"
    ).length

  const interviewCount =
    applications.filter(
      (app) => app.status === "Interview"
    ).length

  const selectedPercentage =
    totalApplications
      ? (
          (selectedCount / totalApplications) * 100
        ).toFixed(1)
      : 0

  const rejectedPercentage =
    totalApplications
      ? (
          (rejectedCount / totalApplications) * 100
        ).toFixed(1)
      : 0

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Analytics
        </h1>

        <p className="text-gray-500 mt-2">
          Insights from your applications
        </p>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-white border rounded-2xl p-6">
          <h2 className="text-gray-500">
            Total Applications
          </h2>

          <p className="text-5xl font-bold mt-4">
            {totalApplications}
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-6">
          <h2 className="text-gray-500">
            Interviews
          </h2>

          <p className="text-5xl font-bold mt-4">
            {interviewCount}
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-6">
          <h2 className="text-gray-500">
            Selection Rate
          </h2>

          <p className="text-5xl font-bold mt-4">
            {selectedPercentage}%
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-6">
          <h2 className="text-gray-500">
            Rejection Rate
          </h2>

          <p className="text-5xl font-bold mt-4">
            {rejectedPercentage}%
          </p>
        </div>

      </div>

    </div>
  )
}

export default Analytics