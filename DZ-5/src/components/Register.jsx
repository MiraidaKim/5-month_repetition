import { useState } from "react";
import "./style.css";

const Register = ({ set_page }) => {
    const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [confirmPassword, set_confirmPassword] = useState("");
  const [error, set_error] = useState("");

  const submit_fn = () => {
    if (!name || !email || !password || !confirmPassword) {
         set_error("Заполните все поля");
         return;
    }

    if (password !== confirmPassword) {
         set_error("Пароли не совпадают");
         return;
    }

     set_error("");
    set_page("products");
  };

  return (
    <div className="form">
         <h2>Регистрация</h2>
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
      <input
           placeholder="Подтвердите пароль"
           type="password"
           value={confirmPassword}
           onChange={(e) => set_confirmPassword(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button onClick={submit_fn}>Зарегистрироваться</button>
    </div>
  );
};

export default Register;
