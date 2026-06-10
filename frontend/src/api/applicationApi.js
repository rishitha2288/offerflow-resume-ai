import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/api/applications`;

const getToken = () => {
  return localStorage.getItem("token");
};

export const getApplications = async () => {
  const response = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.data;
};

export const createApplication = async (applicationData) => {
  const response = await axios.post(API, applicationData, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.data;
};

export const updateApplication = async (id, updatedData) => {
  const response = await axios.put(`${API}/${id}`, updatedData, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.data;
};

export const deleteApplication = async (id) => {
  const response = await axios.delete(`${API}/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.data;
};

export const uploadResume = async (formData) => {
  const response = await axios.post(
    `${API}/upload-resume`,

    formData,

    {
      headers: {
        Authorization: `Bearer ${getToken()}`,

        "Content-Type": "multipart/form-data",
      },
    },
  );

  return response.data;
};

export const analyzeResume = async (formData) => {
  const response = await axios.post(
    `${API}/analyze-resume`,

    formData,

    {
      headers: {
        Authorization: `Bearer ${getToken()}`,

        "Content-Type": "multipart/form-data",
      },
    },
  );

  return response.data;
};
