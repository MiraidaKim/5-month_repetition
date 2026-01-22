import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
        <button onClick={() => navigate("/")}>Главная</button>
        <button onClick={() => navigate("/about")}>О фильме</button>
       <button onClick={() => navigate("/posts")}>Посты</button>
    </header>
  );
}


export default Header;
