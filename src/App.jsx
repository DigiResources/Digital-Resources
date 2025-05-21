export default function App() {
  return (
    <div>
      <header style={{ backgroundColor: '#e0f2fe', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Digital Resources Logo" style={{ height: 40, marginRight: 10 }} />
          <h1 style={{ margin: 0 }}>Digital Resources</h1>
        </div>
        <nav>
          <a href="#services" style={{ margin: '0 1rem' }}>Services</a>
          <a href="#pricing" style={{ margin: '0 1rem' }}>Pricing</a>
          <a href="#contact" style={{ margin: '0 1rem' }}>Contact</a>
          <a href="#book" style={{ padding: '0.5rem 1rem', background: '#0ea5e9', color: '#fff', borderRadius: 5 }}>Book Consultation</a>
        </nav>
      </header>

      <section style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#f0f9ff' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>HR Consulting for Small Businesses</h2>
        <p>Strategic support in compliance, onboarding, policies, and more.</p>
        <a href="#book" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.75rem 1.5rem', background: '#0ea5e9', color: '#fff', borderRadius: '6px' }}>Get Started</a>
      </section>

      <section id="services" style={{ padding: '3rem 2rem', backgroundColor: '#fff' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Services</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem' }}>
          <div><strong>HR Compliance Audits</strong><p>Ensure your business meets legal standards.</p></div>
          <div><strong>Employee Onboarding</strong><p>3 policies + 1 hr consultation.</p></div>
          <div><strong>HR Policy Development</strong><p>3 policies + onboarding setup.</p></div>
          <div><strong>Employee Handbook Creation</strong><p>Customized documentation.</p></div>
        </div>
      </section>

      <section id="pricing" style={{ padding: '3rem 2rem', backgroundColor: '#f9fafb' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Pricing</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div><h4>Starter</h4><p>$300</p><small>1 policy + 1 hour consult</small></div>
          <div><h4>Enhanced</h4><p>$600</p><small>3 policies + onboarding setup</small></div>
          <div><h4>Retainer</h4><p>$800/mo</p><small>Ongoing HR support</small></div>
        </div>
      </section>

      <footer id="contact" style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#e0f2fe' }}>
        <p>Contact: your.email@example.com | (123) 456-7890</p>
        <p>&copy; 2025 Digital Resources. All rights reserved.</p>
      </footer>
    </div>
  );
}
