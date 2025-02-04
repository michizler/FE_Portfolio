/* eslint-disable react/prop-types */

const BlogCard = ({ image, title, date, description }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-driftwood mb-2">{title}</h2>
          <p className="text-gray-500 text-sm mb-4">{date}</p>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  };
  
  export default BlogCard;
  