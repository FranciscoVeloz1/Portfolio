import { useState } from "react";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("token");
  });

  const login = (token) => {
    setIsAuth(true);
    window.sessionStorage.setItem("token", token);
  };

  const logout = () => {
    setIsAuth(false);
    window.sessionStorage.clear();
  };

  return {
    isAuth,
    login,
    logout,
  };
};

export default useAuth;
