import React from "react";
import "./TrustedNetwork.css";

function TrustedNetwork() {
  return (
    <div className="tn-page">

      {/* HEADER */}
      <div className="tn-header">
        <div className="tn-header-content">
          <div className="tn-icon">👥</div>
          <div>
            <h1>Trusted Network</h1>
            <p>Stay connected with people who care about your safety</p>
          </div>
        </div>
      </div>

      <div className="tn-container">

        {/* LEFT COLUMN */}
        <div className="tn-left">

          <div className="tn-card">
            <div className="tn-card-header">
              <h2>Your Trusted Contacts</h2>
              <button className="tn-add-btn">+ Add Contact</button>
            </div>

            {/* CONTACTS */}
            <div className="tn-contact">
              <div className="tn-contact-left">
                <div className="tn-avatar">
                  <span className="tn-dot active"></span>
                </div>
                <div>
                  <h4>John Doe</h4>
                  <p>Brother • Active now</p>
                </div>
              </div>
              <button className="tn-share">Share Location</button>
            </div>

            <div className="tn-contact">
              <div className="tn-contact-left">
                <div className="tn-avatar">
                  <span className="tn-dot active"></span>
                </div>
                <div>
                  <h4>Mary Smith</h4>
                  <p>Friend • Active now</p>
                </div>
              </div>
              <button className="tn-share">Share Location</button>
            </div>

            <div className="tn-contact">
              <div className="tn-contact-left">
                <div className="tn-avatar">
                  <span className="tn-dot offline"></span>
                </div>
                <div>
                  <h4>Sarah Johnson</h4>
                  <p>Colleague • 2 hours ago</p>
                </div>
              </div>
              <button className="tn-share">Share Location</button>
            </div>

            <div className="tn-contact">
              <div className="tn-contact-left">
                <div className="tn-avatar">
                  <span className="tn-dot active"></span>
                </div>
                <div>
                  <h4>Emily Chen</h4>
                  <p>Sister • Active now</p>
                </div>
              </div>
              <button className="tn-share">Share Location</button>
            </div>

          </div>

          {/* HOW IT WORKS */}
          <div className="tn-card">
            <h2>How It Works</h2>

            <div className="tn-step">
              <div className="tn-step-number">1</div>
              <div>
                <h4>Add Trusted Contacts</h4>
                <p>Invite family and friends to join your safety network</p>
              </div>
            </div>

            <div className="tn-step">
              <div className="tn-step-number">2</div>
              <div>
                <h4>Share Your Journey</h4>
                <p>Automatically share your location when traveling</p>
              </div>
            </div>

            <div className="tn-step">
              <div className="tn-step-number">3</div>
              <div>
                <h4>Stay Connected</h4>
                <p>They receive alerts if you trigger SOS or deviate</p>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="tn-right">

          <div className="tn-card">
            <h3>Location Sharing</h3>
            <p className="tn-sub">Control who sees your location and when</p>

            <div className="tn-toggle">
              <span>Auto-share on trips</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="tn-toggle">
              <span>Share at night only</span>
              <input type="checkbox" />
            </div>
          </div>

          <div className="tn-card purple-card">
            <h3>Network Features</h3>
            <ul>
              <li>✔ Automatic location sharing during trips</li>
              <li>✔ Real-time journey tracking</li>
              <li>✔ Instant emergency notifications</li>
              <li>✔ Two-way check-in system</li>
              <li>✔ Geofence alerts</li>
            </ul>
          </div>

          <div className="tn-card">
            <h3>Smart Notifications</h3>
            <p>Your network receives intelligent alerts based on your safety settings and journey patterns</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default TrustedNetwork;