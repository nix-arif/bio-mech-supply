import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600">
            <Link href="/">Bio Mech Supply</Link>
          </div>
          <div className="hidden md:flex space-x-8 font-medium">
            <Link
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#products"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Products
            </Link>
            <Link
              href="#services"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#customers"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Clients
            </Link>
            <Link
              href="#team"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Team
            </Link>
          </div>
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-blue-900 text-white rounded-full font-medium hover:bg-blue-800 transition-all shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
