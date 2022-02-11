import { useState } from "react";

const useAuth = () => {
  const data = JSON.parse(window.sessionStorage.getItem("user"));
  const [user, setUser] = useState(data);

  const login = (payload) => {
    window.sessionStorage.setItem("user", JSON.stringify(payload));
    const data = JSON.parse(window.sessionStorage.getItem("user"));
    setUser(data);
  };

  const logout = () => {
    window.sessionStorage.clear();
    setUser(null);
  };

  return {
    user,
    login,
    logout,
  };
};

export default useAuth;
