const Footer = () => {
  return (
    <div className="bg-punga text-white">
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row justify-between p-8 space-y-8 md:space-y-0 border-b border-clay">
        {/* Brand Section */}
        <div className="md:w-1/4">
          <h1 className="text-xl md:text-3xl font-semibold font-mono tracking-widest">
            MoxieScents
          </h1>
          <p className="mt-4 font-verdana font-medium">
            Where scent becomes a statement. Be the center of the olfactory
            universe!
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="md:w-1/4 flex flex-col space-y-2">
          <h3 className="text-lg font-semibold font-verdana mb-4">
            Quick Links
          </h3>
          <a
            href="#"
            className="text-white font-verdana text-sm hover:underline hover:text-clay"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-white font-verdana text-sm hover:underline hover:text-clay"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-white font-verdana text-sm hover:underline hover:text-clay"
          >
            About Us
          </a>
        </div>

        {/* Need Help Section */}
        <div className="md:w-1/4 flex flex-col space-y-2">
          <h3 className="text-lg font-semibold font-verdana mb-4">Need Help</h3>
          <a
            href="#"
            className="text-white font-verdana text-sm hover:underline hover:text-clay"
          >
            FAQs
          </a>
          <a
            href="#"
            className="text-white font-verdana text-sm hover:underline hover:text-clay"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="text-white font-verdana text-sm hover:underline hover:text-clay"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-white font-verdana text-sm hover:underline hover:text-clay"
          >
            Terms & Conditions
          </a>
        </div>

        {/* Contact Info Section */}
        <div className="md:w-1/4 flex flex-col space-y-2">
          <h3 className="text-lg font-semibold font-verdana mb-4">
            Contact Info
          </h3>
          <a
            href="#"
            className="text-white font-verdana text-sm hover:underline hover:text-clay"
          >
            Business Address
          </a>
          <a
            href="#"
            className="text-white font-verdana text-sm hover:underline hover:text-clay"
          >
            info@gmail.com
          </a>
        </div>
      </div>

      {/* Social Media Links Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-4">
        <p className="text-sm text-white">
          &copy; 2025 MoxieScents. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-clay"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-clay"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-clay"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-clay"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
