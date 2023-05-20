import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfUrl from "../assets/Resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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
    <div className="border border-lilaClaro-0 rounded-2xl p-10 flex flex-col items-center">
      <section>
        <p className="flex px-5 text-gray-400 justify-end">
          {pageNumber} de {numPages}
        </p>
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </section>
      <section className="flex">
        <button
          className="mx-5 text-gray-400 hover:scale-105 hover:text-lilaClaro-0 hover:font-bold"
          onClick={handlePrev}
          disabled={pageNumber === 1}
        >
          {"<"}
        </button>
        <button
          className="mx-5 text-gray-400 hover:scale-105 hover:text-lilaClaro-0 hover:font-bold"
          onClick={handleNext}
          disabled={pageNumber === numPages}
        >
          {">"}
        </button>
      </section>
    </div>
  );
};

export default PDFPreview;
