export default function AboutPage() {
    return (
      <div>
        {/* About Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-green-600 text-white">
          <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Saylani Microfinance
            </h1>
            <p className="text-lg md:text-xl">
              Transforming lives through interest-free loans under the Qarze Hasana program.
            </p>
          </div>
        </section>
  
        {/* Mission and Vision Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg md:text-xl mb-8">
              Saylani Welfare is dedicated to improving the lives of underprivileged
              communities by providing access to interest-free loans. We empower individuals
              to build better futures, whether through education, business, or homeownership.
            </p>
            <h2 className="text-3xl font-bold text-green-600 mb-6">Our Vision</h2>
            <p className="text-gray-700 text-lg md:text-xl">
              We envision a society where everyone has the resources to lead a dignified
              life, free from the burdens of financial instability.
            </p>
          </div>
        </section>
  
        {/* Why Choose Us Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-green-600 mb-12">
              Why Choose Saylani Microfinance?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Box 1 */}
              <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center hover:shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-500">Interest-Free Loans</h3>
                <p className="text-gray-600">
                  Our Qarze Hasana loans are completely interest-free, ensuring no additional
                  burden on applicants.
                </p>
              </div>
              {/* Box 2 */}
              <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center hover:shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-500">Multiple Loan Categories</h3>
                <p className="text-gray-600">
                  From wedding and education to business and home construction, we cater to
                  a variety of needs.
                </p>
              </div>
              {/* Box 3 */}
              <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center hover:shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-500">Efficient Process</h3>
                <p className="text-gray-600">
                  Our streamlined application process ensures quick approvals and
                  transparent decision-making.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Team Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-6">Our Team</h2>
            <p className="text-gray-700 text-lg md:text-xl">
              A dedicated group of professionals and volunteers committed to bringing
              Saylani’s vision to life.
            </p>
          </div>
        </section>
      </div>
    );
  }
  