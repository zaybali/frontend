import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      {/* Navigation Section */}
      <header className="bg-teal-600 text-white py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold">Saylani Microfinance</h1>
          <nav className="space-x-6">
            <Link href="/" className="hover:text-orange-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-orange-300">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-orange-300">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-orange-400 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold leading-snug mb-6">
            Empowering Lives with Interest-Free Loans
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Whether it's for your wedding, home, business, or education, we’re
            here to help you achieve your dreams.
          </p>
          <Link
            href="/sign-up"
            className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Loan Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-teal-700">
            Loan Categories
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Wedding Loans */}
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <Link href="/wedding-Loans">
                <h3 className="text-2xl font-bold mb-2 text-teal-600">
                  Wedding Loans
                </h3>
              </Link>
              <p className="text-gray-500">Max Loan: PKR 5 Lakh</p>
              <p className="text-gray-500">Loan Period: 3 Years</p>
            </div>
            {/* Home Construction Loans */}
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <Link href="/home-cons-loan">
                <h3 className="text-2xl font-bold mb-2 text-teal-600">
                  Home Construction Loans
                </h3>
              </Link>
              <p className="text-gray-500">Max Loan: PKR 10 Lakh</p>
              <p className="text-gray-500">Loan Period: 5 Years</p>
            </div>
            {/* Business Startup Loans */}
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <Link href="/bussiness-loan">
                <h3 className="text-2xl font-bold mb-2 text-teal-600">
                  Business Startup Loans
                </h3>
              </Link>
              <p className="text-gray-500">Max Loan: PKR 10 Lakh</p>
              <p className="text-gray-500">Loan Period: 5 Years</p>
            </div>
            {/* Education Loans */}
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
              <Link href="/study-loan">
                <h3 className="text-2xl font-bold mb-2 text-teal-600">
                  Education Loans
                </h3>
              </Link>
              <p className="text-gray-500">Based on Requirement</p>
              <p className="text-gray-500">Loan Period: 4 Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-teal-700 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Saylani Welfare. All rights
            reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="hover:text-orange-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-orange-300">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
