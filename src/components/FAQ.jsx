import { useState } from "react";
import Button from "../utils/Button";
import { useInView } from "react-intersection-observer";

const FAQ = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section className="FAQ w-full block">
      <div className="CONTENT_PADDING rounded-[2.4rem] bg-gradient-to-b from-[rgba(54,97,246,.1)] to-[#f3f7fb]  m-auto max-lg:w-11/12 lg:w-9/12 py-10 md:py-12 lg:py-14">
        <div className="FAQ_WRAPPER flex gap-10 flex-col p-3 md:p-14 lg:p-16">
          <div className="FAQ_HEAD flex justify-center items-center flex-col text-center gap-3">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-none">
              Frequently Asked Questions
            </h3>
            <p className=" max-sm:leading-none font-inter">
              Here are some the most frequently asked question by our patrons.
              Hope your questions are answered and if not feel free to email us
              your questions.
            </p>
          </div>

          <div className="FAQ_BODY">
            <div
              className={`flex items-start flex-col gap-4 relative ${
                inView
                  ? "opacity-100 transition-all duration-500 ease-out bottom-0"
                  : "opacity-0 duration-500 transition-all -bottom-14"
              }`}
              ref={ref}
            >
              <FAccordion />
              <FAccordion />
              <FAccordion />
              <FAccordion />
            </div>
          </div>

          <div className="FAQ_CTA flex flex-col gap-6">
            <div className="flex flex-col gap-4 text-center">
              <h3 className="text-4xl leading-none font-medium">
                Still have a question?
              </h3>
              <p className="font-inter">Learn more about us!</p>
            </div>
            <div className="flex justify-center items-center gap-4 flex-wrap mx-auto">
              <Button text="Contact" theme="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;

const FAccordion = () => {
  const [answerHidden, setAnswerHidden] = useState(true);

  return (
    <div className="mt-3 flex p-6 items-stretch justify-start flex-col gap-0 border border-[#e7ddda] rounded-3xl">
      <div
        className="QUESTION cursor-pointer flex py-1 lg:p-0 items-center justify-between"
        onClick={() => setAnswerHidden((prev) => !prev)}
      >
        <h4 className="font-semibold">How does FlowUp work?</h4>
        <div className="self-start max-md:w-7 ml-0">
          <div
            className={`w-4 h-4 text-black transition-transform duration-300 ${
              answerHidden ? "" : "rotate-45"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 8 8"
            >
              <path
                d="M4 0L4 8"
                stroke="currentcolor"
                strokeWidth="0.8px"
              ></path>
              <path
                d="M8 4L0 4"
                stroke="currentcolor"
                strokeWidth="0.8px"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        className={`ANSWER overflow-hidden transition-all duration-300 ease-in-out ${
          answerHidden
            ? "max-h-0 opacity-0 transform -translate-y-2"
            : "max-h-[1000px] opacity-100 transform translate-y-0"
        }`}
      >
        <p className="text-base font-inter leading-tight font-normal mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          nobis corporis neque doloribus! Rerum laborum ratione enim ipsa,
          minima animi optio magni voluptates quidem quis quod quos dolorem
          officia odit?
        </p>
      </div>
    </div>
  );
};
