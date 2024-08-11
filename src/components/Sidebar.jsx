import Checkboxes from "./Checkboxes";
import PropTypes from "prop-types";

const Sidebar = ({ className = "" }) => {
  return (
    <div
      className={`w-[21.875rem] bg-gray-300 flex flex-col items-start justify-start pt-[2.375rem] pb-[24.875rem] pl-[1.937rem] pr-[1.812rem] box-border gap-[1.562rem] min-w-[21.875rem] max-w-full text-left text-[2rem] text-white font-inter mq450:min-w-full mq700:pt-[1.563rem] mq700:pb-[16.188rem] mq700:box-border mq975:flex-1 ${className}`}
    >
      <div className="w-[21.875rem] h-[42.875rem] relative bg-gray-300 hidden max-w-full" />
      <a className="[text-decoration:none] w-[9.375rem] relative text-[inherit] flex items-center z-[1] mq450:text-[1.188rem] mq975:text-[1.625rem]">
        Sources
      </a>
      <div className="self-stretch flex flex-row items-start justify-start gap-[0.625rem] text-[1.375rem]">
        <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
          <div className="flex flex-col items-start justify-start gap-[1.937rem]">
            <img
              className="w-[2.375rem] h-[2.375rem] relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/file-text.svg"
            />
            <img
              className="w-[2.375rem] h-[2.375rem] relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/file-text.svg"
            />
            <img
              className="w-[2.375rem] h-[2.375rem] relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/file-text.svg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-row items-end justify-between gap-[1.25rem]">
          <div className="w-[9.375rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.812rem] box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[3.187rem]">
              <div className="self-stretch relative leading-[1.125rem] z-[1] mq450:text-[1.125rem] mq450:leading-[0.875rem]">
                Sources one
              </div>
              <div className="self-stretch relative leading-[1.125rem] z-[1] mq450:text-[1.125rem] mq450:leading-[0.875rem]">
                Sources two
              </div>
              <div className="relative leading-[1.125rem] z-[1] mq450:text-[1.125rem] mq450:leading-[0.875rem]">
                Sources three
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[1.312rem]">
            <Checkboxes />
            <Checkboxes />
            <Checkboxes />
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
