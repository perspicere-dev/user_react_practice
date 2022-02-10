import React, { useState } from "react";

import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const adduserhandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };
  return (
    <>
      <AddUser onAddUser={adduserhandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
