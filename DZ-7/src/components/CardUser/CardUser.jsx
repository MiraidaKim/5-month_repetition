import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const CardUser = ({ item }) => {
  const navigate = useNavigate();

  const click_card_fn = () => {
    navigate(`/detailed/${item.id}`);
  };

  return (
    <div onClick={click_card_fn} className="card_user">
      <h5>{item.title}</h5>
      <p>{item.body}</p>
    </div>
  );
};

export default CardUser;
