"use client";
import { useState, useEffect } from "react";

export default function StoryPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitors the scroll position to change the header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main style={{ 
      backgroundColor: '#fbfbfa', 
      color: '#1c1c1a', 
      minHeight: '100vh', 
      fontFamily: 'Playfair Display, Georgia, serif',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }}>
      
      {/* 1. SCROLL-SENSITIVE HEADER NAVIGATION */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '100%', 
        padding: '20px 40px',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        transition: 'all 0.4s ease',
        // Changes from crystal transparent glass to solid luxury off-white on scroll
        backgroundColor: isScrolled ? '#fbfbfaba' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid #e3e1d8' : 'none',
        boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.02)' : 'none'
      }}>
        <div style={{ textAlign: 'left' }}>
          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'normal', letterSpacing: '2px', color: '#4F7F5A' }}>SIVI</span>
            <span style={{ display: 'block', fontSize: '0.8rem', letterSpacing: '1px', color: isScrolled ? '#7a766a' : '#eae7dd', fontStyle: 'italic', marginTop: '-5px' }}>the couturier</span>
          </a>
        </div>

        <div style={{ display: 'flex', gap: '20px', fontSize: '0.7rem', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
          <a href="/" style={{ color: isScrolled ? '#1c1c1a' : '#ffffff', textDecoration: 'none', cursor: 'pointer' }}>Collections</a>
          <a style={{ color: isScrolled ? '#1c1c1a' : '#ffffff', textDecoration: 'none', cursor: 'pointer' }}>The Atelier</a>
          <a href="/story" style={{ color: isScrolled ? '#4F7F5A' : '#4F7F5A', fontWeight: 'bold', textDecoration: 'none', cursor: 'pointer' }}>The Story</a>
          <a style={{ color: isScrolled ? '#1c1c1a' : '#ffffff', textDecoration: 'none', cursor: 'pointer' }}>The Heritage</a>
          <a style={{ color: isScrolled ? '#1c1c1a' : '#ffffff', textDecoration: 'none', cursor: 'pointer' }}>Custom Tailoring</a>
          <a style={{ color: isScrolled ? '#1c1c1a' : '#ffffff', textDecoration: 'none', cursor: 'pointer' }}>Contact</a>
        </div>

        <div style={{ display: 'flex', gap: '15px', fontSize: '0.9rem', color: isScrolled ? '#1c1c1a' : '#ffffff' }}>
          <span>🔍</span> <span>👤</span> <span>❤️</span> <span>👜</span>
        </div>
      </nav>

      {/* 2. HERO IMAGE CONTAINER MATCHING SCREENSHOT */}
      <div style={{
        width: '100%',
        minHeight: '100vh',
        // Background image placeholder area (simulating your loom photo)
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url("https://assets.mixkit.co/videos/preview/mixkit-spinning-threads-of-a-weaving-loom-42289-large.mp4")',
        backgroundColor: '#38352e', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '0 20px',
        textAlign: 'center',
        color: '#ffffff'
      }}>
        
        {/* HERO BODY TEXT INSIDE HERO IMAGE */}
        <div style={{ maxWidth: '800px', marginTop: '60px' }}>
          <p style={{ fontSize: '0.8rem', letterSpacing: '4px', textTransform: 'uppercase', color: '#eae7dd', marginBottom: '20px' }}>
            Hyderabad Studio • Handlooms from Across India
          </p>
          
          <h1 style={{ fontSize: '4.5rem', fontWeight: 'normal', lineHeight: '1.1', margin: '0 0 25px 0' }}>
            Threads of <br />
            <span style={{ color: '#d1a852', fontStyle: 'italic' }}>Innovation</span>
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#eae7dd', letterSpacing: '1px', fontWeight: '300', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
            From the rhythmic clatter of pit looms across India to our design studio in Hyderabad, Sivi bridges ancestral craftsmanship with contemporary silhouettes.
          </p>
        </div>

        <div style={{ position: 'absolute', bottom: '30px', fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#c4c0b5' }}>
          Scroll To Explore
        </div>
      </div>

      {/* 3. THE DETAILED HERITAGE TEXT (APPEARS ON SCROLL) */}
      <section style={{ padding: '100px 40px', backgroundColor: '#fbfbfa' }}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          fontSize: '1.15rem', 
          lineHeight: '1.9', 
          color: '#3a3934', 
          textAlign: 'justify' 
        }}>
          <p style={{ marginBottom: '30px' }}>
            Established in Hyderabad in 2018, <strong>Sivi the Couturier</strong> was born out of a profound reverence for the timeless artistry of Indian handlooms. We believe that luxury isn't merely about presentation; it is woven into the history of the threads, the rhythm of the loom, and the precision of bespoke craftsmanship.
          </p>
          <p style={{ marginBottom: '30px' }}>
            Our journey draws inspiration directly from the heritage of local weavers, translating age-old structural textiles into modern silhouettes. Every Mangalagiri weave, every fine line of Kalamkari, and every masterfully tailored dress represents a bridge across generations.
          </p>
          <p style={{ fontStyle: 'italic', color: '#4F7F5A', textAlign: 'center', marginTop: '5px', fontSize: '1.4rem' }}>
            "Crafted in history, tailored for today."
          </p>
        </div>
      </section>

    </main>
  );
}