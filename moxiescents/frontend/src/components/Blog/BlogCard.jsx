/* eslint-disable react/prop-types */

const BlogCard = ({ image, title, date, description }) => {
  // Check if the image is a base64 string or a URL
  const isBase64 = image.startsWith("data:image");

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Use base64 directly or provide a default image */}
      <img
        className="w-full h-48 object-cover"
        src={isBase64 ? image : image || "/default-image.jpg"}
        alt={title || "Blog Image"}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-driftwood mb-2">{title}</h2>
        <p className="text-gray-500 text-sm mb-4">{date}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
