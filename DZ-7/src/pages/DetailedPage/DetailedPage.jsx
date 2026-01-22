import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailedPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, set_data] = useState(null);

  const get_one_fn = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const result = await axios.get(url);
    set_data(result.data);
  };

  useEffect(() => {
    get_one_fn();
  }, []);

  const back_fn = () => {
    navigate(-1);
  };

  return (
    <div>
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </>
      )}

      <button onClick={back_fn}>Назад</button>
    </div>
  );
};

export default DetailedPage;
