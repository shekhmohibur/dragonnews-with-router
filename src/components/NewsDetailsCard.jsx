import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  if (!news) return null;

  return (
    <div className=" bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden mx-auto">
      {/* Image */}
      <div className="p-3">
        <img
          src={news.thumbnail_url || news.image_url}
          alt={news.title}
          className="rounded-md w-full h-48 md:h-56 object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-5 pb-5">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-snug mb-2">
          {news.title}
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          {news.details}
        </p>
      </div>

      {/* Footer Button — full width red bar */}
      <Link to={`/category/${news.category_id}`} className="bg-secondary flex justify-center items-center py-1 text-white px-2 w-fit m-2"><BiLeftArrowAlt/>All news in this category
      </Link>
    </div>
  );
};

export default NewsCard;
