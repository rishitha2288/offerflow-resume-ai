export const getStatusColor = (status) => {

  switch (status) {

    case "Applied":
      return "blue"

    case "OA":
      return "yellow"

    case "Interview":
      return "green"

    case "Selected":
      return "green"

    case "Rejected":
      return "red"

    default:
      return "blue"
  }
}