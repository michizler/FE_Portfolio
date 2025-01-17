/* eslint-disable react/prop-types */
import { useState } from "react";

const FilterSidebar = ({ onFilterChange, onResetFilters }) => {
  // State for the filters within the sidebar
  const [filters, setFilters] = useState({
    inStock: false,
    priceRange: null,
  });

  // Function to handle "In Stock Only" checkbox change
  const handleCheckboxChange = () => {
    const updatedFilters = { ...filters, inStock: !filters.inStock };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  // Function to handle price range selection
  const handlePriceChange = (range) => {
    const updatedFilters = { ...filters, priceRange: range };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  // Reset filters and clear the state when "Reset Filters" is clicked
  const handleReset = () => {
    setFilters({ inStock: false, priceRange: null }); // Reset local state
    onResetFilters(); // Call parent reset function
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-bold mb-4 text-brown">Filters</h3>

      {/* In Stock Filter */}
      <div>
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          In Stock Only
        </label>
      </div>

      {/* Price Range Filter */}
      <div className="mt-4">
        <h4 className="font-semibold text-brown mb-2">Price</h4>
        <div>
          <label className="block">
            <input
              type="radio"
              name="price"
              checked={filters.priceRange?.[0] === 10 && filters.priceRange?.[1] === 50}
              className="mr-2"
              onChange={() => handlePriceChange([10, 50])}
            />
            $10 - $50
          </label>
          <label className="block">
            <input
              type="radio"
              name="price"
              checked={filters.priceRange?.[0] === 51 && filters.priceRange?.[1] === 100}
              className="mr-2"
              onChange={() => handlePriceChange([51, 100])}
            />
            $51 - $100
          </label>
          <label className="block">
            <input
              type="radio"
              name="price"
              checked={filters.priceRange?.[0] === 101 && filters.priceRange?.[1] === 200}
              className="mr-2"
              onChange={() => handlePriceChange([101, 200])}
            />
            $101 - $200
          </label>
        </div>
      </div>

      {/* Reset Filters Button */}
      <div className="mt-6">
        <button
          className="bg-driftwood text-white px-4 py-2 rounded w-full"
          onClick={handleReset}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
