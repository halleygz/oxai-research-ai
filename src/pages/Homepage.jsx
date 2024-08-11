import Navbar from "../components/Navbar";
import ProjectCards from "../components/ProjectCards";

const Homepage = () => {
  return (
    <div className="w-full relative bg-gray-400 overflow-hidden flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[3.937rem] box-border gap-[2.625rem] leading-[normal] tracking-[normal] mq750:gap-[1.313rem]">
      <Navbar />
      <footer className="flex flex-row items-start justify-end py-[0rem] px-[2.062rem] box-border max-w-full">
        <section className="flex flex-row items-end justify-start gap-[3.312rem] max-w-full text-left text-[3.688rem] text-white font-dm-sans lg:flex-wrap mq750:gap-[1.625rem]">
          <div className="w-[16.25rem] flex flex-col items-start justify-start gap-[1.375rem]">
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.437rem] pr-[0.812rem]">
              <h1 className="m-0 flex-1 relative text-inherit font-normal font-[inherit] mq450:text-[2.188rem] mq750:text-[2.938rem]">
                Projects
              </h1>
            </div>
            <ProjectCards />
          </div>
          <div className="w-[35.813rem] flex flex-col items-end justify-start gap-[6.187rem] max-w-full mq450:gap-[1.563rem] mq750:gap-[3.063rem]">
            <div className="w-[32.5rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
              <textarea
                className="border-gray-100 border-[1px] border-solid bg-[transparent] h-[15.375rem] w-[16.25rem] [outline:none] rounded-9xl box-border flex flex-col items-start justify-start py-[3.625rem] px-[2.437rem] font-dm-sans text-[2.063rem] text-white z-[1]"
                placeholder="New Project"
                rows={12}
                cols={13}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[3.312rem] mq750:flex-wrap mq750:gap-[1.625rem]">
              <ProjectCards
                propAlignSelf="unset"
                propFlex="1"
                propMinWidth="12.188rem"
                propWidth="unset"
              />
              <ProjectCards
                propAlignSelf="unset"
                propFlex="1"
                propMinWidth="12.188rem"
                propWidth="unset"
              />
            </div>
          </div>
          <ProjectCards
            propAlignSelf="unset"
            propFlex="unset"
            propMinWidth="unset"
            propWidth="16.25rem"
          />
        </section>
      </footer>
    </div>
  );
};

export default Homepage;
