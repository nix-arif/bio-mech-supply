export default function Products() {
  const instruments = [
    "General Surgery",
    "Orthopedic",
    "Cardiothoracic and Vascular",
    "Obstetrics and Gynecology",
    "High-quality ENT",
    "Microsurgical instruments",
    "Specialized Container Systems",
  ]; // [cite: 35, 36]

  return (
    <section id="products" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">
            Our Product [cite: 31]
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We have strategically positioned ourselves as a premier provider
            within the Malaysian healthcare landscape by focusing on
            high-precision medical instruments and comprehensive support
            systems. [cite: 32]
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            Authorized Supplier: Best Medical [cite: 33]
          </h3>
          <p className="text-gray-700 mb-4">
            We are honored to serve as an authorized supplier for Best Medical
            from Germany, a renowned manufacturer recognized globally for their
            superior surgical instruments and advanced container systems. [cite:
            33] This partnership allows us to deliver German-engineered
            excellence directly to local surgical theaters, ensuring that
            healthcare professionals have access to the most reliable tools
            available. [cite: 34]
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-4">
              Specialized Portfolio Includes: [cite: 35]
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {instruments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-4">
              General Medical Supplies
            </h4>
            <p className="text-gray-700">
              Beyond these specialized surgical tools, we maintain a robust
              supply chain for various other medical goods and essential
              consumables, providing a comprehensive procurement solution.
              [cite: 37]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
