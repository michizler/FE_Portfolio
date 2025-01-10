

const Newsletter = () => (
    <div className="bg-driftwood text-white py-12 px-6 md:px-16 rounded-lg shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-wide">
        Stay in the Loop
      </h2>
      <p className="text-center text-sm md:text-base mb-6">
        Subscribe to the MoxieSents newsletter and be the first to know about new products, exclusive offers, and more.
      </p>
      <form className="flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-2/3 p-3 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-punga"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-punga text-white font-semibold rounded-lg hover:bg-opacity-70 transition focus:ring-2 focus:ring-clay"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
  
  export default Newsletter;
  