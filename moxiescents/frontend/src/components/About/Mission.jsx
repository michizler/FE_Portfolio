

const Mission = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold text-dark-brown mb-4">Our Mission</h2>
        <p className="text-gray-600">
          At Amari, our mission is to empower individuals to embrace their
          unique beauty with confidence. We are dedicated to crafting
          high-quality, innovative skincare, makeup, and haircare solutions
          that not only enhance your outer radiance but also nurture your skin
          and hair from within.
        </p>
      </div>
      <div>
        <img
          src="path-to-mission-image.jpg"
          alt="Our Mission"
          className="rounded-lg"
        />
      </div>
    </div>
  </section>
);

export default Mission;
