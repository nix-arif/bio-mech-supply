import Image from "next/image";

export default function QRPage() {
  return (
    <div className="flex items-center justify-between h-screen mx-auto p-10 overflow-hidden">
      <div>
        <div className="flex items-center justify-around overflow-hidden">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="Best Medical Malaysia Logo"
          />
          <Image
            src="/bestLogo.png"
            width={250}
            height={250}
            alt="Best Medical Malaysia Logo"
          />
        </div>
        <h1>Bio Mech Supply Sdn Bhd</h1>
        <h1>Best Medical Malaysia</h1>
        <p>
          No. 5-1, Jalan Ungu B U9/B, Seksyen U9, Sunway Kayangan, 40150 Shah
          Alam, Selangor, Malaysia
        </p>
        <p>MDA Registration No: MDA-10102-K126</p>
      </div>
    </div>
  );
}
