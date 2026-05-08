export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Bio Mech Supply Sdn. Bhd. [cite: 55, 56]
          </h2>
          <p className="mb-2">CO.NO. 1595692-K [cite: 57]</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Get In Touch [cite: 58, 59]
          </h3>
          <ul className="space-y-2">
            <li>
              <strong>Email:</strong> sales@biomechsupply.com [cite: 62]
            </li>
            <li>
              <strong>Address:</strong>
              <br />
              5-1, Jalan Ungu BU9/B,
              <br />
              Sunway Kayangan,
              <br />
              40150 Shah Alam,
              <br />
              Selangor. [cite: 63, 64]
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-slate-700 text-sm text-center">
        &copy; {new Date().getFullYear()} Bio Mech Supply Sdn. Bhd. All rights
        reserved.
      </div>
    </footer>
  );
}
