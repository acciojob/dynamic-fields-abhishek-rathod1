import React from "react";

const Field = ({ id, name, age, onChange, onRemove }) => {
  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="Name"
        onChange={(e) => onChange(id, e)}
      ></input>
      <input
        name="age"
        type="number"
        placeholder="Age"
        onChange={(e) => onChange(id, e)}
      ></input>
      <button onClick={() => onRemove(id)}>Remove</button>
      <br></br>
    </div>
  );
};

export default Field;
