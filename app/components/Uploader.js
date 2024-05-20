const FileUploader = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="w-full h-48 p-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
      <div className="flex flex-col items-center justify-center h-full space-y-2">
        <UploadIcon className="w-8 h-8 text-gray-400" />
        <input
          className="opacity-0 absolute"
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
        />
        <p className="text-gray-500 dark:text-gray-400">
          Upload file here
        </p>
      </div>
    </div>
  );
};

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

export default FileUploader;
