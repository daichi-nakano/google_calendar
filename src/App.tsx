import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Calendar from "./components/pages/Calendar";
import Practice from "./components/pages/Practice";
import UserCard from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

function App() {
  const { userProfiles, loading, error, onClickFetchUser } = useAllUsers();
  return (
    <div className="App">
      <Calendar />
      <Practice />
      <button onClick={onClickFetchUser}>ボタン</button>
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>loading中です</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
