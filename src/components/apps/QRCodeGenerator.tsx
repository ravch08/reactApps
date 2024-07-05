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
        <div className="container flex flex-col items-center">
          <form className="mb-24 flex items-center gap-4">
            <input
              autoFocus
              type="text"
              value={inputVal}
              className="border-none bg-slate-200 px-3 py-2 outline-none"
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button type="submit" className="btn-link" onClick={generateQRCode}>
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
