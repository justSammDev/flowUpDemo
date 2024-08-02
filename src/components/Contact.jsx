import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="CONTACT w-full">
      <div className="SECTION_WRAPPER max-lg:w-11/12 lg:w-9/12 mx-auto pt-24 pb-12 md:pt-32 md:pb-16  lg:pt-36 lg:pb-32">
        <div className="max-lg:w-11/12 mx-auto flex flex-col items-center justify-center text-left">
          <div className="flex flex-col max-md:w-full w-1/2 gap-10">
            <div
              className={`${
                inView1
                  ? "opacity-100 transition-all duration-700 delay-200 ease-out bottom-0"
                  : "opacity-0 duration-500 transition-all -bottom-14"
              } relative flex flex-col justify-center items-start gap-3 mb-10`}
              ref={ref1}
            >
              <h2
                className={`${
                  inView2
                    ? "opacity-100 transition-all duration-700 ease-out bottom-0"
                    : "opacity-0 duration-500 transition-all -bottom-14"
                } relative text-[#4a4a57] uppercase text-sm font-normal leading-none`}
                ref={ref2}
              >
                contact us
              </h2>
              <h2 className="font-medium text-2xl md:text-3xl lg:text-4xl leading-none">
                Drop us a message and we will get back to you!
              </h2>
            </div>

            <div className="min-w-[50%] mb-4">
              <form className="flex-col flex w-full" method="get">
                <label
                  htmlFor="E-mail"
                  className="text-sm font-medium mb-1 block"
                >
                  Your e-mail
                </label>
                <input
                  id="E-mail"
                  name="E-mail"
                  maxLength={256}
                  placeholder="Your e-mail"
                  type="email"
                  required
                  className="leading-normal h-8 w-full border border-gray-400  block p-3 mb-8 order-[0] flex-1 rounded-xl"
                />
                <label
                  htmlFor="Your-message"
                  className="text-sm font-medium mb-1 block"
                >
                  Your message
                </label>
                <input
                  id="Your-message"
                  name="Your-message"
                  maxLength={256}
                  placeholder="Your message here"
                  type="text"
                  required
                  className="leading-normal h-8 w-full border border-gray-400  block p-3 mb-8 order-[0] flex-1 rounded-xl pb-10"
                />
                <input
                  type="submit"
                  data-wait="Please wait..."
                  className="mt-8 rounded-[12rem] text-white text-center border-0 border-solid justify-center items-center flex py-5 px-6 font-normal leading-tight bg-gradient-to-r from-[#3a58fa] to-[#111a46] hover:from-[#3a58fa] hover:to-[#3a58fa] transition-colors duration-100"
                  value="Send"
                />
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
        </div>
      </div>
    </section>
  );
};
export default Contact;
