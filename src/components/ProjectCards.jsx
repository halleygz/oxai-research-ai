import { useMemo } from "react";
import PropTypes from "prop-types";

const ProjectCards = ({
  className = "",
  propAlignSelf,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const projectCardsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth, propWidth]);

  return (
    <div
      className={`self-stretch rounded-9xl bg-gray-300 flex flex-col items-end justify-start pt-[1.937rem] pb-[1.25rem] pl-[1.25rem] pr-[1.625rem] gap-[4.687rem] text-left text-[2.125rem] text-white font-dm-sans mq450:gap-[2.313rem] ${className}`}
      style={projectCardsStyle}
    >
      <div className="w-[16.25rem] h-[15.375rem] relative rounded-9xl bg-gray-300 hidden" />
      <div className="w-[0.313rem] h-[1.063rem] relative">
        <div className="absolute top-[0rem] left-[0rem] rounded-31xl bg-gainsboro w-[0.313rem] h-[0.313rem] z-[1]" />
        <div className="absolute top-[0.375rem] left-[0rem] rounded-31xl bg-gainsboro w-[0.313rem] h-[0.313rem] z-[1]" />
        <div className="absolute top-[0.75rem] left-[0rem] rounded-31xl bg-gainsboro w-[0.313rem] h-[0.313rem] z-[1]" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="w-[10.125rem] flex flex-col items-start justify-start gap-[1.375rem]">
          <h3 className="m-0 self-stretch h-[3.5rem] relative text-inherit font-normal font-[inherit] flex items-center shrink-0 z-[1] mq450:text-[1.25rem] mq750:text-[1.688rem]">
            Projects name
          </h3>
          <div className="self-stretch relative text-[1.375rem] leading-[1.563rem] z-[1] mq450:text-[1.125rem] mq450:leading-[1.25rem]">
            Jul 1, 2023
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCards.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default ProjectCards;
