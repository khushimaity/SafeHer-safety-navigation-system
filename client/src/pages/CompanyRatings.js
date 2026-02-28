import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Building2, Search, Star, Filter } from "lucide-react";
import "./CompanyRatings.css";

function CompanyRatings() {
  const [search, setSearch] = useState("");

  const companies = [
    {
      name: "Tech Innovators Inc.",
      industry: "Technology",
      rating: 4.8,
      reviews: 234,
      safety: 95,
      inclusivity: 92,
      benefits: ["Flexible hours", "Safe transport", "Harassment training"],
    },
    {
      name: "Creative Solutions LLC",
      industry: "Marketing",
      rating: 4.5,
      reviews: 156,
      safety: 88,
      inclusivity: 90,
      benefits: ["Women mentorship", "Security escorts", "Work from home"],
    },
    {
      name: "Global Finance Corp",
      industry: "Finance",
      rating: 4.2,
      reviews: 432,
      safety: 82,
      inclusivity: 85,
      benefits: ["On-site security", "Parking assistance"],
    },
    {
      name: "Design Studio Pro",
      industry: "Design",
      rating: 3.8,
      reviews: 89,
      safety: 75,
      inclusivity: 78,
      benefits: ["Basic security"],
    },
  ];

  const filtered = companies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="company-page">

        {/* HEADER */}
        <div className="company-header">
          <div className="header-content">
            <Building2 size={40} />
            <div>
              <h1>Company Safety Ratings</h1>
              <p>Make informed career decisions with safety insights</p>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="search-box">
          <div className="search-input">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search companies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="filter-btn">
            <Filter size={16} /> Filters
          </button>
        </div>

        {/* COMPANY LIST */}
        <div className="company-list">
          {filtered.map((company, index) => (
            <div className="company-card" key={index}>

              <div className="card-left">
                <h2>{company.name}</h2>
                <p className="industry">{company.industry}</p>

                <div className="score-row">
                  <div className="score">
                    <span>Safety Score</span>
                    <span className="green">{company.safety}/100</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar green-bar"
                      style={{ width: `${company.safety}%` }}
                    ></div>
                  </div>
                </div>

                <div className="score-row">
                  <div className="score">
                    <span>Inclusivity Score</span>
                    <span className="blue">{company.inclusivity}/100</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar blue-bar"
                      style={{ width: `${company.inclusivity}%` }}
                    ></div>
                  </div>
                </div>

                <div className="benefits">
                  <span>Safety Benefits:</span>
                  <div className="tags">
                    {company.benefits.map((b, i) => (
                      <span key={i} className="tag">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card-right">
                <div className="rating">
                  <Star size={18} fill="#facc15" stroke="#facc15" />
                  <span>{company.rating}</span>
                  <small>({company.reviews})</small>
                </div>

                <button className="primary-btn">View Details</button>
                <button className="outline-btn">Read Reviews</button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default CompanyRatings;