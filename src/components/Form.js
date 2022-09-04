import React from "react";

import ResultItem from "./ResultItem";
import Search from "./Search";

export default function Form() {
  const [data, setData] = React.useState([]);

  function onSubmit(newdata) {
    setData([newdata, ...data]);
  }

  return (
    <section className="form-section">
      <Search onSubmit={onSubmit} />
      <div className="result">
        {data.length > 0 &&
          data.map((data) => <ResultItem data={data} key={data.output} />)}
      </div>
    </section>
  );
}
