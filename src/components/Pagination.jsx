import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300"
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="px-4 py-2 mx-1">{currentPage}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
