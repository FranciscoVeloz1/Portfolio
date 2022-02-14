// export const API = "http://172.22.214.43:4000/api";
export const API = "http://localhost:4000/api";

export const getToken = () => {
  const { token } = JSON.parse(window.sessionStorage.getItem("user"));
  if (token === null) return "";
  return token;
};
