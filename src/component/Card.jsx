import React from "react";

const Card = props => {
  return (
    <div style={{ margin: "1em" }}>
      <a href={props.html_url} target="_blank" rel="noopener noreferrer">
        <img alt="avatar" style={{ width: "70px" }} src={props.avatar_url} />
        <div>
          <div style={{ fontWeight: "bold" }}>{props.name}</div>
          <div>{props.blog}</div>
        </div>
      </a>
      <button onClick={() => props.removeCard(props.index)}>Remove</button>
    </div>
  );
};

export default Card;
