import React, { useState } from "react";
import ReactDOM from "react-dom";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">React Modal with Portals</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <Box onClose={() => setIsModalOpen(false)}>
          <div className="p-6 bg-white rounded shadow-lg text-center max-w-sm">
            <h2 className="text-xl font-bold mb-4">This is a Modal</h2>
            <p className="mb-4">You can place any content here.</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close Modal
            </button>
          </div>
        </Box>
      )}
    </div>
  );
};

export default Modal;

function Box({ children, onClose }) {
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing on content click
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
