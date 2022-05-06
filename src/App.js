import { useState, useCallback, useEffect } from "react";
import UserInfo from "./components/UserInfo";
import { Route, Redirect } from "react-router-dom";

export default function App() {
  const [users, setUsers] = useState([]);

  const fetchUsersHandler = useCallback(async () => {
    const response = await fetch("https://dummyapi.io/data/v1/user?limit=10", {
      method: "GET",
      headers: { "app-id": "627249a445202f3fa873e101" },
    });

    const data = await response.json();

    console.log(data.data);

    setUsers(data.data);
  }, []);

  useEffect(() => {
    fetchUsersHandler();
  }, []);

  return (
    <>
      <Route path="/" exact>
        <Redirect to="/users" />
      </Route>
      <Route to="/users">
        {users.map((user, index) => (
          <UserInfo
            firstName={user.firstName}
            lastName={user.lastName}
            image={user.picture}
            key={index}
            id={user.id}
          />
        ))}
      </Route>
    </>
  );
}
