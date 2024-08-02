import Button from "../utils/Button";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section
      className={`HERO mt-24 lg:mt-32 w-10/12 lg:w-9/12 mx-auto flex flex-col  bg-gradient-to-b from-[#e7ebfa] from-70% to-white rounded-3xl items-center`}
    >
      <div className="p-8 pt-12 lg:p-14 flex flex-col items-center gap-8">
        <div ref={ref} className="HERO_TEXT  flex items-center flex-col gap-4">
          <div className=" w-full flex flex-col gap-5">
            <h1 className="text-center  text-5xl lg:text-7xl">
              Say bye to <span className="text-[#3b5aff]">chaos.</span>
            </h1>
            <p className="text-center text-lg leading-5  lg:text-xl lg:w-3/5 mx-auto">
              Were are here to help you and your team solve any and all issues
              with time and workload management.
            </p>
          </div>
          <div className="flex flex-col max-sm:w-full lg:flex-row gap-3">
            <Button
              text="Get Started"
              theme="primary"
              arrow={true}
              link="/pricing"
            />
            <Button text="Get Demo" link="/get-demo" />
          </div>
        </div>
        <div className="HERO_IMAGE  relative p-0 w-[120%] lg:w-1/2 aspect-square">
          <img
            src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6647b097f382faa8687b6cf8_hero_img.webp"
            alt="hero image mobile"
            className={`
              ${
                inView
                  ? "opacity-100 transition-all duration-500 bottom-0"
                  : "opacity-0 duration-500 transition-all -bottom-10"
              } 
              absolute aspect-square w-full h-full lg:hidden rounded-2xl object-cover z-[1]`}
            loading="lazy"
          />

          <img
            src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9d384d425d812b3b997_blobs.webp"
            alt="hero image 1"
            className={`${
              inView
                ? "opacity-100 transition-all duration-500 bottom-0"
                : "opacity-0 duration-500 transition-all -bottom-8"
            } 
            absolute w-[75%] aspect-square m-14  hidden lg:inline-block rounded-2xl object-cover z-[1]`}
            loading="lazy"
          />
          <img
            src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/664f65913abe1a5cbd1be99d_imghero1.webp"
            alt="hero image 2"
            className={`
              ${
                inView
                  ? "opacity-100 transition-all duration-500 top-2 delay-[100ms]"
                  : "opacity-0 duration-500 transition-all top-28 "
              }
              absolute w-3/5  right-3  hidden lg:inline-block rounded-2xl object-cover z-[2]`}
            loading="lazy"
          />
          <img
            src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/664f6591422f645f5fdbc9d4_imghero2.webp"
            alt="hero image 3"
            className={`
              ${
                inView
                  ? "opacity-100 transition-all duration-500 bottom-[35%] delay-[190ms]"
                  : "opacity-0 duration-500 transition-all bottom-10 "
              }
              absolute w-40 left-0 hidden lg:inline-block rounded-2xl object-cover z-[3]`}
            loading="lazy"
          />
          <img
            src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/664f659144fde758623378bf_imghero3.webp"
            alt="hero image 4"
            className={`
              ${
                inView
                  ? "opacity-100 transition-all duration-500 bottom-0"
                  : "opacity-0 duration-500 transition-all -bottom-20"
              }
              absolute w-32 h-36  left-5 hidden lg:inline-block rounded-2xl object-cover z-[4]`}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
