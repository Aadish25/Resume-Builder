"use client";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import resumePic from "../../assets/resumeDownload.svg"
import Drawer from "../Drawer/Drawer";

export function DownloadCard({downloadFunc}) {
  return (
    <>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={resumePic}
            className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Download Resume
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Click download button to download the ATS friendly Resume!!
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            onClick={downloadFunc}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-full font-bold"
          >
            Download
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-full font-bold"
          >
            Preview
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <Drawer/>
    </>
  );
}
