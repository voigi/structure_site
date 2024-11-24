document.addEventListener('DOMContentLoaded', () => {
    const switchElem = document.getElementById('flexSwitchCheckDefault');
    
    if (switchElem) {
      switchElem.addEventListener('change', handleChange);
  
      function handleChange() {
        const isDark = !this.checked;
        document.body.setAttribute('data-bs-theme', isDark ? 'light' : 'dark');
      }
  
      // Initialiser l'état par défaut
      handleChange.call(switchElem);
    } else {
      console.error('L\'élément avec l\'ID "flexSwitchCheckDefault" est introuvable.');
    }
  });
  