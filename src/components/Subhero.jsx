import { Link } from "react-router-dom";
import Button from "./Button";
import { useInView } from "react-intersection-observer";

const Subhero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section className="SUB_HERO w-full">
      <div className="SECTION_WRAPPER max-sm:w-11/12 lg:w-9/12 flex flex-col mx-auto pb-12 pt-24 md:pb-24 md:pt-32 lg:pb-32 lg:pt-36">
        <div className="flex flex-col max-md:items-center max-md:justify-center max-md:text-center max-md:gap-4 lg:flex-row">
          <div
            className={`${
              inView
                ? "opacity-100 transition-all duration-500 ease-out bottom-0"
                : "opacity-0 duration-500 transition-all -bottom-14"
            } flex items-start relative justify-center flex-1 lg:text-left flex-col gap-6`}
            ref={ref}
          >
            <div className="flex flex-col gap-3 max-w-96">
              <h1 className="text-5xl font-medium leading-none">
                This is <span className="text-[#3b5aff]">FlowUp.</span>
              </h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row flex-wrap mt-0 max-sm:w-full max-md:justify-center max-md:items-center items-center gap-4">
              <Link to="/pricing" className="w-full lg:w-auto">
                <Button
                  text="Get Started"
                  arrow={true}
                  theme="primary"
                  width="full"
                  link="/pricing"
                />
              </Link>
              <Link to="/get-demo" className="w-full lg:w-auto">
                <Button text="Get demo" width="full" link="/get-demo" />
              </Link>
            </div>
          </div>

          <div
            className={`${
              inView
                ? "opacity-100 transition-all duration-700 ease-out bottom-0"
                : "opacity-0 duration-500 transition-all -bottom-14"
            } flex items-start justify-center relative flex-1 text-left flex-col max-lg:items-center max-lg:justify-center max-lg:text-center max-lg:flex-initial gap-6`}
            ref={ref}
          >
            <img
              src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/665072d27c9da19376b8ddd4_section_top.webp"
              loading="lazy"
              sizes="(max-width: 479px) 90vw, (max-width: 767px) 400px, (max-width: 991px) 52vw, 45vw"
              srcSet="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/665072d27c9da19376b8ddd4_section_top-p-500.webp 500w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/665072d27c9da19376b8ddd4_section_top-p-800.webp 800w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/665072d27c9da19376b8ddd4_section_top-p-1080.webp 1080w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/665072d27c9da19376b8ddd4_section_top.webp 1126w"
              alt="UI element of an app,statistics"
              className="object-cover w-full h-full inline-block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Subhero;
