"use client";

import { useState } from "react";
import { Document, Page as PDFPage, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Page() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className={"w-full m-auto flex flex-col items-center justify-center"}>
      <Document
        file={"assets/latest_works.pdf"}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from({ length: numPages || 0 }, (_, i) => i + 1).map((page) => (
          <PDFPage key={page} pageNumber={page} />
        ))}
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
