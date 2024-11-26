import React, { useState} from 'react';
import './Switch.css';

const Switch = ({isNavbarOpen}) => {
  // Gère l'état du thème
  const [isDark, setIsDark] = useState(false);

  // Gestionnaire pour le changement du switch
  const handleChange = () => {
    const newTheme = !isDark; // Inverse l'état actuel
    setIsDark(newTheme); // Met à jour l'état
    document.body.setAttribute('data-bs-theme', newTheme ? 'dark' : 'light'); // Définit le thème
  };

  return (
    <div className={`switch-class ${isNavbarOpen ? 'switch-open' : 'switch-closed'} form-check form-switch float-end mt-2 me-2`}>
      <input
        className="form-check-input"
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



