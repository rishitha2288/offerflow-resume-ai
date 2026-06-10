import Button from "../../ui/Button"
import Badge from "../../ui/Badge"
import Select from "../../ui/Select"

import {
  getStatusColor,
} from "../../../utils/statusUtils"

function ApplicationCard({
  app,
  handleEdit,
  handleDelete,
  handleStatusUpdate,
}) {

  return (
    <div
      className="
        bg-white
        p-4
        rounded-lg
        border

        flex
        flex-col
        gap-4

        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >

      <div className="space-y-2">

        <h2 className="text-xl font-bold">
          {app.company}
        </h2>

        <Badge
          text={app.status}
          color={getStatusColor(app.status)}
        />

      </div>

      <div
        className="
          flex
          flex-col
          gap-2

          sm:flex-row
        "
      >

        <Button
          text="Edit"
          size="small"
          onClick={() => handleEdit(app)}
        />

        <Select
          value={app.status}
          onChange={(e) =>
            handleStatusUpdate(
              app._id,
              e.target.value
            )
          }
          options={[
            "Applied",
            "OA",
            "Interview",
            "Selected",
            "Rejected",
          ]}
        />

        <Button
          text="Delete"
          variant="danger"
          size="small"
          onClick={() =>
            handleDelete(app._id)
          }
        />

      </div>

    </div>
  )
}

export default ApplicationCard