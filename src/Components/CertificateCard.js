import React from 'react';

function CertificateCard({ title, link }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <a href={link} target="_blank" rel="noreferrer">{title}</a>
    </div>
  );
}

export default CertificateCard;
