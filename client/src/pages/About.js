import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Shield,
  Heart,
  Zap
} from "lucide-react";

const About = () => {
  return (
    
    <div className="about-container">
        {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo-container">
          <span className="shield">🛡️</span>
          <h1 className="logo">SafeStep</h1>
        </div>

        <div className="nav-links">
          <a href="/home">Home</a>
          <a href="/features">Features</a>
          <a href="/about"  className="active">About</a>
          <a href="/contact">Contact</a>
          <a href="/profile">Profile</a>
          <button className="logout-btn">Logout</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>Our Mission: Making Every Journey Safer</h1>
        <p>
          SafeStep was born from a simple belief: every woman deserves to
          navigate the world with confidence and security. We combine AI
          technology, community support, and real-time data to create a
          comprehensive safety ecosystem.
        </p>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="stat-card">
          <Users size={28} />
          <h2>50,000+</h2>
          <p>Active Users</p>
        </div>

        <div className="stat-card">
          <Target size={28} />
          <h2>1M+</h2>
          <p>Safe Routes Planned</p>
        </div>

        <div className="stat-card">
          <Heart size={28} />
          <h2>95%</h2>
          <p>User Satisfaction</p>
        </div>

        <div className="stat-card">
          <Shield size={28} />
          <h2>24/7</h2>
          <p>Emergency Support</p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="our-story">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            SafeStep was founded in 2024 by Dr. Sarah Mitchell, a safety
            researcher who experienced firsthand the anxiety of navigating
            unfamiliar areas alone at night.
          </p>
          <p>
            Traditional navigation apps focused solely on efficiency,
            ignoring crucial safety factors like lighting, crowd density,
            and historical incident data.
          </p>
          <p>
            Today, SafeStep has grown into a comprehensive safety platform
            trusted by thousands of women worldwide.
          </p>
        </div>

        <div className="quote-box">
          <p>
            "Safety isn't a luxury — it's a fundamental right.
            Technology should serve humanity's highest needs."
          </p>
          <h4>Dr. Sarah Mitchell</h4>
          <span>Founder & CEO, SafeStep</span>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <p>These principles guide every decision we make</p>

        <div className="values-grid">
          <div className="value-card">
            <Shield size={30} />
            <h3>Safety First</h3>
            <p>We prioritize your security above everything else.</p>
          </div>

          <div className="value-card">
            <Heart size={30} />
            <h3>Empowerment</h3>
            <p>Every woman deserves to feel confident anywhere.</p>
          </div>

          <div className="value-card">
            <Users size={30} />
            <h3>Community</h3>
            <p>Together we are stronger and safer.</p>
          </div>

          <div className="value-card">
            <Zap size={30} />
            <h3>Innovation</h3>
            <p>We evolve constantly to stay ahead of risks.</p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section">
        <h2>Meet Our Team</h2>

        <div className="team-grid">
          <div className="team-card">
            <h3>Dr. Sarah Mitchell</h3>
            <span>Founder & CEO</span>
            <p>AI safety researcher with 15+ years experience.</p>
          </div>

          <div className="team-card">
            <h3>Priya Patel</h3>
            <span>Chief Technology Officer</span>
            <p>AI expert specializing in predictive analytics.</p>
          </div>

          <div className="team-card">
            <h3>Emily Chen</h3>
            <span>Head of Community</span>
            <p>Advocate for women’s rights and safety.</p>
          </div>

          <div className="team-card">
            <h3>Dr. Maya Johnson</h3>
            <span>Safety Advisor</span>
            <p>Clinical psychologist focused on preventive safety.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="join-mission">
        <h2>Join Us in Our Mission</h2>
        <p>
          Whether you're a user, partner, or advocate,
          help us create a safer world.
        </p>

        <div className="cta-buttons">
          <Link to="/" className="primary-btn">
            Get Involved
          </Link>
          <Link to="/features" className="secondary-btn">
            Explore Features
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;