"use client";
import React, { useState } from "react";
import Head from "next/head";
import PythonEditor from "@/components/pythoneditor/PythonEditor";

const Home = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleChange = (newCode) => {
    setCode(newCode);
  };

  const handleRun = async () => {
    try {
      const response = await fetch("/api/executePython", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      console.log(data);
      setOutput("Code executed successfully. Check console for output.");
    } catch (error) {
      console.error("Error executing Python code:", error);
      setOutput("Error executing Python code. Check console for details.");
    }
  };

  return (
    <div>
      <Head>
        <title>Python Editor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-1 justify-between pb-2">
          <h1 className="font-bold text-lg">Python Code Editor</h1>
          <button
            onClick={handleRun}
            className="border-2 text-white bg-violet-700 p-2 rounded-lg dark:border-white hover:bg-violet-600"
          >
            Run Code
          </button>
        </div>

        <PythonEditor code={code} onChange={handleChange} />
        <div>{output}</div>
      </main>
    </div>
  );
};

export default Home;
