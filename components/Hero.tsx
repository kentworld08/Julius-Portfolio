import Image from "next/image";
import Link from "next/link";
import { FaArrowDownLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div className="relative z-10 flex justify-center items-center flex-col text-center gap-6 pt-[127.5px] h-full px-4">
        <h3 className="font-['Century_Gothic'] font-normal text-[19px] leading-[30px] tracking-normal text-[#232323] md:flex md:w-full md:text-center md:justify-center md:items-center text-left">
          PRODUCT DESIGNER&nbsp;<span className="hidden md:block">/</span>
          <br className="md:hidden" />
          &nbsp;PRODUCT MANAGER
        </h3>
        <div className="h-[124px] flex justify-center items-center">
          <h1 className="font-['Hanken_Grotesk'] font-medium text-[54px] tracking-normal align-middle leading-[52px] md:text-[100px] xl:text-[171px] text-[#232323] md:mt-[34px] ">
            Adebo Julius
          </h1>
        </div>
        <div className="w-[86px] h-[87px] flex flex-col gap-[3px] justify-center items-center mt-[102px] md:mt-[118px] md:mb-[287.59px]">
          <Link href="#projects">
            <button
              type="button"
              className="bg-[#F7F7F7] w-[54px] h-[54px] border-[1px] border-[#F7F7F7] rounded-full flex justify-center items-center cursor-pointer"
            >
              <FaArrowDownLong className="text-black" />{" "}
            </button>
          </Link>
          <p className="font-['Century_Gothic'] font-normal text-[12px] tracking-normal leading-[30px]">
            View my works
          </p>
        </div>

        <div className="fixed w-full bottom-0 z-30">
          <div className="relative z-10 w-full backdrop-blur-xl bg-[linear-gradient(to_bottom,#FFFFFF00_0%,#FFFFFF99_60%)] border border-white/20 shadow-lg shadow-black/30 flex flex-col items-center justify-center h-[147.59px] px-[12px] pb-[40px]">
            <div className="w-full max-w-[360px] rounded-[28px] border-[1px] p-[20px] gap-[10px] border-[#F5F5F5CC] bg-[#F5F5F5CC] flex justify-between z-100 h-[107.59px]">
              <Link
                href="#home"
                className="flex flex-col items-center justify-center p-2"
              >
                <Image
                  src="/imgIcons/vector3.png"
                  width={19.5}
                  height={21.5}
                  alt="Home icon"
                  className="text-black"
                />
                <h1 className="text-[#1F1F1F] text-[12.9px] font-medium leading-[15.6px] tracking-normal">
                  Home
                </h1>
              </Link>
              <Link
                href="https://www.linkedin.com/in/julius-adebo-bba44b164"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-col items-center justify-center p-2"
              >
                <Image
                  src="/imgIcons/vector4.png"
                  width={19.5}
                  height={21.5}
                  alt="LinkedIn icon"
                  className="text-black"
                />
                <h1 className="text-[#1F1F1F] text-[12.9px] font-medium leading-[15.6px] tracking-normal">
                  LinkedIn
                </h1>
              </Link>
              <Link
                href="#contact"
                className="flex flex-col items-center justify-center p-2"
              >
                <Image
                  src="/imgIcons/vector2.png"
                  width={19.5}
                  height={21.5}
                  alt="Contact icon"
                  className="text-black"
                />

                <h1 className="text-[#1F1F1F] text-[12.9px] font-medium leading-[15.6px] tracking-normal">
                  Contact Me
                </h1>
              </Link>
              <Link
                href="https://drive.google.com/file/d/1TNuXmTMS8RhR76svnXKtSl_DD28WTbS5/view?usp=drive_link"
                rel="noreferrer noopener"
                target="_blank"
                className="flex flex-col items-center justify-center p-2"
              >
                <Image
                  src="/imgIcons/vector.png"
                  width={19.5}
                  height={21.5}
                  alt="Resume icon"
                  className="text-black"
                />
                <h1 className="text-[#1F1F1F] text-[12.9px] font-medium leading-[15.6px] tracking-normal">
                  Resume
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
