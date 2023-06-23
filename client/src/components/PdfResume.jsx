import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfUrl from "../assets/Resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const PDFPreview = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = (offSet) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  };

  const handlePrev = () => {
    changePage(-1);
  };

  const handleNext = () => {
    changePage(+1);
  };

  return (
    <div className="h-full w-full lg:w-1/2 p-10 flex flex-col items-center text-center bg-negro-0 shadow-lg shadow-celesteOscuro-0 rounded-2xl">
      <section className="h-full w-full flex flex-col justify-center items-center text-center">
        <p className="h-full w-full flex justify-center items-center text-center px-5 text-gray-400">
          {pageNumber} de {numPages}
        </p>
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className="h-full w-full flex justify-center items-center text-center"
        >
          <Page
            pageNumber={pageNumber}
            className="h-full w-full flex flex-col justify-center items-center text-center"
          />
        </Document>
      </section>
      <section className="h-full w-full flex justify-center items-center text-center">
        <button onClick={handlePrev} disabled={pageNumber === 1}>
          <AiFillCaretLeft className="h-5 w-5 mx-5 flex justify-center items-center text-center text-gray-400 hover:scale-105 transform transition-transform hover:text-azulClaro-0 hover:font-bold" />
        </button>
        <button onClick={handleNext} disabled={pageNumber === numPages}>
          <AiFillCaretRight className="h-5 w-5 mx-5 flex justify-center items-center text-center text-gray-400 hover:scale-105 transform transition-transform hover:text-azulClaro-0 hover:font-bold" />
        </button>
      </section>
    </div>
  );
};

export default PDFPreview;
