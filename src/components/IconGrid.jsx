import { useInView } from "react-intersection-observer";

const IconGrid = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section className="ICON_GRID w-full">
      <div className="SECTION_WRAPPER max-sm:w-11/12 lg:w-9/12 mx-auto pb-12 pt-24 md:py-16 lg:py-20">
        <div className="flex lg:flex-row flex-col items-stretch justify-start gap-10">
          <div
            className={`${
              inView1
                ? "opacity-100 transition-all duration-700 ease-out bottom-0"
                : "opacity-0 duration-500 transition-all -bottom-14"
            } flex relative flex-1 flex-col gap-3`}
            ref={ref1}
          >
            <h2
              className={`${
                inView1
                  ? "opacity-100 transition-all duration-1000 ease-out bottom-0"
                  : "opacity-0 duration-500 transition-all -bottom-14"
              } uppercase leading-none relative text-sm font-normal text-[#4a4a57]`}
              ref={ref1}
            >
              this is how it works
            </h2>
            <h3 className="text-4xl max-sm:text-2xl max-sm:leading-none font-medium">
              These are the features that help you grow.
            </h3>
          </div>

          <div
            className={`${
              inView2
                ? "opacity-100 transition-all duration-1000 ease-out bottom-0"
                : "opacity-0 duration-500 transition-all -bottom-14"
            } flex relative flex-1 lg:flex-row flex-col flex-wrap gap-6 order-[0]`}
            ref={ref2}
          >
            <Icon
              IconComponent={SVGIcon1}
              iconHeading="Unlock insights from experts"
              iconText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            />
            <Icon
              IconComponent={SVGIcon2}
              iconHeading="Explore new possibilites"
              iconText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            />
            <Icon
              IconComponent={SVGIcon3}
              iconHeading="Track the time wisely"
              iconText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            />
            <Icon
              IconComponent={SVGIcon4}
              iconHeading="Manage the team"
              iconText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default IconGrid;

export const SVGIcon1 = () => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    <defs>
      <style>
        {`
              .cls-1 {
                fill: currentColor;
                stroke-width: 0px;
              }
            `}
      </style>
    </defs>
    <path
      className="cls-1"
      d="m11.05,11.05c.65-.64,1.39-1.15,2.23-1.5L9.77,1.26c-1.91.81-3.62,1.96-5.08,3.43-1.47,1.47-2.62,3.18-3.43,5.08l8.29,3.51c.35-.83.86-1.58,1.5-2.23Z"
    ></path>
    <path
      className="cls-1"
      d="m11.05,20.95c-.64-.65-1.15-1.39-1.5-2.22-.36-.86-.55-1.78-.55-2.73H0c0,2.16.42,4.25,1.26,6.23.81,1.91,1.96,3.62,3.43,5.08,1.47,1.47,3.18,2.62,5.08,3.43,1.97.83,4.07,1.26,6.23,1.26v-9c-.95,0-1.86-.18-2.72-.55-.83-.35-1.58-.86-2.23-1.5Z"
    ></path>
    <path
      className="cls-1"
      d="m30.74,9.77c-.81-1.91-1.96-3.62-3.43-5.08-1.47-1.47-3.18-2.62-5.08-3.43C20.25.42,18.16,0,16,0v9c.95,0,1.86.18,2.72.55.83.35,1.58.86,2.23,1.5.64.65,1.15,1.39,1.5,2.22.36.86.55,1.78.55,2.72s-.18,1.86-.55,2.72c-.35.83-.86,1.58-1.5,2.23-.65.64-1.39,1.15-2.23,1.5l3.51,8.29c1.91-.81,3.62-1.96,5.08-3.43,1.47-1.47,2.62-3.18,3.43-5.09.83-1.98,1.26-4.07,1.26-6.23s-.42-4.25-1.26-6.23Z"
    ></path>
  </svg>
);

const SVGIcon2 = () => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    <defs>
      <style>
        {`.cls-1 {
              fill: currentColor;
              stroke-width: 0px;
            }`}
      </style>
    </defs>
    <path
      className="cls-1"
      d="m16,23c-3.86,0-7-3.14-7-7H0c0,8.82,7.18,16,16,16s16-7.18,16-16h-9c0,3.86-3.14,7-7,7Z"
    ></path>
    <path
      className="cls-1"
      d="m16,16C24.82,16,32,8.82,32,0h-9c0,3.86-3.14,7-7,7S9,3.86,9,0H0C0,8.82,7.18,16,16,16Z"
    ></path>
  </svg>
);

const SVGIcon3 = () => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    <defs>
      <style>
        {`.cls-1 {
              fill: currentColor;
              stroke-width: 0px;
            }`}
      </style>
    </defs>
    <circle className="cls-1" cx="7.5" cy="7.5" r="7.5"></circle>
    <path
      className="cls-1"
      d="m24.5,15c4.14,0,7.5-3.36,7.5-7.5S28.64,0,24.5,0s-7.5,3.36-7.5,7.5,3.36,7.5,7.5,7.5Zm0-10c1.38,0,2.5,1.12,2.5,2.5s-1.12,2.5-2.5,2.5-2.5-1.12-2.5-2.5,1.12-2.5,2.5-2.5Z"
    ></path>
    <path
      className="cls-1"
      d="m7.5,17c-4.14,0-7.5,3.36-7.5,7.5s3.36,7.5,7.5,7.5,7.5-3.36,7.5-7.5-3.36-7.5-7.5-7.5Zm0,10c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5,2.5,1.12,2.5,2.5-1.12,2.5-2.5,2.5Z"
    ></path>
    <circle className="cls-1" cx="24.5" cy="24.5" r="7.5"></circle>
  </svg>
);

const SVGIcon4 = () => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    <defs>
      <style>
        {`
        .cls-1 {
          fill: currentcolor;
          stroke-width: 0px;
        }
            `}
      </style>
    </defs>
    <rect className="cls-1" x=".09" y="0" width="32" height="9"></rect>
    <rect className="cls-1" x="0" y="11.5" width="17" height="9"></rect>
    <rect className="cls-1" x="6.09" y="23" width="26" height="9"></rect>
  </svg>
);

const Icon = ({ IconComponent, iconHeading, iconText }) => {
  return (
    <div className="flex flex-col flex-initial lg:flex-1 min-w-[40%] gap-6">
      <div className="flex p-2 w-12 h-12 items-center justify-center flex-col text-[#3b5aff] bg-[#f3f7fb] rounded-xl">
        <div className="w-8 h-8">
          <IconComponent />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-semibold lg:text-lg lg:leading-none">
          {iconHeading}
        </div>
        <div className="font-inter leading-tight text-sm">{iconText}</div>
      </div>
    </div>
  );
};
