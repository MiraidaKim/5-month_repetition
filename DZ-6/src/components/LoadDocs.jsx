import React, { useRef } from "react";





const LoadDocs = () => {
  const docs_ref = useRef(null);


   const click_fn = () => {
       docs_ref.current.click();
  };

  return (
    <div>
      <input
          ref={docs_ref}
          type="file"
          style={{ display: "none" }}
      />

      <button onClick={click_fn}>Загрузить документ</button>
    </div>

  );
};





export default LoadDocs;
