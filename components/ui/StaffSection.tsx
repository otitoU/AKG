import React from 'react';
import './StaffSection.css';

const staffMembers = [
  { name: "Jane Doe", position: "Camp Director", img: "/images/staff/staff1.jpg" },
  { name: "John Smith", position: "Program Manager", img: "/images/staff/staff2.jpg" },
  { name: "Emily Johnson", position: "STEM Instructor", img: "/images/staff/staff3.jpg" },
  { name: "Michael Brown", position: "Logistics Lead", img: "/images/staff/staff4.jpg" },
  { name: "Lisa Davis", position: "Activity Coordinator", img: "/images/staff/staff5.jpg" },
  { name: "Robert Wilson", position: "Tech Mentor", img: "/images/staff/staff6.jpg" },
  { name: "Sarah Lee", position: "Health & Wellness", img: "/images/staff/staff7.jpg" },
  { name: "Daniel Clark", position: "STEM Coach", img: "/images/staff/staff8.jpg" },
  { name: "Sophia Martinez", position: "Admin Support", img: "/images/staff/staff9.jpg" },
  { name: "James Taylor", position: "Counselor", img: "/images/staff/staff10.jpg" },
];

function StaffSection() {
  return (
    <section id="team" className="staff-section">
      <h1>Meet our Staff</h1>
      <div className="staff-grid">
        {staffMembers.map((member, index) => (
          <div className="staff-card" key={index}>
            <img src={member.img} alt={member.name} className="staff-image" />
            <h4>{member.name}</h4>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StaffSection;
