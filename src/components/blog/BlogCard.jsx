import PropTypes from "prop-types";
import arrowTopRight from "/assets/icons/arrow-up-right.svg";
import { Link } from "react-router-dom";
import { RxArrowTopRight } from "react-icons/rx";


const BlogCard = ({ blog, index }) => {
  return (
    <div className={`flex flex-col gap-3 ${index === 2 ? "md:flex-col-reverse" : ""}`}>
      {/* Blog Image With Link */}
      <Link href={blog?.id} className="rounded-2xl block overflow-hidden">
        <img className="w-full max-h-96 object-cover rounded-2xl transition-transform duration-300 hover:scale-105" 
             src={blog?.image} 
             alt={blog?.title} 
             loading="lazy" />
      </Link>

      {/* Blog Content */}
      <div className="p-4 bg-white border border-[#F5F5F5] rounded-2xl">
        <p className="text-[#535862] font-semibold text-sm">{blog?.date}</p>
        <Link href={blog?.id} className="group">
          <h2 className="text-2xl text-primary font-semibold my-2 mr-2 inline-block">{blog?.title}</h2>
          <img src={arrowTopRight} alt="Arrow Icon" className="transition-transform duration-300 group-hover:rotate-45 inline-block -mt-1" />
        </Link>
        <p className="text-[davyGray] font-normal leading-normal">{blog?.description}</p>

        {/* Tags */}
        <div className="flex gap-2 mt-6">
          {blog?.tags?.map((tag, i) => (
            <span
              key={i}
              className={`text-sm font-medium px-3 py-1 rounded-full
                ${i === 0 ? "bg-[#F9F5FF] text-[#535862]" :
                  i === 1 ? "bg-[#F5F5F5] text-[#3538CD]" :
                            "bg-[#F5F5F5] text-[#6BC33F]"}
              `}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// ✅ Prop Types for Validation
BlogCard.propTypes = {
  blog: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default BlogCard;
