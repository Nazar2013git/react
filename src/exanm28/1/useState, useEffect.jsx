import { useState, useEffect } from "react";

function UserData() {
  const [name, setName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("username");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("username", name);
  }, [name]);

  return (
    <div>
      <h2>Қолданушы аты:</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Атыңызды енгізіңіз"
      />
      <p>Сақталған ат: {name}</p>
    </div>
  );
}

export default UserData;