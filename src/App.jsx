export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <header style={{ background: '#e3f2fd', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Logo" style={{ height: 40, marginRight: 10 }} />
          <h1 style={{ margin: 0 }}>Digital Resources</h1>
        </div>
        <nav>
          <a href="#services" style={{ margin: '0 1rem' }}>Services</a>
          <a href="#about" style={{ margin: '0 1rem' }}>About</a>
          <a href="#contact" style={{ margin: '0 1rem' }}>Contact</a>
          <a href="#book" style={{ padding: '0.5rem 1rem', background: '#1976d2', color: 'white', borderRadius: '5px', marginLeft: '1rem' }}>Book Consultation</a>
        </nav>
      </header>

      <main style={{ padding: '2rem', background: '#f0f8ff' }}>
        <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>HR Consulting for Small Businesses</h2>
          <p>Strategic support in compliance, onboarding, policies, and more.</p>
          <a href="#book" style={{ padding: '0.75rem 1.5rem', background: '#1976d2', color: 'white', borderRadius: '5px', display: 'inline-block', marginTop: '1rem' }}>Get Started</a>
        </section>

        <section id="services" style={{ marginBottom: '2rem' }}>
          <h3 style={{ textAlign: 'center' }}>Services</h3>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem', flexWrap: 'wrap' }}>
            <div><strong>HR Compliance Audits</strong><br/>Stay compliant</div>
            <div><strong>Employee Onboarding</strong><br/>3 policies + 1 hr consult</div>
            <div><strong>HR Policy Development</strong><br/>3 policies + setup</div>
            <div><strong>Employee Handbook Creation</strong><br/>Customized content</div>
          </div>
        </section>

        <section id="pricing" style={{ background: '#fff', padding: '2rem' }}>
          <h3 style={{ textAlign: 'center' }}>Pricing</h3>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem', flexWrap: 'wrap' }}>
            <div><h4>Starter</h4><p>$300</p><small>1 policy + 1 hr consult</small></div>
            <div><h4>Enhanced</h4><p>$600</p><small>3 policies + setup</small></div>
            <div><h4>Retainer</h4><p>$800/mo</p><small>Ongoing support</small></div>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '1rem', background: '#e3f2fd', marginTop: '2rem' }}>
        &copy; 2025 Digital Resources. All rights reserved.
      </footer>
    </div>
  );
}
