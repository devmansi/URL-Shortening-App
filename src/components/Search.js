import React from "react";

export default function Search({ onSubmit }) {
  const [a, seta] = React.useState("");
  const [errorType, setErrorType] = React.useState("");
  function b(e) {
    seta(e.target.value);
  }

  function c(e) {
    e.preventDefault();
    if (!a) {
      setErrorType("error");

      return;
    }

    const request = new XMLHttpRequest();

    request.open("GET", `https://api.shrtco.de/v2/shorten?url=${a}`);
    request.send();

    request.addEventListener("load", function () {
      seta("");

      if (request.status === 400) {
        setErrorType("notFound");

        return;
      }

      if (!(request.status >= 200) && !(request.status < 300)) {
        setErrorType("resultUndefined");

        return;
      }

      setErrorType("");

      const response = JSON.parse(this.responseText);
      const {
        result: { full_short_link: short },
      } = response;

      onSubmit({ input: `${a}`, output: `${short}` });
    });
  }
  return (
    <form className={`form flex ${errorType}`} onSubmit={c}>
      <input
        name="userInput"
        type="text"
        placeholder="Shorten a link here..."
        className={`userInput ${
          errorType && errorType !== "resultUndefined" ? "inputError" : ""
        }`}
        value={a}
        onInput={b}
      />
      <button className="btn shorten-it-btn">Shorten It!</button>
    </form>
  );
}
