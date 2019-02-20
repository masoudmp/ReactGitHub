import React, { useState } from "react";
import httpService from "../services/httpService.js";

const Form = props => {
  const [username, setUsername] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    httpService
      .get(`https://api.github.com/users/${username}`)
      .then(resp => {
        props.onSubmit(resp.data);
        setUsername("");
      })
      .catch(ex => {
        if (ex.response && ex.response.status === 404) {
          alert("Sorry! Username not found.");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button type="submit">Add card</button>
    </form>
  );
};

export default Form;
