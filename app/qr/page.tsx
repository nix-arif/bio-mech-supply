import Image from "next/image";

export default function QRPage() {
  return (
    <div className="flex items-center justify-between h-screen mx-auto p-10">
      <div>
        <div className="flex items-center justify-around">
          <Image
            src="/logo.png"
            width={180}
            height={180}
            alt="Best Medical Malaysia Logo"
          />
          <Image
            src="/bestLogo.png"
            width={350}
            height={350}
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
