import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterSidebar from "../components/Shop/FilterSidebar";
import ProductCard from "../components/Shop/ProductCard";
import Pagination from "../components/Shop/Pagination";

const Shop = () => {
  const [allProducts, setAllProducts] = useState([]); // Stores fetched products
  const [filteredProducts, setFilteredProducts] = useState([]); // Stores filtered products
  const [isFilterOpen, setIsFilterOpen] = useState(false); // For mobile filter visibility
  const [loading, setLoading] = useState(true); // Loading state

  // ✅ Fetch products from MongoDB when component loads
  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data); // Debugging to check response structure
        if (data.data && Array.isArray(data.data)) {
          setAllProducts(data.data); // Fix: Access the `products` array inside the object
          setFilteredProducts(data.data);
        } else if (Array.isArray(data)) {
          setAllProducts(data); // If it's already an array
          setFilteredProducts(data);
        } else {
          console.error("Unexpected data format:", data);
        }
      })
      .catch((err) => console.error("Error fetching products:", err))
      .finally(() => setLoading(false)); // Stop loading
  }, []);

  // Apply filters based on user selection
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

  // Reset filters to show all products
  const resetFilters = () => {
    setFilteredProducts(allProducts);
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
          {loading ? (
            <p className="text-center text-gray-500">Loading products...</p>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products found.
            </p>
          )}

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
