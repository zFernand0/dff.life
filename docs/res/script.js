function languageToggle() {
  const currentLanguage = localStorage.getItem('language') || 'es';
  const newLanguage = currentLanguage === 'es' ? 'en' : 'es';

  fetch(`res/${newLanguage}.json`)
    .then(response => response.json())
    .then(data => {
      updateContent(data);
      localStorage.setItem('language', newLanguage); // Store the new language
    })
    .catch(error => console.error('Error loading language file:', error));
}

function updateContent(data) {
  for (const key in data) {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = data[key];
    }
  }
}

// Call languageToggle to load es.json initially
languageToggle('es');

// Add this to your main JavaScript file
document.addEventListener('DOMContentLoaded', () => {
  // Get the overlay and button elements from the DOM
  const overlay = document.getElementById('under-construction-overlay');
  const continueButton = document.getElementById('continue-button');

  if (overlay && continueButton) {
    // Add a click event listener to the "Continue" button
    continueButton.addEventListener('click', () => {
      // Add Tailwind classes to hide the overlay with a smooth transition
      overlay.classList.add('opacity-0', 'pointer-events-none');

      // Optional: Remove the overlay from the DOM after the transition ends
      // This is good practice to keep the DOM clean
      setTimeout(() => {
        overlay.remove();
      }, 500); // The time here MUST match the duration of your transition-opacity
    });
  }
});