import Button from "../utils/Button";
import { SVGIcon1 } from "./IconGrid";
const Prices = () => {
  return (
    <section className="PRICING_SECTION w-full block bg-[#f3f7fb]">
      <div className="SECTION_WRAPPER max-lg:w-11/12 lg:w-9/12 mx-auto pb-16 block">
        <div className="flex gap-6 max-lg:flex-wrap max-lg:justify-center max-lg:items-center">
          <PriceCard
            pricingPrice="19"
            pricingTitle="Starter"
            pricingFeatures={[
              "Task assignment & tracking",
              "Basic reporting",
              "Calendar integration",
              "User roles & permissions",
              "Up to 10 team members",
            ]}
          />
          <PriceCard
            pricingPrice="29"
            pricingTitle="Business"
            isHiglighted={true}
            pricingFeatures={[
              "Task assignment & tracking",
              "Basic reporting",
              "Calendar integration",
              "User roles & permissions",
              "Up to 10 team members",
            ]}
          />
          <PriceCard
            pricingPrice="39"
            pricingTitle="Golden"
            pricingFeatures={[
              "Task assignment & tracking",
              "Basic reporting",
              "Calendar integration",
              "User roles & permissions",
              "Up to 10 team members",
            ]}
          />
        </div>
      </div>
    </section>
  );
};
export default Prices;

const CheckIcon = () => (
  <svg
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.72 8.79L10.43 13.09L8.78 11.44C8.69036 11.3353 8.58004 11.2503 8.45597 11.1903C8.33191 11.1303 8.19678 11.0965 8.05906 11.0912C7.92134 11.0859 7.78401 11.1091 7.65568 11.1594C7.52736 11.2096 7.41081 11.2859 7.31335 11.3833C7.2159 11.4808 7.13964 11.5974 7.08937 11.7257C7.03909 11.854 7.01589 11.9913 7.02121 12.1291C7.02653 12.2668 7.06026 12.4019 7.12028 12.526C7.1803 12.65 7.26532 12.7604 7.37 12.85L9.72 15.21C9.81344 15.3027 9.92426 15.376 10.0461 15.4258C10.1679 15.4755 10.2984 15.5008 10.43 15.5C10.6923 15.4989 10.9437 15.3947 11.13 15.21L16.13 10.21C16.2237 10.117 16.2981 10.0064 16.3489 9.88458C16.3997 9.76272 16.4258 9.63201 16.4258 9.5C16.4258 9.36799 16.3997 9.23728 16.3489 9.11542C16.2981 8.99356 16.2237 8.88296 16.13 8.79C15.9426 8.60375 15.6892 8.49921 15.425 8.49921C15.1608 8.49921 14.9074 8.60375 14.72 8.79ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
      fill="currentcolor"
    ></path>
  </svg>
);

const PriceCard = ({
  isHiglighted,
  pricingTitle,
  pricingPrice,
  pricingFeatures,
}) => (
  <div
    className={`flex flex-1 p-6 flex-col gap-6 max-sm:flex-initial max-lg:max-w-80 bg-white rounded-3xl ${
      isHiglighted
        ? "text-white bg-gradient-to-b from-[#101841] to-[#3b5aff]"
        : ""
    }`}
  >
    <div className="flex p-2 w-12 h-12 items-center justify-center flex-col text-[#3b5aff] bg-[#f3f7fb] rounded-xl">
      <div className="w-8 h-8">
        <SVGIcon1 />
      </div>
    </div>

    <div className="sm:text-left">
      <h2 className="text-2xl  leading-none font-medium">{pricingTitle}</h2>
      <h3 className="mt-2 max-sm:text-2xl md:text-3xl text-4xl leading-none font-medium">
        ${pricingPrice}/mo
      </h3>
    </div>

    <div>
      <Button
        link="/pricing"
        arrow={true}
        text="Get Started"
        theme={isHiglighted ? "" : "primary"}
        widthLarge="full"
        isHiglighted={isHiglighted}
      />
    </div>

    <div className="flex mt-4 flex-col gap-3">
      {pricingFeatures.map((feature, i) => (
        <div
          className="flex items-center justify-start font-inter gap-2"
          key={i}
        >
          <div className="flex w-4 h-4 items-center justify-center flex-col">
            <CheckIcon />
          </div>
          <div className="text-base">{feature}</div>
        </div>
      ))}
    </div>
  </div>
);
