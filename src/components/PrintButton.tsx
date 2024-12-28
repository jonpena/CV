import React from "react";
import { useReactToPrint } from "react-to-print";

type PrintButtonProps = {
  contentRef: React.RefObject<HTMLDivElement>;
};

export const PrintButton = ({ contentRef }: PrintButtonProps) => {
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <button
      onClick={() => reactToPrintFn()}
      className="fixed top-3 right-3 bg-[#0082E6] hover:bg-[#0082E6]/80 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-200 flex items-center gap-2"
    >
      Download PDF
      <img width={20} height={20} src="/pdf.svg" alt="Download CV" />
    </button>
  );
};
