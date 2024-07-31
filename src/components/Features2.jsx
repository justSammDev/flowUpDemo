import Button from "./Button";
import { useInView } from "react-intersection-observer";

const Features2 = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section className="FEATURES2 w-full">
      <div className="SECTION_WRAPPER max-sm:w-11/12 lg:w-9/12 mx-auto pb-12 pt-24 md:py-16 lg:py-20">
        <div className="flex flex-col gap-6 lg:gap-10">
          <div
            className={`${
              inView1
                ? "opacity-100 transition-all duration-500 ease-out bottom-0"
                : "opacity-0 duration-500 transition-all -bottom-14"
            } flex mx-auto lg:w-4/5 relative items-center justify-center flex-col text-center gap-3`}
            ref={ref1}
          >
            <h2 className=" uppercase leading-none text-sm font-normal text-[#4a4a57]">
              this is how it works
            </h2>
            <h2 className="text-4xl max-sm:text-2xl leading-none font-medium">
              These are the features that help you grow.
            </h2>
          </div>

          <div className="flex gap-12 lg:gap-14 flex-col items-stretch">
            <div
              className={`${
                inView2
                  ? "opacity-100 transition-all duration-1000 ease-out bottom-0"
                  : "opacity-0 duration-500 transition-all -bottom-14"
              } flex max-sm:flex-col max-sm:p-5 gap-6 items-center relative flex-wrap lg:gap-10`}
              ref={ref2}
            >
              <div className="flex-1 lg:order-[0] order-1 ">
                <img
                  src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1296e79e2af305e55c_img3.webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 73vw, (max-width: 991px) 63vw, 45vw"
                  srcSet="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1296e79e2af305e55c_img3-p-500.webp 500w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1296e79e2af305e55c_img3-p-800.webp 800w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1296e79e2af305e55c_img3-p-1080.webp 1080w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1296e79e2af305e55c_img3.webp 1154w"
                  alt="UI Elements, time management app."
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-4 flex-1">
                <h3 className="text-2xl leading-none font-medium">
                  Let the time flow
                </h3>
                <p className="font-normal lg:text-start text-center leading-none">
                  Visualize project timelines, milestones, and deadlines in a
                  dynamic and interactive timeline view for better project
                  planning and tracking.
                </p>
              </div>
            </div>

            <div
              className={`${
                inView3
                  ? "opacity-100 transition-all duration-1000 ease-out bottom-0"
                  : "opacity-0 duration-500 transition-all -bottom-14"
              } flex max-sm:flex-col max-sm:p-5 gap-6 items-center relative flex-wrap lg:gap-10`}
              ref={ref3}
            >
              <div className="flex flex-col flex-1 gap-4">
                <h3 className="text-2xl leading-none font-medium">
                  Task management? Easy.
                </h3>
                <p className="font-normal lg:text-start text-center leading-none">
                  Manage tasks with ease using a kanban-style board, allowing
                  for intuitive task organization, prioritization, and progress
                  tracking across stages of completion.
                </p>
              </div>
              <div className="flex-1 order-[0]">
                <img
                  src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1194fdac674e9dc8c0_img2.webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 73vw, (max-width: 991px) 63vw, 45vw"
                  srcSet="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1194fdac674e9dc8c0_img2-p-500.webp 500w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1194fdac674e9dc8c0_img2-p-800.webp 800w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1194fdac674e9dc8c0_img2-p-1080.webp 1080w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66338a1194fdac674e9dc8c0_img2.webp 1460w"
                  alt="UI Elements, time management app."
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 max-sm:w-full justify-center items-center mx-auto">
            <Button text="Get started free" link="/pricing" width="full" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features2;
