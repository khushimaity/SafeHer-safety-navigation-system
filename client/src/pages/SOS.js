import React from "react";
import "./SOS.css";

function SOS() {
  return (
    <div className="sos-page">

      <div className="sos-header">
        <div className="sos-header-content">
          <div className="sos-icon">🚨</div>
          <div>
            <h1>Smart SOS Button</h1>
            <p>Emergency help at your fingertips</p>
          </div>
        </div>
      </div>

      <div className="sos-container">

        <div className="sos-left">
          <div className="sos-card main-card">
            <h2>Emergency SOS</h2>

            <div className="sos-button">
              <span className="sos-big">SOS</span>
              <span className="sos-small">Press & Hold</span>
            </div>

            <p className="sos-info">
              Press and hold for 3 seconds to activate emergency alert.
              Your location and live audio/video will be shared with trusted contacts.
            </p>

            <div className="sos-actions">
              <button className="gray-btn">Test SOS (Silent)</button>
              <button className="purple-btn">Manage Contacts</button>
            </div>
          </div>
        </div>

        <div className="sos-right">
          <div className="sos-card">
            <h3>SOS Settings</h3>

            <div className="toggle-row">
              <span>Auto-Record</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="toggle-row">
              <span>Location Tracking</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="toggle-row">
              <span>Sound Alert</span>
              <input type="checkbox" />
            </div>
          </div>

          <div className="sos-card response-card">
            <h3>Response Time</h3>
            <div className="response-big">&lt;2</div>
            <p>Average time to send alerts to all contacts</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SOS;