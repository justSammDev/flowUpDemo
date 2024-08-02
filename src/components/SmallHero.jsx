const SmallHero = () => {
  return (
    <section className="SMALL_HERO w-full block">
      <div className="SECTION_WRAPPER max-lg:w-11/12 lg:w-9/12 mx-auto pt-24 pb-12 md:pt-32 md:pb-16  lg:pt-36 lg:pb-32">
        <div className="flex max-lg:flex-col items-center justify-start gap-6 flex-wrap">
          <h1 class="flex-1 w-1/2 max-lg:w-full max-lg:text-4xl max-lg:text-center text-6xl font-medium leading-none my-0">
            A perfect plan for your business.
          </h1>
          <p class="flex-1 w-1/2 max-lg:w-full max-lg:text-center font-inter leading-tight font-normal">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
      </div>
    </section>
  );
};
export default SmallHero;
