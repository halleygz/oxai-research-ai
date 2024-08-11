import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Modal = ({
  className = "",
  signUpButtonContainerPadding,
  signUp,
  signUpDisplay,
  signUpMinWidth,
  btn,
}) => {
  const signUpButtonContainerStyle = useMemo(() => {
    return {
      padding: signUpButtonContainerPadding,
    };
  }, [signUpButtonContainerPadding]);

  const signUpStyle = useMemo(() => {
    return {
      display: signUpDisplay,
      minWidth: signUpMinWidth,
    };
  }, [signUpDisplay, signUpMinWidth]);

  return (
    <form
      className={`m-0 w-[42.75rem] rounded-9xl bg-gray-300 flex flex-col items-start justify-start pt-[2.25rem] px-[2.812rem] pb-[3.375rem] box-border gap-[1.625rem] max-w-full mq675:pt-[1.438rem] mq675:pb-[2.188rem] mq675:box-border mq750:pl-[1.375rem] mq750:pr-[1.375rem] mq750:box-border ${className}`}
    >
      <div className="w-[42.75rem] h-[35.875rem] relative rounded-9xl bg-gray-300 hidden max-w-full" />
      <div
        className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[0.125rem] pr-[0rem]"
        style={signUpButtonContainerStyle}
      >
        <h2
          className="m-0 relative text-[2.75rem] font-normal font-inter text-white text-left whitespace-nowrap z-[1] mq450:text-[1.625rem] mq750:text-[2.188rem]"
          style={signUpStyle}
        >
          {signUp}
        </h2>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.125rem]">
        <div className="relative text-[1.625rem] font-inter text-white text-left inline-block min-w-[4.125rem] z-[1] mq450:text-[1.313rem]">
          Email
        </div>
        <input
          className="border-gray-400 border-[3px] border-solid [outline:none] bg-[transparent] self-stretch h-[4.563rem] relative rounded-xl box-border min-w-[15.625rem] z-[1]"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1rem] gap-[1.125rem]">
        <div className="relative text-[1.625rem] font-inter text-white text-left inline-block min-w-[7.5rem] z-[1] mq450:text-[1.313rem]">
          password
        </div>
        <input
          className="border-gray-400 border-[3px] border-solid [outline:none] bg-[transparent] self-stretch h-[4.563rem] relative rounded-xl box-border min-w-[15.625rem] z-[1]"
          type="text"
        />
      </div>
      <Button
        className="self-stretch h-[5.688rem] z-[1] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border"
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "39",
          background: "#000",
          borderRadius: "76px",
          "&:hover": { background: "#000" },
          height: 91,
        }}
      >
        {btn}
      </Button>
    </form>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  signUp: PropTypes.string,
  btn: PropTypes.string,

  /** Style props */
  signUpButtonContainerPadding: PropTypes.any,
  signUpDisplay: PropTypes.any,
  signUpMinWidth: PropTypes.any,
};

export default Modal;
