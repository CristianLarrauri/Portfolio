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

  const changePageBack = () => {
    changePage(-1);
  };

  const changePageNext = () => {
    changePage(+1);
  };

  return (
    <div>
      <header>
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </header>
      <section>
        {pageNumber > 1 && <button onClick={changePageBack}>Anterior</button>}
        <p>
          Page {pageNumber} of {numPages}
        </p>
        {pageNumber < numPages && (
          <button onClick={changePageNext}>Siguiente</button>
        )}
      </section>
    </div>
  );
};

export default PDFPreview;
