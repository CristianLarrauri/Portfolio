import React from "react";
import pdfUrl from "../assets/Resume.pdf";
import { MdDownloadForOffline } from "react-icons/md";

export default function PdfResumeDownload() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "archivo.pdf";
    link.click();
  };

  return (
    <div className="h-12 w-12 bottom-10 right-12 z-10 fixed flex items-center justify-center text-center text-white rounded-full hover:scale-105 transition duration-300 animate-bounce">
      <button onClick={handleDownload} className="h-full w-full">
        <MdDownloadForOffline className="h-full w-full flex justify-center items-center text-center text-gray-400 hover:scale-105 transform transition-transform hover:text-azulClaro-0 hover:font-bold " />
      </button>
    </div>
  );
}
