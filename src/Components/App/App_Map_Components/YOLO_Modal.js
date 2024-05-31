import React from 'react';
import Modal from 'react-modal';

const YOLO_Modal = ({ show, handleClose }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={handleClose}
      contentLabel="YOLO Detection Modal"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <button onClick={handleClose}>Close</button>
      <iframe
        src="/yolov5n_detection.html"
        style={{ width: '100%', height: '50vh', border: 'none' }}
        title="Building Detection"
      />
    </Modal>
  );
};

export default YOLO_Modal;
