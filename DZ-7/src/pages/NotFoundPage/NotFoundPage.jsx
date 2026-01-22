import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const go_main_fn = () => {
    navigate("/");
  };

  useEffect(() => {
    go_main_fn();
  }, []);

  return (
    <div>
      <p>Сорри бро, такой страницы нет!</p>
      <button onClick={go_main_fn}>На главную</button>
    </div>
  );
};

export default NotFoundPage;
