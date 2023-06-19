import "./App.css";
import React, { useState } from "react";
import RepositoryList from "./components/RepositoryList";
import Form from "./components/Form";
import UserDisplay from "./components/UserDisplay";

function App() {
  const [user, setUser] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [repoInfo, setRepoInfo] = useState([]);
  const [searching, setSearching] = useState(false);

  function getsubmittedData(userName) {
    setUser(userName); //dohvaća ime usera iz Form
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserInfo(data);
      });

    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRepoInfo(data);
      });
    setSearching(true);
  }

  function newSearch() {
    setSearching(false);
  }

  //console.log(userInfo);
  //console.log(repoInfo);
  return (
    <>
      {!searching && <Form whenSubmitted={getsubmittedData}></Form>}
      {searching && (
        <UserDisplay
          infoToDisplay={userInfo}
          repoToDisplay={repoInfo}
          newSearch={newSearch}
        ></UserDisplay>
      )}
    </>
  );
};

export default App;
