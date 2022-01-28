import ReactModal from "react-modal";
import React from "react";

export const Modal = ({ isOpen, actions, title, message, content }) => (
  <div>
    <ReactModal
      isOpen={isOpen}
      contentLabel="New room created"
      className="max-w-2xl mx-auto bg-white rounded-lg shadow-md absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 max-w-[500px]"
      overlayClassName="absolute top-0 bottom-0 right-0 left-0 bg-gray-200 bg-gray-200/[.7]"
    >
      <div className="px-4">
        {title && <h2 className="text-2xl font-bold text-gray-700 mt-2">{title}</h2>}
        {message && <p className="mt-4 text-lg text-gray-500">{message}</p>}
      </div>

      {content}

      <div className="bg-gray-300 h-px mt-6" />

      <div className="flex justify-end">
        {actions}
      </div>
    </ReactModal>
  </div>
)
