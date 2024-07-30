import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section className="TESTIMONIALS w-full block">
      <div className="CONTENT_WRAPPER flex flex-col gap-14 m-auto max-sm:w-11/12 lg:w-9/12 py-12 md:py-16 lg:py-20">
        <div
          className={`TESTIMONIAL_HEADING flex gap-4 flex-col text-center relative ${
            inView
              ? "opacity-100 transition-all duration-500 ease-out bottom-0"
              : "opacity-0 duration-500 transition-all -bottom-14"
          }`}
          ref={ref}
        >
          <h2 className="uppercase text-[#4a4a57] text-[0.8rem]">
            testimonials
          </h2>
          <h3 className="text-2xl leading-none lg:leading-none lg:text-4xl font-medium">
            We believe FlowUp is the best tool out there. But, listen to our
            happy clients.
          </h3>
        </div>

        <div
          className={`TESTIMONIAL_INNER flex justify-between items-stretch flex-col lg:flex-row gap-4 relative ${
            inView
              ? "opacity-100 transition-all duration-500 ease-out delay-300 bottom-0"
              : "opacity-0 duration-500 transition-all -bottom-14"
          }`}
          ref={ref}
        >
          <div className="TESTIMONIAL_IMAGE max-lg:min-w-[auto] rounded-3xl text-white bg-[url('https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b60c40c266c1a5ec2395_blobs3.webp')] bg-[0px_0px] flex justify-end items-start p-10 min-w-[21rem] flex-col flex-nowrap bg-cover flex-auto">
            <div className="text-[2.5rem] lg:text-6xl font-normal leading-none">
              75.54%
            </div>
            <div className="text-sm font-inter">
              Team satisfaction improvement
            </div>
          </div>
          <div className="TESTIMONIAL_TEXT rounded-3xl bg-white border border-[#f1f9ff] flex flex-col flex-initial justify-between items-start self-start w-full p-6 md:p-10 lg:p-12">
            <div className="flex mb-6">
              <TestimonialRating />
              <TestimonialRating />
              <TestimonialRating />
              <TestimonialRating />
              <TestimonialRating />
            </div>
            <div className="mb-6">
              <div className="text-xl lg:text-2xl font-medium leading-normal">
                “Im using FlowUp Team to manage my team
                <br />
                of accountants and it has been a game changer.”
                <br />
              </div>
            </div>
            <div className="text-left flex items-center">
              <div className="mr-4">
                <img
                  srcSet="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/664f05aab6666d7098452cc4_pexels-tima-miroshnichenko-5717546-p-500.jpg 500w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/664f05aab6666d7098452cc4_pexels-tima-miroshnichenko-5717546.jpg 640w"
                  src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/664f05aab6666d7098452cc4_pexels-tima-miroshnichenko-5717546.jpg"
                  loading="lazy"
                  sizes="48px"
                  alt="portrait of buisness woman"
                  className=" object-cover rounded-full w-12 h-12 inline-block"
                />
              </div>
              <div>
                <p className="font-medium text-base font-inter">
                  Angela Stinson
                </p>
                <p className="text-[#4a4a57] font-normal text-xs font-inter">
                  CEO, Awesome Company
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;

const TestimonialRating = () => {
  return (
    <div className="text-[#3b5aff] flex flex-col justify-center items-center w-5 h-5 mr-1">
      <svg
        width="100%"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
};
