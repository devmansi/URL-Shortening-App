import React from "react";

export default function ResultItem({ data }) {
  const [copy, setCopy] = React.useState(false);

  function a() {
    setCopy(true);
    navigator.clipboard.writeText(data.output);
  }

  return (
    <div className="flex result-tab">
      <p className="input-by-user">{data.input}</p>
      <hr className="result-hr" />
      <div className="flex link-to-copy">
        <p className="output">{data.output}</p>
        <button
          className={`btn copy-btn ${copy ? "copy-btn-cg" : ""}`}
          disabled={copy}
          onClick={a}
        >
          {copy ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
