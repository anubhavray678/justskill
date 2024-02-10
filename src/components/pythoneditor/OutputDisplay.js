// components/PythonEditor.js

import React, { useState } from "react";

const PythonEditor = ({ onSubmit }) => {
  const [code, setCode] = useState("");

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(code);
  };

  return (
    <div>
      <textarea value={code} onChange={handleChange} rows={10} cols={50} />
      <br />
      <button onClick={handleSubmit}>Run</button>
    </div>
  );
};

export default PythonEditor;
