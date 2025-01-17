// eslint-disable-next-line react/prop-types
const Pagination = ({ totalPages, currentPage }) => {
  return (
    <div className="flex justify-center items-center">
      <button className="px-3 py-1 mx-1 text-white bg-brown rounded">
        Previous
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`px-3 py-1 mx-1 rounded ${
            index + 1 === currentPage
              ? "bg-driftwood text-white"
              : "bg-white text-brown"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button className="px-3 py-1 mx-1 text-white bg-brown rounded">
        Next
      </button>
    </div>
  );
};

export default Pagination;
