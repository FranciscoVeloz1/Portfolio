import { API } from "./api";
const { token } = JSON.parse(window.sessionStorage.getItem("user"));

export const list = async () => {
  try {
    const response = await fetch(`${API}/projects`);
    return await response.json();
  } catch (error) {
    return "Failed " + error;
  }
};

export const get = async (id) => {
  try {
    const response = await fetch(`${API}/projects/${id}`);
    return await response.json();
  } catch (error) {
    console.log(error);
    return "Failed " + error;
  }
};

export const create = async (payload) => {
  try {
    const response = await fetch(`${API}/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-access-token": token },
      body: JSON.stringify(payload),
    });
    return await response.json();
  } catch (error) {
    return { insert: "failed", error };
  }
};

export const upadte = async (id, payload) => {
  try {
    const response = await fetch(`${API}/projects/${id}`, {
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
    const response = await fetch(`${API}/projects/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    return { delete: "failed", error };
  }
};
