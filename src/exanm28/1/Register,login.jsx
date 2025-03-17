import { useState } from "react";

export default function AuthApp() {
  const [isRegister, setIsRegister] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(user => user.email === email)) {
      setMessage("Бұл email тіркелген.");
      return;
    }
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    setMessage("Тіркелу сәтті аяқталды. Енді кіріңіз.");
    setIsRegister(false);
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      setMessage(`Қош келдіңіз, ${user.name}!`);
    } else {
      setMessage("Email немесе пароль қате.");
    }
  };

  return (
    <div>
      <h2>{isRegister ? "Тіркелу" : "Кіру"}</h2>
      {isRegister && (
        <input
          type="text"
          placeholder="Аты"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Құпиясөз"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={isRegister ? handleRegister : handleLogin}
      >
        {isRegister ? "Тіркелу" : "Кіру"}
      </button>
      <button
        onClick={() => setIsRegister(!isRegister)}
      >
        {isRegister ? "Аккаунтыңыз бар ма? Кіру" : "Тіркелу үшін осында басыңыз"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
