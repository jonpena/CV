import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/Main";
import { useRef } from "react";
import { PrintButton } from "./components/PrintButton";

const App = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <PrintButton contentRef={contentRef} />
      <div ref={contentRef} className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] shadow-2xl">
            <Sidebar />
            <MainContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
