import React from "react";
import Navbar from "../components/Navbar";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Heart,
  Shield,
  Bell,
  Lock,
  Edit,
} from "lucide-react";
import "./Profile.css";

function Profile() {
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
          <a href="/features">Features</a>
          <a href="/about"  >About</a>
          <a href="/contact">Contact</a>
          <a href="/profile" className="active">Profile</a>
          <button className="logout-btn">Logout</button>
        </div>
      </nav>
      

      <div className="profile-page">
        

        

        {/* HEADER */}
        <div className="profile-header">
          <div className="profile-left">
            <div className="avatar">
              <User size={50} />
            </div>
            <div>
              <h2>Jane Doe</h2>
              <p>jane.doe@example.com</p>
              <span>New York, NY</span>
            </div>
          </div>

          <button className="edit-btn">
            <Edit size={16} /> Edit Profile
          </button>
        </div>

        {/* MAIN GRID */}
        <div className="profile-grid">

          {/* LEFT SIDE */}
          <div className="left-section">

            {/* Personal Info */}
            <div className="card">
              <h3>Personal Information</h3>

              <div className="input-field">
                <User size={16} />
                <input value="Jane Doe" readOnly />
              </div>

              <div className="input-field">
                <Mail size={16} />
                <input value="jane.doe@example.com" readOnly />
              </div>

              <div className="input-field">
                <Phone size={16} />
                <input value="+1 (555) 123-4567" readOnly />
              </div>

              <div className="input-field">
                <MapPin size={16} />
                <input value="New York, NY" readOnly />
              </div>

              <div className="input-field">
                <Heart size={16} />
                <input value="John Doe - +1 (555) 987-6543" readOnly />
              </div>
            </div>

            {/* Safety Settings */}
            <div className="card">
              <h3>Safety Settings</h3>

              {[
                "SOS Enabled",
                "Voice Detection",
                "Location Sharing",
                "Night Mode",
                "Sound Alerts",
                "Push Notifications",
              ].map((item, index) => (
                <div className="toggle-row" key={index}>
                  <span>{item}</span>
                  <label className="switch">
                    <input type="checkbox" defaultChecked={index !== 3} />
                    <span className="slider"></span>
                  </label>
                </div>
              ))}
            </div>

            {/* Trusted Contacts */}
            <div className="card">
              <div className="trusted-header">
                <h3>Trusted Contacts</h3>
                <span className="add-contact">+ Add Contact</span>
              </div>

              <div className="contact-row">
                <div>
                  <strong>John Doe</strong>
                  <p>Brother • +1 (555) 987-6543</p>
                </div>
                <span className="active">Active</span>
              </div>

              <div className="contact-row">
                <div>
                  <strong>Sarah Johnson</strong>
                  <p>Colleague • +1 (555) 345-6789</p>
                </div>
                <span className="inactive">Inactive</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="right-section">

            {/* Stats */}
            <div className="card">
              <h3>Your Stats</h3>
              <div className="stat-row">
                <span>Safe Routes</span>
                <strong>127</strong>
              </div>
              <div className="stat-row">
                <span>Hours Tracked</span>
                <strong>84</strong>
              </div>
              <div className="stat-row">
                <span>Trusted Contacts</span>
                <strong>5</strong>
              </div>
              <div className="stat-row">
                <span>Safety Score</span>
                <strong>98%</strong>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card">
              <h3>Quick Actions</h3>

              <button className="danger-btn">
                <Shield size={16} /> Test Emergency SOS
              </button>

              <button className="purple-btn">
                <Lock size={16} /> Change Password
              </button>

              <button className="gray-btn">
                <Bell size={16} /> Notification Settings
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;