import { useInView } from "react-intersection-observer";

const Insights = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section className="INSIGHTS w-full block">
      <div className="CONTENT_WRAPPER flex flex-col m-auto gap-14 w-11/12 lg:w-9/12 py-12 md:py-16 lg:py-20">
        <div
          className={`INSIGHT_TEXT_WRAPPER flex flex-col relative gap-4 ${
            inView
              ? "opacity-100 transition-all duration-500 ease-out bottom-0"
              : "opacity-0 duration-500 transition-all -bottom-14"
          }`}
          ref={ref}
        >
          <h2 className="uppercase text-[#4a4a57] text-[0.8rem]">
            we are flowup
          </h2>
          <h3 className="text-2xl font-medium">
            We are results-driven, and it shows. Take a look.
          </h3>
        </div>

        <div
          ref={ref}
          className={`INSIGHT_IMG_WRAPPER flex flex-wrap justify-between items-center gap-10 relative ${
            inView
              ? "opacity-100 transition-all duration-500 ease-out delay-300 bottom-0"
              : "opacity-0 duration-500 transition-all -bottom-14"
          }`}
        >
          <div className="flex flex-col min-w-36 max-sm:w-36 max-sm:bg-white max-sm:rounded-3xl gap-16 p-6 flex-auto">
            <div className="flex flex-col items-center justify-center w-12 h-12 p-2 text-[#3b5aff]">
              <div className="w-8 h-8">
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
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-4xl lg:text-6xl text- font-medium leading-none">
                92%
              </h4>
              <p className="text-sm">Productivity growth</p>
            </div>
          </div>

          <div className="flex flex-col min-w-36 max-sm:w-36 max-sm:bg-white max-sm:rounded-3xl gap-16 p-6 flex-auto">
            <div className="flex flex-col items-center justify-center w-12 h-12 p-2 text-[#3b5aff]">
              <div className="w-8 h-8">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <defs>
                    <style>
                      {`.cls-1 {
                        fill: currentcolor;
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
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-4xl lg:text-6xl font-medium leading-none">
                564
              </h4>
              <p className="text-sm">Tasks finished</p>
            </div>
          </div>

          <div className="flex flex-col min-w-36 max-sm:w-36 max-sm:bg-white max-sm:rounded-3xl gap-16 p-6 flex-auto">
            <div className="flex flex-col items-center justify-center w-12 h-12 p-2 text-[#3b5aff]">
              <div className="w-8 h-8">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <defs>
                    <style>
                      {`.cls-1 {
                        fill: currentcolor;
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
                  <circle
                    className="cls-1"
                    cx="24.5"
                    cy="24.5"
                    r="7.5"
                  ></circle>
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-4xl lg:text-6xl font-medium leading-none">
                124
              </h4>
              <p className="text-sm">Avg. team projects</p>
            </div>
          </div>

          <div className="flex flex-col min-w-36 max-sm:w-36 max-sm:bg-white max-sm:rounded-3xl gap-16 p-6 flex-auto">
            <div className="flex flex-col items-center justify-center w-12 h-12 p-2 text-[#3b5aff]">
              <div className="w-8 h-8">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <defs>
                    <style>
                      {`.cls-1 {
                        fill: currentcolor;
                        stroke-width: 0px;
                      }`}
                    </style>
                  </defs>
                  <rect
                    className="cls-1"
                    x=".09"
                    y="0"
                    width="32"
                    height="9"
                  ></rect>
                  <rect
                    className="cls-1"
                    x="0"
                    y="11.5"
                    width="17"
                    height="9"
                  ></rect>
                  <rect
                    className="cls-1"
                    x="6.09"
                    y="23"
                    width="26"
                    height="9"
                  ></rect>
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-4xl lg:text-6xl font-medium leading-none">
                64%
              </h4>
              <p className="text-sm">Revenue growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Insights;
