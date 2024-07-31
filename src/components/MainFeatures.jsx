import { useState } from "react";

import { useInView } from "react-intersection-observer";
import Button from "./Button";

const MainFeatures = () => {
  const [image1Visible, setImage1Visible] = useState(true);
  const [image2Visible, setImage2Visible] = useState(false);
  const [image3Visible, setImage3Visible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="MAIN_FEATURES w-full block">
      <div className="section-wrapper max-sm:w-full lg:w-9/12 flex flex-col py-20 lg:mx-auto gap-[2.4rem]">
        <div
          ref={ref}
          className={`${
            inView
              ? "opacity-100 transition-all duration-500 ease-out bottom-0"
              : "opacity-0 duration-500 transition-all -bottom-14"
          } feature-text-wrapper relative flex flex-col gap-4 text-center`}
        >
          <h2 className=" uppercase text-[#4a4a57] text-[0.8rem]">
            Flowup Features
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Perfect features to <br /> make your teamwork easier.
          </p>
        </div>
        <div
          ref={ref}
          className={`${
            inView
              ? "opacity-100 transition-all duration-500 ease-out delay-200 bottom-0"
              : "opacity-0 duration-500 transition-all -bottom-14"
          } feature-img-wrapper relative`}
        >
          <div className="button-wrapper flex flex-col gap-2 lg:flex-row lg:gap-5 mx-auto mb-6 md:mb-11 lg:mb-16 justify-center items-center font-inter text-sm">
            <button
              className={`p-2 border border-transparent hover:border-[#3b5aff] rounded-3xl ${
                image1Visible ? "text-[#3b5aff]" : "text-black"
              }`}
              onClick={() => {
                setImage1Visible(true);
                setImage2Visible(false);
                setImage3Visible(false);
              }}
            >
              Applications
            </button>
            <button
              className={`p-2 border border-transparent hover:border-[#3b5aff] rounded-3xl ${
                image2Visible ? "text-[#3b5aff]" : "text-black"
              }`}
              onClick={() => {
                setImage2Visible(true);
                setImage1Visible(false);
                setImage3Visible(false);
              }}
            >
              Customer On-boarding
            </button>
            <button
              className={`p-2 border border-transparent hover:border-[#3b5aff] rounded-3xl ${
                image3Visible ? "text-[#3b5aff]" : "text-black"
              }`}
              onClick={() => {
                setImage3Visible(true);
                setImage2Visible(false);
                setImage1Visible(false);
              }}
            >
              Lead Forms
            </button>
          </div>
          <div className="flex flex-col w-full relative">
            {/* <div
              className={`p-8 flex flex-col gap-x-9 gap-y-5 md:flex-row md:gap-8 lg:gap-9 justify-between items-stretch ${
                image1Visible
                  ? "opacity-100 transition-all duration-500"
                  : "pointer-events-none absolute  opacity-0 duration-150"
              }`}
            >
              <div className="w-full max-sm:max-h-80 lg:w-1/2 aspect-square flex-initial">
                <img
                  srcSet="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2-p-500.webp 500w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2-p-800.webp 800w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2-p-1080.webp 1080w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2.webp 1500w"
                  sizes="(max-width: 479px) 77vw, (max-width: 767px) 80vw, (max-width: 991px) 42vw, 45vw"
                  src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2.webp"
                  className="object-cover w-full h-full rounded-3xl inline-block"
                />
              </div>
              <div className="text-wrapper flex gap-12 flex-col justify-center items-start w-full flex-1">
                <div className="flex flex-col h-fit w-fit gap-4">
                  <h6 className="lg:text-4xl md:text-3xl leading-none text-2xl font-[500]">
                    Make the right first impression, collect all the info as a
                    user signs up for the first time.
                  </h6>
                  <p className="text-base lg:text-[1.1rem] font-inter font-normal leading-[1.2]">
                    Coding is not required to make an app. You can create fully
                    customized apps that can be downloaded onto any smartphone,
                    tablet, or computer using Jotform's free no-code app
                    builder.
                  </p>
                </div>
                <button className="py-3 px-7 flex text-black border border-gray-300 hover:bg-[#ff5c21] duration-100 rounded-[9rem] items-center justify-between">
                  <Link to={"/test"}>Get Demo</Link>
                </button>
              </div>
            </div> */}
            <FeatureCard
              srcSet="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2-p-500.webp 500w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2-p-800.webp 800w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2-p-1080.webp 1080w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2.webp 1500w"
              src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2.webp"
              imageVisible={image1Visible}
              featureHeading="Make the right first impression, collect all the info as a
              user signs up for the first time."
              featureText="Coding is not required to make an app. You can create fully
              customized apps that can be downloaded onto any smartphone,
              tablet, or computer using Jotform's free no-code app
              builder."
            />

            {/* <div
              className={`p-8 flex flex-col gap-x-9 gap-y-5 md:flex-row md:gap-8 lg:gap-9 justify-between items-stretch ${
                image2Visible
                  ? "opacity-100 transition-all duration-500"
                  : "pointer-events-none absolute  opacity-0 duration-150"
              }`}
            >
              <div className="w-full max-sm:max-h-80 lg:w-1/2 aspect-square flex-initial">
                <img
                  srcSet="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b60c40c266c1a5ec2395_blobs3-p-500.webp 500w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b60c40c266c1a5ec2395_blobs3-p-800.webp 800w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b60c40c266c1a5ec2395_blobs3-p-1080.webp 1080w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b60c40c266c1a5ec2395_blobs3-p-1600.webp 1600w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b60c40c266c1a5ec2395_blobs3.webp 2000w"
                  sizes="(max-width: 479px) 77vw, (max-width: 767px) 80vw, (max-width: 991px) 42vw, 45vw"
                  src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b60c40c266c1a5ec2395_blobs3.webp"
                  className="object-cover w-full h-full rounded-3xl inline-block"
                />
              </div>
              <div className="text-wrapper flex gap-12 flex-col justify-center items-start w-full flex-1">
                <div className="flex flex-col h-fit w-fit gap-4">
                  <h6 className="lg:text-4xl md:text-3xl leading-none text-2xl font-[500]">
                    Manage Your Team Easily: Assign Tasks, Track Progress, and
                    Collaborate Better with Our Simple App.
                  </h6>
                  <p className="text-base lg:text-[1.1rem] font-inter font-normal leading-[1.2]">
                    Transform your team’s efficiency with our app. Seamlessly
                    assign tasks, track milestones, and enhance collaboration
                    for better results.
                  </p>
                </div>
                <button className="py-3 px-7 flex text-black border border-gray-300 hover:bg-[#ff5c21] duration-100 rounded-[9rem] items-center justify-between">
                  Get Demo
                </button>
              </div>
            </div> */}

            <FeatureCard
              srcSet="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b60c40c266c1a5ec2395_blobs3-p-500.webp 500w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b60c40c266c1a5ec2395_blobs3-p-800.webp 800w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b60c40c266c1a5ec2395_blobs3-p-1080.webp 1080w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b60c40c266c1a5ec2395_blobs3-p-1600.webp 1600w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b60c40c266c1a5ec2395_blobs3.webp 2000w"
              src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b60c40c266c1a5ec2395_blobs3.webp"
              imageVisible={image2Visible}
              featureHeading="Manage Your Team Easily: Assign Tasks, Track Progress, and
              Collaborate Better with Our Simple App."
              featureText="Transform your team’s efficiency with our app. Seamlessly
              assign tasks, track milestones, and enhance collaboration
              for better results."
            />

            {/* <div
              className={`p-8 flex flex-col gap-x-9 gap-y-5 md:flex-row md:gap-8 lg:gap-9 justify-between items-stretch ${
                image3Visible
                  ? "opacity-100 transition-all duration-500"
                  : "pointer-events-none absolute opacity-0 duration-150"
              }`}
            >
              <div className="w-full max-sm:max-h-80 lg:w-1/2 aspect-square flex-initial">
                <img
                  srcSet="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2-p-500.webp 500w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2-p-800.webp 800w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2-p-1080.webp 1080w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2.webp 1500w"
                  sizes="(max-width: 479px) 77vw, (max-width: 767px) 80vw, (max-width: 991px) 42vw, 45vw"
                  src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2.webp"
                  className="object-cover w-full h-full rounded-3xl inline-block"
                />
              </div>
              <div className="text-wrapper flex gap-12 flex-col justify-center items-start w-full flex-1">
                <div className="flex flex-col h-fit w-fit gap-4">
                  <h6 className="lg:text-4xl md:text-3xl leading-none text-2xl font-[500]">
                    Simplify Team Workflows with Our Easy-to-Use App.
                  </h6>
                  <p className="text-base lg:text-[1.1rem] font-inter font-normal leading-[1.2]">
                    Streamline your team's workflow with our intuitive
                    management app. Assign tasks, track progress, and
                    collaborate seamlessly. Enhance productivity, ensure clear
                    communication, and achieve your goals faster. Simplify team
                    management today!
                  </p>
                </div>
                <button className="py-3 px-7 flex text-black border border-gray-300 hover:bg-[#ff5c21] duration-100 rounded-[9rem] items-center justify-between">
                  Get Demo
                </button>
              </div>
            </div> */}

            <FeatureCard
              srcSet="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2-p-500.webp 500w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2-p-800.webp 800w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2-p-1080.webp 1080w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2.webp 1500w"
              src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6632b9ea498246fb8fc62053_blobs2.webp"
              imageVisible={image3Visible}
              featureHeading="Simplify Team Workflows with Our Easy-to-Use App."
              featureText=" Streamline your team's workflow with our intuitive
              management app. Assign tasks, track progress, and
              collaborate seamlessly. Enhance productivity, ensure clear
              communication, and achieve your goals faster. Simplify team
              management today!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainFeatures;

const FeatureCard = ({
  srcSet,
  src,
  featureHeading,
  featureText,
  imageVisible,
}) => {
  return (
    <div
      className={`p-8 flex flex-col gap-x-9 gap-y-5 md:flex-row md:gap-8 lg:gap-9 justify-between items-stretch ${
        imageVisible
          ? "opacity-100 transition-all duration-500"
          : "pointer-events-none absolute opacity-0 duration-150"
      }`}
    >
      <div className="w-full max-sm:max-h-80 lg:w-1/2 aspect-square flex-initial">
        <img
          srcSet={srcSet}
          sizes="(max-width: 479px) 77vw, (max-width: 767px) 80vw, (max-width: 991px) 42vw, 45vw"
          src={src}
          className="object-cover w-full h-full rounded-3xl inline-block"
        />
      </div>
      <div className="text-wrapper flex gap-12 flex-col justify-center items-start w-full flex-1">
        <div className="flex flex-col h-fit w-fit gap-4">
          <h6 className="lg:text-4xl md:text-3xl leading-none text-2xl font-[500]">
            {featureHeading}
          </h6>
          <p className="text-base lg:text-[1.1rem] font-inter font-normal leading-[1.2]">
            {featureText}
          </p>
        </div>
        <Button link="/get-demo" text="Get Demo" />
      </div>
    </div>
  );
};
