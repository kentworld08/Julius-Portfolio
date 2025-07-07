"use client";
import Image from "next/image";
import { ProjectDatas, ProjectDataProps } from "./Utilis/Datas";
import { FiMail } from "react-icons/fi";

import { useState } from "react";

const Projects = () => {
  const [projectDetail, setProjectDetail] = useState<ProjectDataProps | null>(
    null
  );
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = (id: number) => {
    const foundProject = ProjectDatas.find((data) => data.id === id);

    if (foundProject) {
      setProjectDetail(foundProject);
      setIsOverlayOpen(true);
    } else {
      console.warn(`Project with ID ${id} not found.`);
      setProjectDetail(null);
      setIsOverlayOpen(false);
    }
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
    setProjectDetail(null);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with ID '${sectionId}' not found.`);
    }
  };
  return (
    <section id="projects" className="relative">
      <div className="py-[38px] px-[9px] gap-[23px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {ProjectDatas.map((data) => (
          <div
            key={data.id}
            className="flex justify-center items-center"
            onClick={() => toggleOverlay(data.id)}
          >
            <Image
              src={data.imgUrl}
              width={435}
              height={432}
              alt={data.title}
            />
          </div>
        ))}
      </div>
      {isOverlayOpen && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex  bg-white text-black1F text-2xl z-100 flex-col w-full px-[9px]">
          <div className="flex items-end justify-end md:pr-10 pt-10">
            <button
              type="button"
              onClick={closeOverlay}
              className=" w-[34px] h-[34px] rounded-full border-[1px] text-[#323232] flex items-center justify-center bg-[#F7F7F7] border-[#EBEBEB]"
            >
              x
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-start md:w-[1024px] ">
              <div className="w-full items-start">
                <h1 className="text-black1F font-['Hanken_Grotesk'] font-medium text-[19.38px] leading-[29px] tracking-normal md:text-[40px] px-[16px]">
                  {projectDetail?.title}
                </h1>
              </div>
              <div className="w-full flex md:w-[449px] gap-[80px] justify-between items-center px-[16px] h-[74px]">
                <div
                  className="w-[192px] md:gap-[12px] flex justify-between md:w-[300px] items-center
                "
                >
                  <Image
                    src="/julius.png"
                    alt="julius image"
                    width={32}
                    height={32}
                    className="w-[32px] h-[32px] rounded-full"
                  />
                  <h2 className="flex font-['Hanken_Grotesk'] font-medium text-[11.06px] leading-[14px] tracking-normal text-black1F md:text-[16px]">
                    Julius Adebo&nbsp;{" "}
                    <span className="font-sans font-normal md:text-[12px] leading-[14px] tracking-normal text-[#4DAA57]">
                      Available for work
                    </span>
                  </h2>
                </div>
                <a
                  href="mailto:adebojulius84@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="md:hidden w-[32px] h-[32px] flex items-center justify-center bg-[#F7F7F7] border-[1px] border-[#EBEBEB] rounded-full"
                >
                  <FiMail className="w-[10.83px] h-[8.67px] text-black1F" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsOverlayOpen(false);
                    setTimeout(() => {
                      scrollToSection("contact");
                    }, 0);
                  }}
                  className="md:w-[108px] md:h-[40px] rounded-full py-[1px] md:flex justify-center items-center border-[1px] border-[#EBEBEB] bg-[#F7F7F7] font-normal font-['Hanken_Grotesk'] text-[12px] tracking-normal text-black1F hidden cursor-pointer"
                >
                  Get in touch
                </button>
              </div>
              <div className="w-full h-[350px] md:h-[550px] overflow-hidden overflow-y-auto">
                <Image
                  src={projectDetail?.imgUrl ?? "/Link - UXH1.png"}
                  alt={projectDetail?.title ?? "Project Image"}
                  width={600}
                  height={450}
                  className="w-full h-[292.5px] md:h-[768px]"
                />

                <div className="w-full flex justify-center">
                  <div className="w-[358px] md:w-[752px] max-w-[752px] py-[36px] flex flex-col gap-[16px]">
                    <h1 className="font-['Hanken_Grotesk'] text-[24px] font-bold md:text-[32px] leading-[38px] tracking-normal text-[#0D0C22]">
                      Quick Intro
                    </h1>
                    <p className="font-['Century_Gothic'] text-[16px] font-normal md:text-[20px] leading-[32px] tracking-normal">
                      {projectDetail?.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
