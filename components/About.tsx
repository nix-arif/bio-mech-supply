export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">
            About Company [cite: 5, 6]
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Who We Are</h3>
            <p className="text-gray-700 mb-4">
              Established in November 2024 and headquartered in Selangor, Bio
              Mech Supply Sdn Bhd is a dedicated provider in the healthcare and
              life sciences sector. [cite: 7]
            </p>
            <p className="text-gray-700">
              We specialize in the international import and export of
              pharmaceutical products, medicinal chemicals, and botanical
              solutions. [cite: 8] Additionally, we serve as a key distributor
              of medical diagnostic preparations and a versatile wholesaler of
              essential goods. [cite: 9]
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-900">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                Our Mission [cite: 12]
              </h3>
              <p className="text-gray-700">
                To improve patient outcomes and enhance the quality of life by
                providing healthcare professionals with seamless access to
                high-quality medical products and pharmaceutical supplies.
                [cite: 13] We are dedicated to bridging global medical
                innovations with local clinical needs through an agile,
                transparent, and integrity-driven supply chain. [cite: 14]
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold mb-2 text-orange-600">
                Our Vision [cite: 16]
              </h3>
              <p className="text-gray-700">
                To be Malaysia's premier trusted partner in the medical sector,
                recognized for our commitment to advancing healthcare standards
                and our ability to provide reliable, customized diagnostic and
                pharmaceutical solutions for a healthier future. [cite: 17]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
