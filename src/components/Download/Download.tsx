import generatePDF, { Resolution, Margin, Options } from "react-to-pdf";
import React from "react";
import Template1 from "../Temp_All/Template_1";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";

const options: Options = {
  filename: "resume.pdf",
  method: "save",
  // default is Resolution.MEDIUM = 3, which should be enough, higher values
  // increases the image quality but also the size of the PDF, so be careful
  // using values higher than 10 when having multiple pages generated, it
  // might cause the page to crash or hang.
  resolution: Resolution.MEDIUM,
  page: {
    // margin is in MM, default is Margin.NONE = 0
    margin: Margin.SMALL,
    // default is 'A4'
    orientation: "portrait",
    format: "A4",
  },
  canvas: {
    // default is 'image/jpeg' for better size performance
    mimeType: "image/jpeg",
    qualityRatio: 1,
  },
  // Customize any value passed to the jsPDF instance and html2canvas
  // function. You probably will not need this and things can break,
  // so use with caution.
  overrides: {
    // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
    pdf: {
      compress: true,
    },
    // see https://html2canvas.hertzen.com/configuration for more options
    canvas: {
      useCORS: true,
    },
  },
};

// you can also use a function to return the target element besides using React refs
const getTargetElement = () => document.getElementById("container");

const downloadPdf = () => generatePDF(getTargetElement, options);

const Download = () => {
  const idx = useSelector((state) => state.temp_index.index);
  const TemplatesArr = [Template1];
  const Templates = TemplatesArr.map((Item, index) => {
    return (
      <div key={index}>
        <Item />
      </div>
    );
  });
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-between w-full px-4">
        <div className="mt-20 ">
          <button
            onClick={downloadPdf}
            className="btn btn-secondary btn-outline"
          >
            Download PDF
          </button>
        </div>
        <div className="mt-20">
          <div id="container" className="w-[21cm]">
            {Templates[idx]}
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
