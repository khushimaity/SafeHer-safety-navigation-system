import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Map,
  AlertTriangle,
  Building2,
  Users,
} from "lucide-react";
import "./Features.css";

function Features() {
  const navigate = useNavigate();

  return (
    <>
    {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo-container">
          <span className="shield">🛡️</span>
          <h1 className="logo">SafeStep</h1>
        </div>

        <div className="nav-links">
          <a href="/home">Home</a>
          <a href="/features"  className="active">Features</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/profile">Profile</a>
          <button className="logout-btn">Logout</button>
        </div>
      </nav>


      <div className="features-page">

        {/* HEADER */}
        <div className="features-header">
          <h1>Our Safety Features</h1>
          <p>Powerful tools designed to keep you safe</p>
        </div>

        {/* FEATURE CARDS */}
        <div className="features-grid">

          {/* SAFE NAVIGATION */}
          <div
            className="feature-card"
            onClick={() => navigate("/safemap")}
          >
            <Map size={40} className="feature-icon" />
            <h2>Safe Navigation</h2>
            <p>
              Real-time safe map with crowd density, lighting score,
              and risk alerts.
            </p>
          </div>

          {/* EMERGENCY TOOLS */}
          <div
            className="feature-card"
            onClick={() => navigate("/sos")}
          >
            <AlertTriangle size={40} className="feature-icon" />
            <h2>Emergency Tools</h2>
            <p>
              Smart SOS button with instant alert system and
              live location tracking.
            </p>
          </div>

          {/* WORKPLACE SAFETY */}
          <div
            className="feature-card"
            onClick={() => navigate("/company-ratings")}
          >
            <Building2 size={40} className="feature-icon" />
            <h2>Workplace Safety</h2>
            <p>
              Company safety ratings, inclusivity score,
              and verified reviews.
            </p>
          </div>

          {/* COMMUNITY & ALERTS */}
          <div
            className="feature-card"
            onClick={() => navigate("/trusted-network")}
          >
            <Users size={40} className="feature-icon" />
            <h2>Community & Alerts</h2>
            <p>
              Trusted network with real-time alerts,
              location sharing, and smart notifications.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Features;