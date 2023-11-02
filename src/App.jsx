import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState("");
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(import.meta.env.VITE_API + "/allUsers", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "Success") {
          console.log(result.user[0].email);
          setUsers(result.user[0].email);
        } else {
          console.log("ERROR!!!");
        }
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <h1>Vite + React</h1>
      <h3>{users}</h3>
    </>
  );
}

export default App;
