"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const rewrite = async () => {
    setLoading(true);

    const res = await fetch("/api/rewrite", {
      method: "POST",
      body: JSON.stringify({ text: input }),
    });

    const data = await res.json();
    setOutput(data.result);

    setLoading(false);
  };

  return (
    <main style={{ padding: 40, maxWidth: 800, margin: "auto" }}>
      <h1>TrueTone AI</h1>
      <p>Make AI writing sound human.</p>

      <textarea
        rows={6}
        style={{ width: "100%" }}
        placeholder="Paste text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br /><br />

      <button onClick={rewrite}>
        {loading ? "Rewriting..." : "Rewrite"}
      </button>

      <h2>Result:</h2>

      <textarea
        rows={6}
        style={{ width: "100%" }}
        value={output}
        readOnly
      />
    </main>
  );
}
