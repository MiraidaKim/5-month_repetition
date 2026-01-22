import React, { useRef } from "react";
import "./style.css";

const LoadDocs = () => {
  const ref_docs = useRef();
  const load_locs_fn = async () => {
    ref_docs.current.focus();
    // console.log(ref_docs.current, "ref_docs");
  };

  return (
    <div>
      <input ref={ref_docs} className="input_docs" type="file" />
      <button onClick={load_locs_fn}>click</button>
    </div>
  );
};

export default LoadDocs;