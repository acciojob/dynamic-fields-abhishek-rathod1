import React, { useState } from "react";
import "./../styles/App.css";
import Field from "./Field";

const App = () => {
  const [fields, setFields] = useState([{ id: Date.now(), name: "", age: "" }]);

  // const [idCounter, setIdCounter] = useState(0);

  const addFields = () => {
    // const newField = { id: Date.now() };
    setFields([...fields, { id: Date.now(), name: "", age: "" }]);
  };

  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, [name]: value } : field
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = [];
    for(let field of fields){
      data.push({name:field.name, age:field.age});
    }
    console.log(data);
    //for
  };

  return (
    <div id="main">
      <div id="inputField">
        {fields.map((field) => (
          <Field
            key={field.id}
            id={field.id}
            name={field.name}
            age={field.age}
            onChange={handleChange}
            onRemove={removeField}
          />
        ))}
      </div>
      <br></br>
      <button onClick={addFields}>Add More</button>
      <button onClick={handleSubmit}>Submit</button>
      <p>After Clicking submit check console for data</p>
    </div>
  );
};

export default App;
