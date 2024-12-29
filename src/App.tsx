import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/Main";
import { useRef } from "react";
import { PrintButton } from "./components/PrintButton";

const App = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <PrintButton contentRef={contentRef} />
      <div ref={contentRef} className="min-h-screen bg-gray-100 p-1 lg:p-8">
        <div className="cv-container max-w-[297mm] mx-auto grid grid-cols-1 md:grid-cols-[400px_1fr] shadow-2xl rounded-sm overflow-hidden">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default App;
