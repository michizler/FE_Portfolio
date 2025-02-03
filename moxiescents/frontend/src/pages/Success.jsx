import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Message Sent Successfully!</h1>
        <p className="text-gray-700 text-lg mb-6">Thank you for reaching out. We&apos;ll get back to you as soon as possible.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-clay text-white px-6 py-3 rounded-lg hover:bg-driftwood transition"
        >
          Return to Home
        </button>
      </div>
      <Footer />
    </>
  );
};

export default SuccessPage;
