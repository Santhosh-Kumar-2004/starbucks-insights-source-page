import React from "react";
import "../styles/Branches.css";

const branches = [
  { place: "New York", address: "123 Broadway St, Manhattan" },
  { place: "Los Angeles", address: "456 Sunset Blvd, Hollywood" },
  { place: "Chicago", address: "789 Michigan Ave, Downtown" },
  { place: "Houston", address: "101 Main St, Midtown" },
];

const Branches = () => {
  return (
    <section className="branches-section">
      {/* Left side vertical box */}
      <div className="branches-left">
        <h2 className="vertical-title">OUR BRANCHES</h2>
      </div>

      {/* Right side maps grid */}
      <div className="branches-right">
        {branches.map((branch, index) => (
          <div className="branch-card" key={index}>
            <div className="map-container">
              {/* Google Maps Embed (placeholder, can replace with real) */}
              <iframe
                title={branch.place}
                src="https://maps.google.com/maps?q=Starbucks&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                className="map"
              ></iframe>
            </div>
            <div className="branch-info">
              <h3 className="branch-place">{branch.place}</h3>
              <p className="branch-address">{branch.address}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Branches;
