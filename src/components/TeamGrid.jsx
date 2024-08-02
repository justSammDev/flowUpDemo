import { useInView } from "react-intersection-observer";

const TeamGrid = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="TEAM_GRID w-full">
      <div className="SECTION_WRAPPER max-lg:w-11/12 lg:w-9/12 mx-auto pt-24 pb-12 md:pt-32 md:pb-16  lg:pt-36 lg:pb-32">
        <div className="max-lg:w-11/12 mx-auto flex flex-col gap-10">
          <div
            className={`${
              inView1
                ? "opacity-100 transition-all duration-700 ease-out bottom-0"
                : "opacity-0 duration-500 transition-all -bottom-14"
            } relative `}
            ref={ref1}
          >
            <h2 className="text-3xl lg:text-5xl font-medium leading-none">
              We are all about the people.
            </h2>
          </div>

          <div
            className={`${
              inView2
                ? "opacity-100 transition-all duration-1000 ease-out bottom-0"
                : "opacity-0 duration-500 transition-all -bottom-14"
            } relative flex items-start justify-start flex-wrap gap-x-6 gap-y-14`}
            ref={ref2}
          >
            <TeamTile
              imgSrc="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6647411ac3470fa0e2384454_pexels-cristian-rojas-10041258.jpg"
              srcSet="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6647411ac3470fa0e2384454_pexels-cristian-rojas-10041258-p-500.jpg 500w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/6647411ac3470fa0e2384454_pexels-cristian-rojas-10041258.jpg 640w"
              personName="Julia Bluebird"
              personPosition="CEO, Head of operations"
            />
            <TeamTile
              imgSrc="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66473f98c267be19ae2fa11f_pexels-edmond-dantes-4347368.jpg"
              srcSet="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66473f98c267be19ae2fa11f_pexels-edmond-dantes-4347368-p-500.jpg 500w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/66473f98c267be19ae2fa11f_pexels-edmond-dantes-4347368.jpg 640w"
              personName="Emma Lawson"
              personPosition="CTO, Data Scientist"
            />
            <TeamTile
              imgSrc="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/664f061bc44617dbd2a6081c_pexels-thisisengineering-3861954.jpg"
              srcSet=""
              personName="Ava Johnson"
              personPosition="Head of Design"
            />
            <TeamTile
              imgSrc="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/664f05aab6666d7098452cc4_pexels-tima-miroshnichenko-5717546.jpg"
              srcSet="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/664f05aab6666d7098452cc4_pexels-tima-miroshnichenko-5717546-p-500.jpg 500w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/664f05aab6666d7098452cc4_pexels-tima-miroshnichenko-5717546.jpg 640w"
              personName="Isabella Green"
              personPosition="Data Scientist"
            />
            <TeamTile
              imgSrc="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/664f05aa372b6bebb52056c7_pexels-karolina-grabowska-8528744.jpg"
              srcSet="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/664f05aa372b6bebb52056c7_pexels-karolina-grabowska-8528744-p-500.jpg 500w, https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/664f05aa372b6bebb52056c7_pexels-karolina-grabowska-8528744.jpg 640w"
              personName="Sophia Martinez"
              imageSizes="90vw"
              personPosition="Product Manager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeamGrid;

const TeamTile = ({
  imgSrc,
  srcSet,
  imageSizes,
  personName,
  personPosition,
}) => (
  <div className="flex items-center justify-center min-w-80 flex-1 flex-col flex-nowrap gap-3 max-[479px]:min-w-[auto]">
    <img
      src={imgSrc}
      srcSet={srcSet}
      loading="lazy"
      alt="Portrait of buisnesswoman"
      sizes={imageSizes ? imageSizes : "(max-width: 767px) 90vw, 44vw"}
      className="object-cover w-full max-w-full h-full rounded-3xl flex-initial block max-h-96"
    />
    <div className="text-center">
      <h3 className="font-semibold text-2xl leading-none">{personName}</h3>
      <h4 className="font-inter text-sm">{personPosition}</h4>
    </div>
  </div>
);
