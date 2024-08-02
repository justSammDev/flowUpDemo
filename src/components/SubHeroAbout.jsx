import { useInView } from "react-intersection-observer";

const SubHeroAbout = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="ABOUT_SUBHERO w-full">
      <div className="SECTION_WRAPPER max-lg:w-11/12 lg:w-9/12 mx-auto pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-32">
        <div className="flex max-lg:items-center max-lg:justify-center max-lg:flex-wrap max-lg:text-center max-lg:gap-4">
          <div
            className={`${
              inView1
                ? "opacity-100 transition-all duration-700 ease-out bottom-0"
                : "opacity-0 duration-500 transition-all -bottom-14"
            } flex flex-1 flex-col gap-6 text-center relative justify-center items-center`}
            ref={ref1}
          >
            <div className="flex flex-col gap-3 max-w-96">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-none">
                Meet the team.
              </h2>
              <p className="font-inter font-normal">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SubHeroAbout;
