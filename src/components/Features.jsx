import { useInView } from "react-intersection-observer";
import Button from "./Button";

const Features = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  return (
    <section className="FEATURES w-full block">
      <div className="CONTENT_WRAPPER flex flex-col gap-14 m-auto max-sm:w-11/12 lg:w-9/12 py-12 md:py-16 lg:py-20">
        <div
          className={`FEATURE_HEADING flex gap-4 flex-col lg:w-4/5 m-auto text-center relative ${
            inView1
              ? "opacity-100 transition-all duration-500 ease-out bottom-0"
              : "opacity-0 duration-500 transition-all -bottom-14"
          }`}
          ref={ref1}
        >
          <h2 className="uppercase text-[#4a4a57] text-[0.8rem]">
            this is how it works
          </h2>
          <h3 className="text-2xl leading-none lg:leading-none lg:text-4xl font-medium">
            Teamwork makes the dreamwork, so make it seamless.
          </h3>
        </div>

        <div className="FEATURES flex items-stretch flex-col gap-12 lg:gap-14">
          <div
            className={`FEATURE1 flex flex-col p-5 gap-6 border border-[#e7ddda] rounded-[2.4rem] flex-nowrap lg:flex-row lg:flex-wrap max-md:flex-initial self-auto justify-center lg:justify-start items-center lg:border-0 lg:p-0 lg:gap-10 relative ${
              inView1
                ? "opacity-100 transition-all duration-500 ease-out delay-300 bottom-0"
                : "opacity-0 duration-500 transition-all -bottom-14"
            }`}
            ref={ref1}
          >
            <div className="flex-1 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:w-full max-lg:text-center -order-1 lg:order-none">
              <img
                src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1296e79e2af305e55c_img3.webp"
                loading="lazy"
                sizes="(max-width: 479px) 80vw, (max-width: 991px) 63vw, 45vw"
                srcSet="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1296e79e2af305e55c_img3-p-500.webp 500w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1296e79e2af305e55c_img3-p-800.webp 800w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1296e79e2af305e55c_img3-p-1080.webp 1080w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1296e79e2af305e55c_img3.webp 1154w"
                alt="UI Elements, time management app."
                className="block object-cover w-full h-full"
              />
            </div>
            <div className=" max-lg:-order-last max-lg:text-center max-lg:w-auto flex flex-1 flex-col gap-4 lg:min-w-[30rem]">
              <h3 className=" text-2xl leading-none font-medium">
                Let the time flow
              </h3>
              <p className="text-base font-normal font-inter">
                Visualize project timelines, milestones, and deadlines in a
                dynamic and interactive timeline view for better project
                planning and tracking.
              </p>
            </div>
          </div>

          <div
            className={`FEATURE2 flex max-lg:flex-col max-lg:p-5 max-lg:border max-lg:border-[#e7ddda] rounded-[2.4rem] max-lg:text-center max-lg:justify-center max-lg:flex-nowrap  items-center gap-10 relative ${
              inView2
                ? "opacity-100 transition-all duration-500 ease-out bottom-0"
                : "opacity-0 duration-500 transition-all -bottom-14"
            }`}
            ref={ref2}
          >
            <div className=" flex max-lg:order-last max-lg:w-auto flex-1 flex-col gap-4 max-lg:min-w-4 lg:min-w-[30rem]">
              <h4 className="text-2xl max-lg:leading-normal font-medium leading-none">
                Task management? Easy.
              </h4>
              <p className="text-base font-normal font-inter">
                Manage tasks with ease using a kanban-style board, allowing for
                intuitive task organization, prioritization, and progress
                tracking across stages of completion.
              </p>
            </div>
            <div className="flex-1 max-lg:justify-center max-lg:items-center max-lg:flex max-lg:w-full max-lg:order-last order-none">
              <img
                src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1194fdac674e9dc8c0_img2.webp"
                loading="lazy"
                sizes="(max-width: 479px) 80vw, (max-width: 991px) 63vw, 45vw"
                srcSet="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1194fdac674e9dc8c0_img2-p-500.webp 500w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1194fdac674e9dc8c0_img2-p-800.webp 800w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1194fdac674e9dc8c0_img2-p-1080.webp 1080w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1194fdac674e9dc8c0_img2.webp 1460w"
                alt="UI Elements, time management app."
                className="block object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="FEATURES_BUTTONS max-lg:w-full flex max-lg:text-center justify-center items-center flex-wrap gap-4 m-auto">
          <Button link="/pricing" width="full" text="Get started free" />
        </div>
      </div>
    </section>
  );
};
export default Features;
