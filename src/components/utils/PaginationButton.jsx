import React from "react";

const PaginationButton = ({ pg, setPage }) => {
  return (
    <div>
      <button onClick={() => setPage(pg)}>{pg}</button>
    </div>
  );
};

export default PaginationButton;
