import { useInView } from "react-intersection-observer";
import Button from "./Button";

const CTA = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section
      className={`CTA bg-[#222] text-[#fafafa]  relative w-full ${
        inView ? "opacity-100 transition-opacity duration-700" : "opacity-0"
      }`}
      ref={ref}
    >
      <div className="CONTENT_WRAPPER flex flex-col gap-14 m-auto max-sm:w-11/12 lg:w-9/12 py-12 md:py-16 lg:py-20">
        <div className="text-center mx-auto max-w-[30rem]">
          <h2 className="text-3xl lg:text-6xl font-medium leading-none">
            Get to know us more. Join our newsletter.
          </h2>
          <p className="font-inter">
            We often share the newest news about our company and the things that
            may matter the most to our patrons. Select your level of involvement
            on your own accord.
          </p>
        </div>
        <div className="max-w-[30rem] mx-auto ">
          <form className="" method="get">
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                name="Email"
                maxLength={256}
                className="focus-visible:border focus-visible:text-[#ccc6c6] focus:outline-none decoration-inherit rounded-lg h-auto min-h-11 py-2 px-3 leading-relaxed w-full block"
              />
              <Button theme="primary" text="Join now" width="min-w-32" />
            </div>
            <div className="font-inter text-sm text-center">
              By clicking Sign Up you're confirming that you agree with our
              Terms and Conditions.
            </div>
          </form>
          <div
            className={`bg-[#f3f7fb] rounded-lg mt-6 p-6 text-center text-black font-semibold hidden`}
          >
            Thank you! Your submission has been received!
          </div>
          <div
            className={`bg-[#ffdede] mt-6 py-3 px-6 text-center text-[#ff5c21] font-semibold hidden`}
          >
            Oops! Something went wrong while submitting the form.
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA;
