import { API } from "./api";

export const getAllData = async () => {
  try {
    const response = await fetch(`${API}/`);
    return await response.json();
  } catch (error) {
    return "Failed " + error;
  }
};

export const getData = async (id) => {
  try {
    const response = await fetch(`${API}/${id}`);
    return await response.json();
  } catch (error) {
    console.log(error);
    return "Failed " + error;
  }
};

export const saveData = async (payload) => {
  try {
    const response = await fetch(`${API}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await response.json();
  } catch (error) {
    return { insert: "failed", error };
  }
};

export const updateData = async (id, payload) => {
  try {
    const response = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await response.json();
  } catch (error) {
    return { update: "failed", error };
  }
};

export const deleteData = async (id) => {
  try {
    const response = await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    return { delete: "failed", error };
  }
};
