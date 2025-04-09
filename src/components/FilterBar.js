const FilterBar = ({ setFilter }) => (
  <div className="flex flex-wrap gap-3 justify-center mb-8">
    {["All", "Applied", "Interview", "Offer", "Rejected"].map((status) => (
      <button
        key={status}
        onClick={() => setFilter(status)}
        className="bg-blue-500 text-white font-medium px-5 py-2 rounded-full shadow hover:bg-blue-600 transition-all duration-200"
      >
        {status}
      </button>
    ))}
  </div>
);

export default FilterBar;
