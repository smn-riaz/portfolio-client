const PdfViewer = () => {
    return (
      <div className="w-full h-screen">
        <iframe
          src="/resume.pdf"
          className="w-full h-full"
          title="PDF Viewer"
        />
      </div>
    );
  };
  
  export default PdfViewer;
  