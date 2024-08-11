import PropTypes from "prop-types";

const Checkboxes = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start p-[0.25rem] z-[1] ${className}`}
    >
      <div className="h-[2.5rem] w-[2.5rem] rounded-81xl flex flex-row items-center justify-center p-[0.687rem] box-border relative">
        <div className="h-[1.125rem] w-[1.125rem] relative rounded-sm bg-schemes-primary" />
        <img
          className="h-[1.5rem] w-[1.5rem] absolute !m-[0] top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] z-[1]"
          alt=""
          src="/check-small.svg"
        />
      </div>
    </div>
  );
};

Checkboxes.propTypes = {
  className: PropTypes.string,
};

export default Checkboxes;
