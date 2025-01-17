

const features = [
  "Perfect for Oily & Acne-Prone Skin",
  "Works Efficiently for Skin Nourishment",
  "Effective in Fighting Infections",
  "Natural Antiseptic Properties",
  "Remarkable Cleansing Power",
];

const Features = () => (
  <section className="bg-cream py-16">
    <div className="container mx-auto text-center">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-dark-brown p-4 rounded-full text-white">
              <span className="text-xl font-bold">✓</span>
            </div>
            <p className="text-gray-600 mt-4">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
