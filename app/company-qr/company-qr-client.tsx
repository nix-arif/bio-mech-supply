"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

export default function StaticQR() {
  const [qrSrc, setQrSrc] = useState("");

  // Data statik yang anda mahu tanam (boleh jadi URL, ID Inventori, atau Teks)
  const dataSistem = "https://biomechsupply.com/qr";

  useEffect(() => {
    // Menjana QR dalam bentuk Data URL (Base64 Image) secara lokal
    QRCode.toDataURL(dataSistem, { width: 250, margin: 2 })
      .then((url) => setQrSrc(url))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-zinc-200 w-fit">
      {/* <h3 className="text-sm font-semibold text-zinc-700 mb-4">
        QR Kod Statik Asset
      </h3> */}
      {qrSrc ? (
        <img src={qrSrc} alt="Nixcrip Static QR" className="w-48 h-48" />
      ) : (
        <p className="text-xs text-zinc-400">Menjana QR...</p>
      )}
      {/* <p className="text-xs text-zinc-500 mt-2 font-mono">{dataSistem}</p> */}
    </div>
  );
}
