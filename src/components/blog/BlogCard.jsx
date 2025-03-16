import PropTypes from "prop-types";
import arrowTopRight from "/assets/icons/arrow-up-right.svg";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, index }) => {
  const { image, title, date, id, excerpt, tags } = blog;

  return (
    <div className={`flex flex-col gap-3 ${index === 2 ? "md:flex-col-reverse" : ""}`}>
      {/* Blog Image With Link */}
      <Link to={`/blog/${id}`} className="rounded-2xl block overflow-hidden">
        <img
          className="w-full max-h-96 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
          src={image || "/assets/img/default-image.png"}
          alt={title || "Blog Image"}
          loading="lazy"
        />
      </Link>

      {/* Blog Content */}
      <div className="p-4 bg-white border border-whiteSmoke rounded-2xl">
        <p className="text-davyGray font-semibold text-sm mb-2">{date}</p>
        <Link to={`/blog/${id}`} className="group">
          <h2 className="text-2xl text-primary font-semibold mr-2 inline">
            {title?.length > 40 ? `${title?.slice(0, 40)}...` : title}
          </h2>
          <img
            src={arrowTopRight}
            alt="Arrow Icon"
            className="transition-transform duration-300 group-hover:rotate-45 inline-block -mt-1"
          />
        </Link>

       {/* Blog Excerpt */}
        <p className="text-[davyGray] font-normal leading-normal mt-2">
          {excerpt?.length > 100 ? `${excerpt.slice(0, 100)}...` : excerpt}
        </p>


        {/* Tags */}
        <div className="flex gap-2 mt-6">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className={`text-sm font-medium px-3 py-1 rounded-full
                ${i === 0 ? "bg-[#F9F5FF] text-davyGray" :
                  i === 1 ? "bg-whiteSmoke text-[#3538CD]" :
                            "bg-whiteSmoke text-[#6BC33F]"}
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
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

BlogCard.defaultProps = {
  blog: {
    image: "/assets/img/default-image.png",
    excerpt: "",
    tags: [],
  },
};

export default BlogCard;
