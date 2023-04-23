import React from "react";

export const Child = (props) => {
  console.log(props);
  return (
    <div style={{ border: "1px solid red", color: "red", margin: 10 }}>
      <h2>{props.name} - {props.number}</h2>
    </div>
  );
};
