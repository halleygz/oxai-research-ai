import Navbar1 from "../components/Navbar1";
import Sidebar from "../components/Sidebar";

const Chatpage = () => {
  return (
    <div className="w-full relative bg-gray-400 overflow-hidden flex flex-col items-start justify-start gap-[0.625rem] leading-[normal] tracking-[normal]">
      <Navbar1 />
      <main className="w-[76.688rem] flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] box-border gap-[5.25rem] max-w-full mq450:gap-[1.313rem] mq700:gap-[2.625rem] mq975:flex-wrap">
        <Sidebar />
        <section className="flex-1 flex flex-col items-start justify-start pt-[10.562rem] px-[0rem] pb-[0rem] box-border min-w-[31.375rem] max-w-full text-left text-[1.063rem] text-white font-inter mq700:pt-[6.875rem] mq700:box-border mq700:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[6.812rem] max-w-full mq450:gap-[1.688rem] mq975:gap-[3.375rem]">
            <div className="w-[30.375rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
              <div className="w-[16.625rem] rounded-9xl bg-gray-300 flex flex-col items-start justify-start pt-[1.937rem] px-[1.812rem] pb-[2.625rem] box-border relative gap-[2.5rem] mq450:gap-[1.25rem]">
                <div className="w-[16.625rem] h-[17.25rem] relative rounded-9xl bg-gray-300 hidden z-[0]" />
                <a className="[text-decoration:none] w-[10.063rem] relative text-[inherit] flex items-center z-[1]">{`Upload papers `}</a>
                <div className="w-[12.25rem] flex flex-row items-start justify-start py-[0rem] px-[0.687rem] box-border text-[0.938rem]">
                  <div className="flex-1 flex flex-row items-end justify-start gap-[1.168rem]">
                    <div className="flex flex-col items-end justify-start gap-[1.562rem]">
                      <div className="w-[1.831rem] flex flex-row items-start justify-end py-[0rem] pl-[0.25rem] pr-[0.125rem] box-border">
                        <img
                          className="h-[1.813rem] w-[1.419rem] relative z-[1]"
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <img
                        className="w-[1.831rem] h-[1.938rem] relative z-[1]"
                        loading="lazy"
                        alt=""
                        src="/language.svg"
                      />
                      <div className="flex flex-row items-start justify-end py-[0rem] pl-[0.125rem] pr-[0.062rem]">
                        <img
                          className="h-[1.813rem] w-[1.625rem] relative overflow-hidden shrink-0 z-[1]"
                          loading="lazy"
                          alt=""
                          src="/clipboard.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[2rem]">
                      <div className="w-[4.319rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border">
                        <div className="h-[1.5rem] flex-1 relative flex items-center shrink-0 z-[1]">
                          PDF
                        </div>
                      </div>
                      <div className="self-stretch h-[1.5rem] relative flex items-center shrink-0 z-[1]">
                        web page url
                      </div>
                      <div className="w-[5.656rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border">
                        <div className="h-[1.5rem] flex-1 relative flex items-center z-[1]">{`Paste `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="w-[3.356rem] h-[3.356rem] absolute !m-[0] top-[1rem] right-[1.394rem] overflow-hidden shrink-0 object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/plus@2x.png"
                />
              </div>
            </div>
            <footer className="self-stretch rounded-54xl bg-darkslategray flex flex-row items-start justify-between py-[1rem] pl-[2.437rem] pr-[1.062rem] box-border max-w-full gap-[1.25rem] text-left text-[1.625rem] text-white font-inter mq450:flex-wrap mq450:justify-center">
              <div className="h-[5.625rem] w-[48.313rem] relative rounded-54xl bg-darkslategray hidden max-w-full" />
              <div className="w-[13.25rem] flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border">
                <div className="self-stretch relative z-[1] mq450:text-[1.313rem]">
                  Start typing...
                </div>
              </div>
              <div className="h-[3.625rem] w-[3.625rem] rounded-31xl bg-gainsboro flex flex-row items-start justify-start p-[0.312rem] box-border z-[1]">
                <div className="h-[3.625rem] w-[3.625rem] relative rounded-31xl bg-gainsboro hidden" />
                <img
                  className="h-[3rem] w-[3rem] relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/arrow-right.svg"
                />
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Chatpage;
