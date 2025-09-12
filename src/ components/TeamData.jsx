import React from "react";
import teamData from "../data/teamdataz.json"

function Team() {
  return (
    <div>
      <h2 className="team-main-h2">Meet Our Team</h2>
      <div className="team-container">
        {teamData.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p><strong>Role:</strong> {member.role}</p>
            <p><strong>Email:</strong> {member.email}</p>
            <p><strong>Phone:</strong> {member.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
