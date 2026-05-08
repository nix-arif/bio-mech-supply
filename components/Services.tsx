export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">
            Our Service [cite: 39]
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to our clients extends far beyond the initial point
            of sale through a suite of specialized technical services designed
            to ensure the longevity and performance of every instrument. [cite:
            41]
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-50 rounded-lg text-center shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-blue-800">
              After-Sales Support
            </h3>
            <p className="text-gray-700">
              Expert instrument repair, precision realignment, and careful
              reshaping to maintain original specifications. [cite: 42]
            </p>
          </div>
          <div className="p-6 bg-slate-50 rounded-lg text-center shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-blue-800">
              Inventory Solutions
            </h3>
            <p className="text-gray-700">
              Custom-made laser marking services, allowing for permanent and
              clear identification on all medical equipment. [cite: 43]
            </p>
          </div>
          <div className="p-6 bg-slate-50 rounded-lg text-center shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-blue-800">
              Quality Assurance
            </h3>
            <p className="text-gray-700">
              Every product is backed by a comprehensive warranty against
              manufacturing defects. [cite: 44]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
