import React from "react";

const BasicFigure = ({ src, caption, onRemove }) => {
  return (
    <div>
      <img src={src} alt="Gallery" width={200} height={400} />
      <p>{caption}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default BasicFigure;
