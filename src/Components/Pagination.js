import React from 'react';

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="flex justify-center my-6">
      <button
        onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
        className="p-2 bg-gray-300 rounded-l hover:bg-gray-400 transition"
        disabled={page === 1}
      >
        Previous
      </button>

      <span className="p-2 bg-white border border-gray-300">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => setPage((prevPage) => Math.min(prevPage + 1, totalPages))}
        className="p-2 bg-gray-300 rounded-r hover:bg-gray-400 transition"
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
