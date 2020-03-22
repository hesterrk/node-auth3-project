import React from "react";
import { useHistory, Link } from "react-router-dom";

function Users() {
  const history = useHistory();

  const onLogout = e => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <div>
      <h3> User List: protected </h3>

      <button onClick={onLogout}>Log out</button>
    </div>
  );
}

export default Users;
