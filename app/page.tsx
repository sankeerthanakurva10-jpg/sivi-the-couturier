"use client";

export default function Home() {
  return (
    <main style={{ 
      backgroundColor: '#0f0f0e', 
      color: '#ffffff', 
      minHeight: '100vh', 
      fontFamily: 'Playfair Display, Georgia, serif',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      position: 'relative'
    }}>
      
      {/* 1. BACKGROUND HERO CONTAINER */}
      <div style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#1a1a19', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '20px 40px'
      }}>
        
        {/* TOP NAVIGATION BAR */}
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '20px 0' }}>
          <div style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'normal', letterSpacing: '2px', color: '#4F7F5A' }}>SIVI</span>
            <span style={{ display: 'block', fontSize: '0.8rem', letterSpacing: '1px', color: '#b5b09c', fontStyle: 'italic', marginTop: '-5px' }}>the couturier</span>
          </div>

          <div style={{ display: 'flex', gap: '20px', fontSize: '0.7rem', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            <a style={{ color: '#ffffff', textDecoration: 'none', cursor: 'pointer' }}>Collections</a>
            <a style={{ color: '#ffffff', textDecoration: 'none', cursor: 'pointer' }}>The Atelier</a>
            <a style={{ color: '#ffffff', textDecoration: 'none', cursor: 'pointer' }}>The Story</a>
            <a style={{ color: '#ffffff', textDecoration: 'none', cursor: 'pointer' }}>The Heritage</a>
            <a style={{ color: '#ffffff', textDecoration: 'none', cursor: 'pointer' }}>Custom Tailoring</a>
            <a style={{ color: '#ffffff', textDecoration: 'none', cursor: 'pointer' }}>Contact</a>
          </div>

          <div style={{ display: 'flex', gap: '15px', fontSize: '0.9rem', color: '#ffffff' }}>
            <span>🔍</span> <span>👤</span> <span>❤️</span> <span>👜</span>
          </div>
        </nav>

        {/* HERO BODY TEXT */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: 'auto', padding: '40px 0' }}>
          <p style={{ fontSize: '0.8rem', letterSpacing: '4px', textTransform: 'uppercase', color: '#b5b09c', marginBottom: '15px' }}>
            HYDERABAD • INDIAN LOOMS
          </p>
          <h2 style={{ fontSize: '4.5rem', fontWeight: 'normal', lineHeight: '1.1', margin: '0 0 20px 0' }}>
            The Quiet Luxury of <br />
            <span style={{ color: '#4F7F5A', fontStyle: 'italic' }}>Indian Handlooms</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#dcd9cf', letterSpacing: '1px', fontWeight: '300' }}>
            Crafted in history, tailored for today.
          </p>
        </div>

        <div style={{ textAlign: 'center', fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#8c887a', paddingBottom: '20px' }}>
          Scroll To Explore
        </div>
      </div>

      {/* 2. CURATED COLLECTIONS SECTION */}
      <section style={{ padding: '80px 40px', backgroundColor: '#0f0f0e' }}>
        <h3 style={{ 
          fontSize: '1.8rem', 
          fontWeight: '300', 
          letterSpacing: '3px', 
          textTransform: 'uppercase', 
          textAlign: 'center',
          marginBottom: '50px',
          color: '#b5b09c'
        }}>
          Curated Collections
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ position: 'relative', cursor: 'pointer', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '450px', backgroundColor: '#1a1a19', position: 'relative' }}>
              <div className="product-image" style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontStyle: 'italic', color: '#8c887a', border: '1px solid #262624' }}>
                [ Product Image ]
              </div>
              <video 
                src="https://assets.mixkit.co/videos/preview/mixkit-spinning-threads-of-a-weaving-loom-42289-large.mp4" 
                muted loop playsInline
                style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0, transition: 'opacity 0.4s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.play(); }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0'; e.currentTarget.pause(); }}
              />
            </div>
            <div style={{ marginTop: '15px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '400', letterSpacing: '1px', margin: '5px 0' }}>Mangalagiri Silk Anarkali</h4>
              <p style={{ fontSize: '0.9rem', color: '#4F7F5A', margin: 0 }}>Bespoke Couture</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRAND STATEMENT SPLASH PANEL */}
      <section style={{ padding: '100px 40px', backgroundColor: '#141413', textAlign: 'center', borderTop: '1px solid #262624' }}>
        <h2 style={{ fontSize: '5rem', color: '#1f2420', margin: 0, letterSpacing: '8px', lineHeight: '1' }}>SIVI</h2>
        <p style={{ fontStyle: 'italic', fontSize: '2.5rem', color: '#b5b09c', marginTop: '-35px', fontFamily: 'serif' }}>the couturier</p>
        <div style={{ width: '80px', height: '1px', backgroundColor: '#4F7F5A', margin: '20px auto' }}></div>
        <p style={{ fontSize: '0.6rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#8c887a' }}>HYDERABAD • SINCE 2018</p>
      </section>

      {/* 4. LUXURY FOOTER GRID */}
      <footer style={{ backgroundColor: '#0f0f0e', padding: '60px 40px 40px 40px', borderTop: '1px solid #262624', fontFamily: 'sans-serif' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          
          <div>
            <div style={{ textAlign: 'left', marginBottom: '15px' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 'normal', letterSpacing: '2px', color: '#4F7F5A', fontFamily: 'serif' }}>SIVI</span>
              <span style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '1px', color: '#b5b09c', fontStyle: 'italic', marginTop: '-5px', fontFamily: 'serif' }}>the couturier</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#8c887a', lineHeight: '1.6', fontFamily: 'sans-serif' }}>
              Indian handloom textile studio specializing in contemporary dresses, modern outfits, and traditional sarees from Hyderabad.
            </p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '15px', color: '#b5b09c', fontSize: '0.9rem' }}>
              <span>📸</span> <span>📌</span> <span>✉️</span>
            </div>
          </div>

          <div>
            <h5 style={{ color: '#4F7F5A', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 15px 0' }}>Shop</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8rem', color: '#b5b09c' }}>
              <li>Handloom Sarees</li>
              <li>Mangalagiri Kurtas</li>
              <li>Kalamkari Dupattas</li>
              <li>Bespoke Tailoring</li>
              <li>All Collections</li>
            </ul>
          </div>

          <div>
            <h5 style={{ color: '#4F7F5A', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 15px 0' }}>Studio</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8rem', color: '#b5b09c' }}>
              <li>the Atelier</li>
              <li>the Heritage</li>
              <li>the Story</li>
              <li>the Archive</li>
              <li>Size Guide</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h5 style={{ color: '#4F7F5A', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 15px 0' }}>Newsletter</h5>
            <p style={{ fontSize: '0.75rem', color: '#8c887a', lineHeight: '1.6', marginBottom: '15px' }}>
              Receive curated insights on craft, culture, and conscious living.
            </p>
            <div style={{ display: 'flex', borderBottom: '1px solid #4F7F5A', paddingBottom: '5px' }}>
              <input type="email" placeholder="Your email address" style={{ backgroundColor: 'transparent', border: 'none', color: '#ffffff', fontSize: '0.75rem', width: '100%', outline: 'none' }} />
              <button style={{ backgroundColor: 'transparent', border: 'none', color: '#ffffff', fontSize: '0.75rem', letterSpacing: '1px', cursor: 'pointer', fontWeight: 'bold' }}>JOIN</button>
            </div>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '5px', paddingTop: '20px', borderTop: '1px solid #1c1c1a', fontSize: '0.7rem', color: '#525048' }}>
          © 2026 Sivi the Couturier. All Rights Reserved.
        </div>
      </footer>

      {/* 5. FLOATING WHATSAPP CHAT BUTTON */}
      <a 
        href="https://wa.me/91XXXXXXXXXX" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#25D366',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          zIndex: 1000,
          textDecoration: 'none'
        }}
        title="Chat via WhatsApp"
      >
        💬
      </a>

    </main>
  );
}