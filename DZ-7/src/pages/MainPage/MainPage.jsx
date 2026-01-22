import React from "react"

const MainPage = () => {
    const navigate = useNavigate();

    const next_page_fn = () => {
        navigate("/second");
    };

    return (
      <div>
        <p>MainPage</p>
        <button onClick={next_page_fn}>next page</button>
      </div>
    );
};

export default MainPage