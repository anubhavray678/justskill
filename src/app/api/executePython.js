// pages/api/executePython.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { code } = req.body;

  try {
    const { exec } = require("child_process");
    exec(`python -c "${code}"`, (error, stdout, stderr) => {
      if (error) {
        console.error("Error executing Python code:", error);
        res.status(500).json({ message: "Error executing Python code" });
        return;
      }
      console.log("Python code executed successfully");
      res.status(200).json({ output: stdout });
    });
  } catch (error) {
    console.error("Error executing Python code:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
