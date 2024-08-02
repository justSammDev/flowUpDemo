const Separator = ({ width }) => {
  return (
    <div
      className={`${
        width ? `w-full lg:w-${width} m-auto` : "w-full"
      } bg-gray-300 h-[1px]`}
    ></div>
  );
};
export default Separator;
