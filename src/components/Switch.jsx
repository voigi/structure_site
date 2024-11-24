import React, { useState } from 'react';
import './Switch.css';

const Switch = () => {
  // Gère l'état du thème
  const [isDark, setIsDark] = useState(false);

  // Gestionnaire pour le changement du switch
  const handleChange = () => {
    const newTheme = !isDark; // Inverse l'état actuel
    setIsDark(newTheme); // Met à jour l'état
    document.body.setAttribute('data-bs-theme', newTheme ? 'dark' : 'light'); // Définit le thème
  };

  return (
    <div className="form-check form-switch float-end mt-2 me-2 d-flex justify-content-end">
      <input
        className="form-check-input"
        style={{ width: '60px', height: '30px', position: 'relative', left: '42vw', bottom: '0.5vh' }}
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        checked={isDark}
        onChange={handleChange} // Événement React
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
    </div>
  );
};

export default Switch;



