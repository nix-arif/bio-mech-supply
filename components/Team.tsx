export default function Team() {
  const teamMembers = [
    { name: "Siti Nor Hidayah binti Mahasan", role: "Board of Directors" }, // [cite: 21]
    { name: "Ezatul Farita binti Rosli", role: "Board of Directors" }, // [cite: 22, 23]
    { name: "Nik Arief Fikry bin Shamsuddin", role: "Managing Director" }, // [cite: 25]
    { name: "Nik Nur Izzati binti Shamsudin", role: "Manager" }, // [cite: 24]
    { name: "Nur Elma Ezati binti Mohd Razali", role: "Product Manager" }, // [cite: 26]
    { name: "Sabrina binti Ambok Malek", role: "Regulatory Affairs" }, // [cite: 27]
    { name: "Muhammad Syafiq bin Daud", role: "Sales Engineer" }, // [cite: 28]
    { name: "Muhammad Danish Affan bin Anua", role: "Jr. Service Engineer" }, // [cite: 29]
  ];

  return (
    <section id="team" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">
            Organisation Chart [cite: 19, 20]
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition"
            >
              <h3 className="font-bold text-gray-900">{member.name}</h3>
              <p className="text-sm text-blue-600 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
