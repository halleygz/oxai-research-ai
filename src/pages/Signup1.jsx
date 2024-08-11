import Modal from "../components/Modal";

const Signup1 = () => {
  return (
    <div className="w-full relative bg-gray-400 overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.75rem] box-border gap-[4.875rem] leading-[normal] tracking-[normal] mq450:gap-[1.188rem] mq675:gap-[2.438rem]">
      <header className="self-stretch shadow-[0px_1px_6px_10px_rgba(0,_0,_0,_0.25)] bg-gray-200 flex flex-row items-start justify-start pt-[1.187rem] px-[1.187rem] pb-[1.25rem] box-border top-[0] z-[99] sticky max-w-full text-left text-[1.625rem] text-white font-inter">
        <div className="h-[3.938rem] w-[80rem] relative shadow-[0px_1px_6px_10px_rgba(0,_0,_0,_0.25)] bg-gray-200 hidden max-w-full" />
        <a className="[text-decoration:none] relative leading-[1.5rem] text-[inherit] inline-block min-w-[4.5rem] z-[1]">
          acme
        </a>
      </header>
      <main className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
        <Modal signUp="Sign Up" btn="Sign Up" />
      </main>
    </div>
  );
};

export default Signup1;
