import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-bold text-xl text-blue-900">
            <Link href="/">Bio Mech Supply [cite: 2]</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-blue-600">
              About Us
            </Link>
            <Link
              href="#products"
              className="text-gray-700 hover:text-blue-600"
            >
              Products
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              href="#customers"
              className="text-gray-700 hover:text-blue-600"
            >
              Our Clients
            </Link>
            <Link href="#team" className="text-gray-700 hover:text-blue-600">
              Team
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
