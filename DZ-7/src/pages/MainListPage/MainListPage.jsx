import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";
import "./style.css";

const MainListPage = () => {
  const [list, set_list] = useState([]);
  const navigate = useNavigate();

  const get_data_fn = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const result = await axios.get(url);
    set_list(result.data);
  };

  const go_about_fn = () => {
    navigate("/about");
  };

  useEffect(() => {
    get_data_fn();
  }, []);

  return (
    <div>
      <button onClick={go_about_fn}>О нас</button>

      <div className="main_list">
        {list.map((item) => {
          return <CardUser item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default MainListPage;
