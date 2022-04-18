import React from 'react';
import qrCode from './assets/image-qr-code.png';
const QRCodeComponent = () => {
  return (
    <div className="qr-code-component">
      <img src={qrCode} alt="frontend mentor qr code site" />
      <h1>Improve your front-end skills by building projects</h1>
      <p>
        Scan the QR code to visit Fronend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default QRCodeComponent;
