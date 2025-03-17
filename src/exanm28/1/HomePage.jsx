import { useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState({ name: "Қолданушы" });

  const handleLogout = () => {
    alert("Сіз жүйеден шықтыңыз.");
    setUser(null);
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Аккаунтыңызды жоюға сенімдісіз бе? Бұл әрекет қайтарылмайды.")) {
      alert("Аккаунтыңыз жойылды.");
      setUser(null);
    }
  };

  if (!user) return <p>Жүйеге кіріңіз</p>;

  return (
    <Card>
      <CardContent>
        <h2>Қош келдіңіз, {user.name}!</h2>
        <div>
          <Button onClick={handleLogout}>Шығу</Button>
          <Button onClick={handleDeleteAccount}>Жою</Button>
        </div>
      </CardContent>
    </Card>
  );
};