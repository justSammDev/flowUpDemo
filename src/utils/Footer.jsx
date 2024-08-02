import { Link, useLocation } from "react-router-dom";
import Separator from "./Separator";
import Button from "./Button";

const Footer = () => {
  const pathName = useLocation();

  return (
    <div className="w-full bg-[#151516] text-white block ">
      <div className="CONTENT_WRAPPER w-11/12 lg:w-9/12 mx-auto py-20 block">
        <div className="flex lg:flex-row flex-col pb-14 items-center lg:items-start gap-x-36 gap-y-20">
          <div className="flex flex-col gap-6">
            <Link
              to="/"
              className="lg:w-40 pl-0 float-left text-[#333] relative"
            >
              <img
                src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/663b8903836f3a986fbd8ae0_assets_logo_light.svg"
                loading="lazy"
                alt=""
                className="object-cover w-full h-full inline-block align-middle"
              />
            </Link>
            <div className="font-normal">
              Join our newsletter to stay up to date on features and releases.
            </div>
            <div className="max-w-[35rem]">
              <form className="" method="get">
                <div className="flex flex-col lg:flex-row gap-4 mb-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="Email"
                    maxLength={256}
                    className="focus-visible:border focus-visible:text-[#ccc6c6] focus:outline-none decoration-inherit rounded-lg h-auto min-h-11 py-2 px-3 leading-relaxed w-full block"
                  />
                  <Button theme="primary" text="Join now" width="min-w-32" />
                </div>
                <div className="text-xs">
                  By subscribing you agree to with our
                  <Link to="#"> Privacy Policy </Link>
                  and provide consent to receive updates from our company.
                </div>
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

          <div className="flex flex-col lg:flex-row max-lg:w-full items-start gap-y-4 gap-x-8">
            <FooterLinkList
              footerHeading="Product"
              footerLinks={["Home", "Product", "About", "Pricing"]}
              pathName={pathName}
            />
            <div className="w-full h-[2px] bg-gray-500 mb-10 lg:hidden"></div>

            <FooterLinkList
              footerHeading="Utility"
              footerLinks={[
                "Licenses",
                "Changelog",
                "Instructions",
                "Style Guide",
              ]}
              pathName={pathName}
              utils={true}
            />
            <div className="w-full h-[2px] bg-gray-500 mb-10 lg:hidden"></div>

            <FooterLinkList
              footerHeading="Follow Us"
              footerLinks={["Facebook", "Instagram", "Twitter", "LinkedIn"]}
              pathName={pathName}
            />
          </div>
        </div>

        <Separator width="full" />

        <div className="flex flex-col-reverse max-lg:gap-10 lg:flex-row justify-between items-center pt-14">
          <div className="text-sm max-lg:text-xl max-lg:mt-5">
            Made by{" "}
            <a href="https://www.linkedin.com/in/samridda-devkota-1733992a1/">
              SamDev{" "}
            </a>
            and design by <a href="https://webflow.com/">Webflow</a>
          </div>

          <div className="flex lg:flex-row lg:w-auto w-full flex-col justify-center gap-x-0 gap-y-4 lg:gap-y-0 lg:gap-x-6">
            <a
              href="/"
              aria-current="page"
              className="text-sm hover:text-[#2e47c7] transition-colors max-lg:text-lg"
            >
              Privacy Policy
            </a>
            <a
              href="/"
              aria-current="page"
              className="text-sm hover:text-[#2e47c7] transition-colors max-lg:text-lg"
            >
              Terms of Service
            </a>
            <a
              href="/"
              aria-current="page"
              className="text-sm hover:text-[#2e47c7] transition-colors max-lg:text-lg"
            >
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

const FooterLinkList = ({
  footerHeading,
  footerLinks,
  pathName,
  utils = false,
}) => {
  const { pathname } = pathName;
  const UTILITY_PAGE = "/utility-page";

  const generateLink = (linkHeading) => {
    const lowercaseHeading = linkHeading.toLowerCase();
    return lowercaseHeading === "home"
      ? "/"
      : `/${lowercaseHeading.replace(/\s/g, "")}`;
  };

  const isActiveLink = (link) => {
    return pathname === link || (pathname === "/" && link === "/");
  };

  return (
    <div className="flex flex-col items-start">
      <div className="mb-4 max-sm:text-xl font-semibold">{footerHeading}</div>
      {footerLinks.map((linkHeading) => {
        const link = generateLink(linkHeading);
        const fullLink = utils ? `${UTILITY_PAGE}${link}` : link;

        return (
          <Link
            to={fullLink}
            key={link}
            className={`py-2 text-base lg:text-sm no-underline hover:text-[#2e47c7] transition-colors
              ${isActiveLink(link) ? "active-link-class" : ""}`}
          >
            {linkHeading}
          </Link>
        );
      })}
    </div>
  );
};
