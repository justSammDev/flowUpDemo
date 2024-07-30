import { Link } from "react-router-dom";

const Button = ({ theme, text, arrow, width, link }) => {
  return (
    <button
      className={`py-3 px-7 flex gap-3 ${
        theme === "primary"
          ? "text-white bg-gradient-to-r from-[#3a58fa] to-[#111a46] hover:from-[#3a58fa] hover:to-[#3a58fa] pl-7 pr-4 justify-center"
          : "text-black border border-gray-300 bg-white hover:bg-[#ff5c21] transition-colors duration-100"
      } ${
        width ? `max-lg:w-${width} ${width} max-lg:block` : ""
      } rounded-[9rem] items-center justify-between `}
    >
      <Link to={link ? link : "/"} className="text-lg">
        {text}
      </Link>
      {arrow ? (
        <div className="flex items-center justify-center rounded-full bg-white p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right text-black"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      ) : null}
    </button>
  );
};
export default Button;
