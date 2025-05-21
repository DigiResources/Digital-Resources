import './App.css';

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <header className="bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-8 shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Digital Resources Logo" className="h-10" />
            <span className="text-xl font-bold">Digital Resources</span>
          </div>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a href="#book" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book Consultation</a>
          </nav>
        </div>
      </header>

      <section className="text-center py-16 bg-blue-50">
        <h1 className="text-4xl font-bold mb-4">HR Consulting for Small Businesses</h1>
        <p className="text-lg mb-6">Strategic support in compliance, onboarding, policies, and more.</p>
        <a href="#book" className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800">Get Started</a>
      </section>

      <section id="services" className="py-16 px-6 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-10">Services</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-blue-100 p-6 rounded shadow">
            <h3 className="font-bold mb-2">HR Compliance Audits</h3>
            <p className="text-sm">Ensure your business stays compliant.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded shadow">
            <h3 className="font-bold mb-2">Employee Onboarding</h3>
            <p className="text-sm">3 policies + 1-hour consult.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded shadow">
            <h3 className="font-bold mb-2">HR Policy Development</h3>
            <p className="text-sm">3 policies + onboarding setup.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded shadow">
            <h3 className="font-bold mb-2">Employee Handbook Creation</h3>
            <p className="text-sm">Tailored to your business needs.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-10">Pricing</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded shadow border">
            <h3 className="font-bold text-lg mb-2">Starter</h3>
            <p className="text-3xl font-bold mb-2">$300</p>
            <p className="text-sm mb-2">1 policy + 1 hour consult</p>
          </div>
          <div className="bg-white p-6 rounded shadow border">
            <h3 className="font-bold text-lg mb-2">Enhanced</h3>
            <p className="text-3xl font-bold mb-2">$600</p>
            <p className="text-sm mb-2">3 policies + onboarding setup</p>
          </div>
          <div className="bg-white p-6 rounded shadow border">
            <h3 className="font-bold text-lg mb-2">Retainer</h3>
            <p className="text-3xl font-bold mb-2">$800/mo</p>
            <p className="text-sm mb-2">Ongoing HR support</p>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 bg-blue-100 mt-10 text-sm">
        &copy; 2025 Digital Resources. All rights reserved.
      </footer>
    </div>
  );
}