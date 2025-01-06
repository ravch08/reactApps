import { useState } from "react";
import QRCode from "react-qr-code";

import BackHome from "../features/BackToHome.tsx";

const QRCodeGenerator = () => {
  const [inputVal, setInputVal] = useState("");
  const [qrCode, setQRCode] = useState("");

  function generateQRCode(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    setQRCode(inputVal);
    setInputVal("");
  }

  return (
    <>
      <BackHome />
      <section aria-labelledby="QR Code Generator" className="mt-24">
        <div className="container mx-auto flex flex-col items-center">
          <form className="mx-auto mb-24 flex w-1/2 items-center justify-center gap-2">
            <input
              autoFocus
              type="text"
              value={inputVal}
              className="input-primary w-1/2"
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button
              type="submit"
              className="btn-submit"
              onClick={generateQRCode}
            >
              Generate QR Code
            </button>
          </form>

          <QRCode size={400} value={qrCode} />
        </div>
      </section>
    </>
  );
};

export default QRCodeGenerator;
