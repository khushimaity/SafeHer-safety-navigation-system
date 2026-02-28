import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
        {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo-container">
          <span className="shield">🛡️</span>
          <h1 className="logo">SafeStep</h1>
        </div>

        <div className="nav-links">
          <a href="/home">Home</a>
          <a href="/features">Features</a>
          <a href="/about"  >About</a>
          <a href="/contact" className="active">Contact</a>
          <a href="/profile">Profile</a>
          <button className="logout-btn">Logout</button>
        </div>
      </nav>
      

      {/* Header */}
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>
          Have questions or feedback? We're here to help. Reach out to us and
          we'll respond as soon as possible.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="contact-cards">
        <div className="card">
          <Mail size={28} />
          <h3>Email Us</h3>
          <p className="highlight">support@safestep.com</p>
          <span>We'll respond within 24 hours</span>
        </div>

        <div className="card">
          <Phone size={28} />
          <h3>Call Us</h3>
          <p className="highlight">+1 (555) 123-4567</p>
          <span>Mon-Fri, 9AM-6PM EST</span>
        </div>

        <div className="card">
          <MapPin size={28} />
          <h3>Visit Us</h3>
          <p className="highlight">123 Safety Street, Suite 456</p>
          <span>New York, NY 10001</span>
        </div>
      </div>

      {/* Form + Side Section */}
      <div className="contact-main">
        {/* Form */}
        <div className="contact-form">
          <h2>Send us a Message</h2>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />

          <select>
            <option>Select a subject</option>
            <option>General Inquiry</option>
            <option>Technical Support</option>
            <option>Partnership</option>
          </select>

          <textarea placeholder="Tell us how we can help..." rows="6" />

          <button className="send-btn">
            <Send size={18} /> Send Message
          </button>
        </div>

        {/* Right Section */}
        <div className="side-section">
          <div className="emergency-box">
            <Phone size={24} />
            <h3>Emergency Assistance</h3>
            <p>
              If you're in immediate danger, please call emergency services or
              use the SOS button in the app.
            </p>
            <h4>Emergency: 911</h4>
            <h4>24/7 Hotline: 1-800-SAFE-NOW</h4>
          </div>

          <div className="business-hours">
            <Clock size={22} />
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
            <span>Emergency support is available 24/7 through the app</span>
          </div>

          <div className="faq-box">
            <h3>Frequently Asked Questions</h3>
            <p>
              Find quick answers to common questions about SafeStep features,
              safety tips, and account management.
            </p>
            <Link to="#">View FAQ</Link>
          </div>

          <div className="social-box">
            <h3>Connect With Us</h3>
            <p>
              Follow us on social media for safety tips, updates, and
              community stories.
            </p>
            <div className="social-icons">
              <Facebook />
              <Twitter />
              <Instagram />
              <Linkedin />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
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
          <p>About Us</p>
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
      </footer>

      <div className="copyright">
        © 2026 SafeStep. All rights reserved.
      </div>
    </div>
  );
}

export default Contact;