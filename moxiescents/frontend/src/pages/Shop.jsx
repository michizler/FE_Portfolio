import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterSidebar from "../components/Shop/FilterSidebar";
import ProductCard from "../components/Shop/ProductCard";
import Pagination from "../components/Shop/Pagination";

const allProducts = [
  { id: 1, name: "Youthful Glow Anti-Aging Serum", price: 55.0, inStock: true, image: "path/to/product1.jpg", rating: 4.5 },
  { id: 2, name: "Fresh Fruit Facial Cleanser", price: 39.0, inStock: true, image: "path/to/product2.jpg", rating: 4.8 },
  { id: 3, name: "Radiance Revive Combo Serums", price: 60.0, inStock: false, image: "path/to/product3.jpg", rating: 4.3 },
  // Add more products
];

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts); // State for filtered products
  const [isFilterOpen, setIsFilterOpen] = useState(false); // For mobile filter visibility

  // Function to handle filter changes
  const applyFilters = (filters) => {
    let products = [...allProducts];
    if (filters.inStock) {
      products = products.filter((product) => product.inStock);
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      products = products.filter((product) => product.price >= min && product.price <= max);
    }
    setFilteredProducts(products);
  };

  // Function to reset all filters
  const resetFilters = () => {
    setFilteredProducts(allProducts); // Reset to display all products
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Filter button for mobile */}
      <button
        className="lg:hidden bg-driftwood text-white px-4 py-2 m-4 rounded"
        onClick={() => setIsFilterOpen(true)}
      >
        Open Filters
      </button>

      {/* Content */}
      <div className="flex container mx-auto p-4">
        {/* Filter Sidebar */}
        <aside
          className={`fixed inset-0 bg-white shadow-lg z-20 p-4 lg:relative lg:block lg:w-1/4 ${
            isFilterOpen ? "block" : "hidden"
          }`}
        >
          <button
            className="lg:hidden bg-red-500 text-white px-4 py-2 rounded mb-4"
            onClick={() => setIsFilterOpen(false)}
          >
            Close Filters
          </button>
          <FilterSidebar onFilterChange={applyFilters} onResetFilters={resetFilters} />
        </aside>

        {/* Product Grid */}
        <main className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No products found matching the criteria.
              </p>
            )}
          </div>

          {/* Pagination */}
          <div className="mt-8">
            <Pagination totalPages={9} currentPage={1} />
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Shop;
