import { useEffect, useState } from "react";

import {
  getApplications,
  createApplication,
  deleteApplication,
  updateApplication,
} from "../api/applicationApi";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import EmptyState from "../components/ui/EmptyState";
import Modal from "../components/ui/Modal";

import ApplicationCard from "../components/features/applications/ApplicationCard";

import DashboardStats from "../components/features/applications/DashboardStats";

import { toast } from "react-toastify";

function Applications() {

  const [company, setCompany] =
    useState("");

  const [editingId,
  setEditingId] =
    useState(null);

  const [search,
  setSearch] =
    useState("");

  const [statusFilter,
  setStatusFilter] =
    useState("All");

  const [isModalOpen,
  setIsModalOpen] =
    useState(false);

  const [applications,
  setApplications] =
    useState([]);

  const [loading,
  setLoading] =
    useState(false);

  useEffect(() => {

    fetchApplications();

  }, []);

  const fetchApplications =
    async () => {

      try {

        const data =
          await getApplications();

        setApplications(data);

      } catch (error) {

        toast.error(
          "Something went wrong"
        );
      }
    };

  const filteredApplications =
    applications.filter((app) => {

      const matchesSearch =
        app.company
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesStatus =

        statusFilter === "All"

          ? true

          : app.status ===
            statusFilter;

      return (
        matchesSearch &&
        matchesStatus
      );
    });

  const totalApplications =
    applications.length;

  const totalOA =
    applications.filter(
      (app) =>
        app.status === "OA"
    ).length;

  const totalInterview =
    applications.filter(
      (app) =>
        app.status ===
        "Interview"
    ).length;

  const totalSelected =
    applications.filter(
      (app) =>
        app.status ===
        "Selected"
    ).length;

  const handleAddApplication =
    async () => {

      if (!company.trim()) {

        toast.error(
          "Company name required"
        );

        return;
      }

      try {

        setLoading(true);

        if (editingId) {

          const updatedApplication =

            await updateApplication(
              editingId,
              {
                company,
              }
            );

          const updatedApplications =

            applications.map(
              (app) => {

                if (
                  app._id ===
                  editingId
                ) {

                  return updatedApplication;
                }

                return app;
              }
            );

          setApplications(
            updatedApplications
          );

          toast.success(
            "Application Saved"
          );

          setEditingId(null);

        } else {

          const newApplication =

            await createApplication({
              company,

              status:
                "Applied",
            });

          setApplications([
            ...applications,
            newApplication,
          ]);

          toast.success(
            "Application Added"
          );
        }

        setCompany("");

      } catch (error) {

        toast.error(
          "Something went wrong"
        );

      } finally {

        setLoading(false);
      }
    };

  const handleDelete =
    async (id) => {

      try {

        await deleteApplication(id);

        toast.success(
          "Application Deleted"
        );

        const filtered =
          applications.filter(
            (app) =>
              app._id !== id
          );

        setApplications(filtered);

      } catch (error) {

        toast.error(
          "Something went wrong"
        );
      }
    };

  const handleEdit =
    (app) => {

      setCompany(app.company);

      setEditingId(app._id);

      setIsModalOpen(true);
    };

  const handleStatusUpdate =
    async (id, value) => {

      try {

        const updatedApplication =

          await updateApplication(
            id,
            {
              status: value,
            }
          );

        const updatedApplications =

          applications.map(
            (app) => {

              if (
                app._id === id
              ) {

                return updatedApplication;
              }

              return app;
            }
          );

        setApplications(
          updatedApplications
        );

      } catch (error) {

        toast.error(
          "Something went wrong"
        );
      }
    };

  return (

    <div
      className="
        space-y-6
        max-w-6xl
      "
    >

      <h1
        className="
          text-4xl
          font-extrabold
          tracking-tight
        "
      >
        Applications
      </h1>

      <Input
        placeholder="
        Search applications
        "

        value={search}

        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
      />

      <div
        className="
          flex
          gap-2
          flex-wrap
        "
      >

        <Button
          text="All"
          size="small"
          onClick={() =>
            setStatusFilter(
              "All"
            )
          }
        />

        <Button
          text="Applied"
          size="small"
          onClick={() =>
            setStatusFilter(
              "Applied"
            )
          }
        />

        <Button
          text="OA"
          size="small"
          onClick={() =>
            setStatusFilter(
              "OA"
            )
          }
        />

        <Button
          text="Interview"
          size="small"
          onClick={() =>
            setStatusFilter(
              "Interview"
            )
          }
        />

        <Button
          text="Selected"
          size="small"
          onClick={() =>
            setStatusFilter(
              "Selected"
            )
          }
        />

        <Button
          text="Rejected"
          size="small"
          variant="danger"
          onClick={() =>
            setStatusFilter(
              "Rejected"
            )
          }
        />

      </div>

      <DashboardStats
        totalApplications={
          totalApplications
        }

        totalOA={totalOA}

        totalInterview={
          totalInterview
        }

        totalSelected={
          totalSelected
        }
      />

      <Button
        text="Add Application"

        onClick={() =>
          setIsModalOpen(true)
        }
      />

      <Modal
        isOpen={isModalOpen}
      >

        <div
          className="
            space-y-4
          "
        >

          <h2
            className="
              text-2xl
              font-bold
            "
          >
            {
              editingId

                ? "Edit"

                : "Add"
            }

            {" "}
            Application

          </h2>

          <Input
            placeholder="
            Enter company
            "

            value={company}

            onChange={(e) =>
              setCompany(
                e.target.value
              )
            }
          />

          <div
            className="
              flex
              gap-2
            "
          >

            <Button

              text={
                loading

                  ? "Saving..."

                  : editingId

                  ? "Update"

                  : "Add"
              }

              disabled={loading}

              onClick={async () => {

                await handleAddApplication();

                setIsModalOpen(false);
              }}
            />

            <Button
              text="Cancel"

              variant="danger"

              onClick={() =>
                setIsModalOpen(false)
              }
            />

          </div>

        </div>

      </Modal>

      <div
        className="
          space-y-4
        "
      >

        {
          filteredApplications.length === 0

            ? (

              <EmptyState
                message="
                No applications found
                "
              />

            )

            : (

              filteredApplications.map(
                (app) => (

                  <ApplicationCard

                    key={app._id}

                    app={app}

                    handleEdit={
                      handleEdit
                    }

                    handleDelete={
                      handleDelete
                    }

                    handleStatusUpdate={
                      handleStatusUpdate
                    }
                  />
                )
              )
            )
        }

      </div>

    </div>
  );
}

export default Applications;