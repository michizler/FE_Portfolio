import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/success");
  };

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-6">We&apos;d love to hear from you! Fill out the form below.</p>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg h-32"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-clay text-white py-3 rounded-lg hover:bg-driftwood">
            Send Message
          </button>
        </form>
        <div className="mt-8 bg-bush p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-punga">Our Contact Details</h2>
          <p className="text-gray-700 mt-2">📧 <span className="font-semibold">Email:</span> support@moxiescents.com</p>
          <p className="text-gray-700">📞 <span className="font-semibold">Phone:</span> +1 (555) 123-4567</p>
          <p className="text-gray-700">📍 <span className="font-semibold">Address:</span> 123 Fragrance Lane, Scent City, SC 98765</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
