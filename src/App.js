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
    <div>
      <AddUser onAddUser={adduserhandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
