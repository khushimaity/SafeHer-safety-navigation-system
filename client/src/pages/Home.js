import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);

  
  return (
    
    <div>
      
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo-container">
          <span className="shield">🛡️</span>
          <h1 className="logo">SafeHer</h1>
        </div>

        <div className="nav-links">
          <a href="/home" className="active">Home</a>
          <a href="/features">Features</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/profile">Profile</a>

          <button className="logout-btn">Logout</button>
        </div>
      </nav>
      
      

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-left">
          

          <h1>
            Your Safety,<br />Our Priority
          </h1>

          <p>
            Navigate confidently with safe route planning,
            emergency tools, and community support designed for women's safety with SafeHer.
          </p>

          

          
        </div>

        <div className="hero-right">
          <img
            src="/homeicon.png"
            alt="hero"
          />
        </div>

      </section>

     
      {/* ================= FEATURES ================= */}
      <section className="features">
        <h2>Comprehensive Safety Solutions</h2>
        <p className="subtitle">
          From real-time navigation to emergency alerts, we've got you covered at every step
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Safe Navigation</h3>
            <p>Real-time safe maps and route planning with AI-powered safety scores</p>
          </div>

          <div className="feature-card">
            <h3>Emergency Tools</h3>
            <p>Smart SOS button, voice detection, and wearable integration</p>
          </div>

          <div className="feature-card">
            <h3>Workplace Safety</h3>
            <p>Company ratings, anonymous reports, and career guidance</p>
          </div>

          <div className="feature-card">
            <h3>Community Alerts</h3>
            <p>Crowdsourced safety data and trusted network support</p>
          </div>
        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="how-it-works">
        <h2>How SafeStep Works</h2>
        <p className="subtitle">Three simple steps to stay safe</p>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Set Your Destination</h3>
            <p>
              Enter where you want to go, and our AI analyzes multiple routes
              based on safety factors like lighting, crowd density, and incident history.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Get Safe Routes</h3>
            <p>
              Receive personalized route recommendations with safety scores.
              Choose the path that makes you feel most secure.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Stay Protected</h3>
            <p>
              Travel with emergency tools active. Your trusted contacts can track
              your journey, and SOS is just one tap away.
            </p>
          </div>
        </div>
      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials">
        <h2>Trusted by Thousands</h2>
        <p className="subtitle">
          Hear from women who feel safer with SafeStep
        </p>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>
              "SafeStep has completely changed how I feel about my evening commute.
              The safe route planner is a game-changer!"
            </p>
            <h4>Sarah Johnson</h4>
            <span>Software Engineer</span>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>
              "The company safety ratings helped me choose a safe internship.
              I wish I had this tool earlier in my career!"
            </p>
            <h4>Priya Sharma</h4>
            <span>Graduate Student</span>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>
              "The emergency SOS feature gives me peace of mind.
              My family can track my location when I'm traveling alone."
            </p>
            <h4>Emily Chen</h4>
            <span>Marketing Manager</span>
          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="cta">
        <h2>Ready to Feel Safer Every Day?</h2>
        <p>
          Join thousands of women who trust SafeStep for their daily safety needs
        </p>

        <div className="cta-buttons">
          <button className="cta-primary">Get Started Free</button>
          <button className="cta-secondary">Learn More</button>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-grid">

          <div>
            <h3>SafeStep</h3>
            <p>
              Empowering women with AI-powered safety tools for safer navigation
              and peace of mind.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <p>Home</p>
            <p>Features</p>
            <p>About</p>
            <p>Contact</p>
          </div>

          <div>
            <h4>Safety Tools</h4>
            <p>Safe Map</p>
            <p>Emergency SOS</p>
            <p>Company Ratings</p>
            <p>Trusted Network</p>
          </div>

          <div>
            <h4>Legal</h4>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookie Policy</p>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 SafeStep. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default Home;