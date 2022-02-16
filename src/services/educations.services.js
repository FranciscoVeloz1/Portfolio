import { API, getToken } from "./api";

export const list = async () => {
  try {
    const response = await fetch(`${API}/educations`);
    return await response.json();
  } catch (error) {
    return [];
  }
};

export const get = async (id) => {
  try {
    const response = await fetch(`${API}/educations/${id}`);
    return await response.json();
  } catch (error) {
    return {};
  }
};

export const create = async (payload) => {
  try {
    const response = await fetch(`${API}/educations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": getToken(),
      },
      body: JSON.stringify(payload),
    });
    return await response.json();
  } catch (error) {
    return { insert: "failed", error };
  }
};

export const update = async (id, payload) => {
  try {
    const response = await fetch(`${API}/educations/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": getToken(),
      },
      body: JSON.stringify(payload),
    });
    return await response.json();
  } catch (error) {
    return { update: "failed", error };
  }
};

export const deleteData = async (id) => {
  try {
    const response = await fetch(`${API}/educations/${id}`, {
      method: "DELETE",
      headers: { "x-access-token": getToken() },
    });
    return await response.json();
  } catch (error) {
    return { delete: "failed", error };
  }
};
