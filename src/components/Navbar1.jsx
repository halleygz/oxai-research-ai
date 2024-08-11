import PropTypes from "prop-types";

const Navbar1 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch shadow-[0px_1px_6px_10px_rgba(0,_0,_0,_0.25)] bg-gray-200 flex flex-row items-start justify-between pt-[0.75rem] pb-[0.812rem] pl-[1.187rem] pr-[0.937rem] box-border top-[0] z-[99] sticky max-w-full gap-[1.25rem] text-left text-[1.625rem] text-white font-inter ${className}`}
    >
      <div className="h-[3.938rem] w-[80rem] relative shadow-[0px_1px_6px_10px_rgba(0,_0,_0,_0.25)] bg-gray-200 hidden max-w-full" />
      <div className="w-[14.5rem] flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] box-border">
        <div className="self-stretch h-[1.5rem] relative">
          <a className="[text-decoration:none] absolute top-[0rem] left-[0rem] leading-[1.5rem] text-[inherit] flex items-center w-[4.5rem] h-[1.5rem] min-w-[4.5rem] z-[1]">
            acme
          </a>
          <a className="[text-decoration:none] absolute top-[0rem] left-[7.813rem] leading-[1.5rem] text-[inherit] flex items-center w-[6.688rem] h-[1.5rem] min-w-[6.688rem] z-[1]">
            projects
          </a>
        </div>
      </div>
      <div className="rounded-31xl bg-gainsboro flex flex-row items-start justify-start pt-[0.812rem] pb-[0.75rem] pl-[0.687rem] pr-[0.625rem] z-[1] text-black">
        <div className="h-[2.375rem] w-[2.375rem] relative rounded-31xl bg-gainsboro hidden" />
        <a className="[text-decoration:none] h-[0.813rem] relative text-[inherit] flex items-center min-w-[1.063rem] z-[1]">
          S
        </a>
      </div>
    </header>
  );
};

Navbar1.propTypes = {
  className: PropTypes.string,
};

export default Navbar1;
