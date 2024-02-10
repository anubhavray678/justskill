import React, { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

const PythonEditor = ({ code, onChange, onRun }) => {
  return (
    <div>
      <AceEditor
        mode="python"
        theme="monokai"
        onChange={onChange}
        name="python_editor"
        value={code}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          useWorker: false,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{ width: "100%", height: "400px", marginBottom: "10px" }}
      />
      {/* <button onClick={onRun}>Run Code</button> */}
    </div>
  );
};

export default PythonEditor;
