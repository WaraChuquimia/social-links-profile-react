import React, { useEffect, useState } from "react";
import Card from "./componentes/Card";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data.results);
        console.log(data.results);
      });
  }, []);
  return (
    <div>
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;