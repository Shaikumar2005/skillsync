import React from 'react';
import CertificateCard from '../Components/CertificateCard';

function Certifications() {
  const certs = [
    { title: "Cloud Computing - AWS Academy", link: "#" },
    { title: "UX Design - Google Certificate", link: "#" },
    { title: "SQL for Data Science", link: "#" }
  ];

  return (
    <div className="container">
      <h2>My Certifications</h2>
      {certs.map((cert, idx) => (
        <CertificateCard key={idx} {...cert} />
      ))}
    </div>
  );
}

export default Certifications;
