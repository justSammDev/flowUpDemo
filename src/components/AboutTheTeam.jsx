import { useInView } from "react-intersection-observer";

const AboutTheTeam = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="ABOUT_THE_TEAM w-full bg-[#151516] text-white">
      <div className="SECTION_WRAPPER max-lg:w-11/12 lg:w-9/12 mx-auto pt-24 pb-12 md:pt-32 md:pb-16  lg:pt-36 lg:pb-32">
        <div className="flex flex-col gap-10">
          <div
            className={`${
              inView1
                ? "opacity-100 transition-all duration-700 ease-out bottom-0"
                : "opacity-0 duration-500 transition-all -bottom-14"
            } relative flex items-center justify-center flex-col text-center gap-3`}
            ref={ref1}
          >
            <h2 className="text-lg font-medium leading-tight">Meet our team</h2>
            <h2 className="text-5xl lg:text-6xl leading-none font-medium">
              This is us!
            </h2>
          </div>

          <div
            className={`${
              inView2
                ? "opacity-100 transition-all duration-1000 ease-out bottom-0"
                : "opacity-0 duration-500 transition-all -bottom-14"
            } relative flex max-lg:flex-col max-lg:w-11/12 max-lg:mx-auto items-center justify-center gap-10`}
            ref={ref2}
          >
            <div className="flex-1 lg:order-[0] -order-1 max-lg:flex max-lg:w-full max-lg:justify-center max-lg:items-center">
              <img
                src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66473d4cd3f216a3f7155351_pexels-karolina-grabowska-7876739%20(1).jpg"
                loading="lazy"
                sizes="(max-width: 767px) 90vw, (max-width: 991px) 38vw, 45vw"
                srcSet="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66473d4cd3f216a3f7155351_pexels-karolina-grabowska-7876739%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66473d4cd3f216a3f7155351_pexels-karolina-grabowska-7876739%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66473d4cd3f216a3f7155351_pexels-karolina-grabowska-7876739%20(1).jpg 1280w"
                alt="People sitting and standing in the office, team, group."
                className=" aspect-square rounded-[2.4rem] object-cover w-full h-full inline-block align-middle"
              />
            </div>

            <div className="flex flex-1 flex-col gap-4 max-md:order-first lg:min-w-[30rem]">
              <h4 className="font-medium leading-normal lg:leading-none text-2xl">
                Our values.
              </h4>
              <p className="font-normal text-base font-inter">
                Visualize project timelines, milestones, and deadlines in a
                dynamic and interactive timeline view for better project
                planning and tracking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutTheTeam;
