  "use client";

  import React from 'react';

  const DownloadButton = ({ fileName, fileUrl }) => {
      const handleDownload = () => {
          fetch(fileUrl)
              .then(response => response.blob())
              .then(blob => {
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.style.display = 'none';
                  a.href = url;
                  a.download = fileName;
                  document.body.appendChild(a);
                  a.click();
                  window.URL.revokeObjectURL(url);
              })
              .catch(err => console.error('Download failed', err));
      };

      return (
          <button className="btn btn-primary btn-sm" onClick={handleDownload}>
              <span className="fas fa-print"></span> Download Brochure
          </button>
      );
  };

  export default DownloadButton;
