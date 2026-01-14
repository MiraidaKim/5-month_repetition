import { useState } from "react";
import "./style.css";

const Login = ({ set_page }) => {
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");

  const login_fn = () => {
    if (!name || !email || !password) {
      alert("Заполните все поля");
      return;
    }

    set_page("products");
  };

  return (
    <div className="form">
      <h2>Вход</h2>

      <input
        placeholder="Имя"
        value={name}
        onChange={(e) => set_name(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => set_email(e.target.value)}
      />

      <input
        placeholder="Пароль"
        type="password"
        value={password}
        onChange={(e) => set_password(e.target.value)}
      />

      <button onClick={login_fn}>Войти</button>
    </div>
  );
};

export default Login;
