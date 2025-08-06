function languageToggle() {
  const currentLanguage = localStorage.getItem('language') || 'es';
  const newLanguage = currentLanguage === 'es' ? 'en' : 'es';

  fetch(`i18n/${newLanguage}.json`)
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

// A simple function to get the user's preferred language
// You might use a more complex method in a real app (e.g., a dropdown selector)
function getLanguage() {
  // This is a simplified example. In a real application, you might use a cookie
  // or a more robust method to store the user's choice.
  const userLang = navigator.language || navigator.userLanguage;
  return userLang.startsWith('es') ? 'es' : 'en'; // Defaults to English
}

// The main translation function
async function applyTranslations() {
  const lang = getLanguage();

  // Dynamically load the correct JSON file
  // The JSON files would be named 'en.json', 'es.json', etc.
  try {
    const response = await fetch(`i18n/${lang}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load translation file: ${lang}.json`);
    }
    const translations = await response.json();

    // Get all elements with the 'data-i18n' attribute
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');

    // Loop through each element and apply the translation
    elementsToTranslate.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = translations[key];

      if (translation) {
        // Update the text content of the element with the translated value
        element.textContent = translation;
      } else {
        console.warn(`Translation key not found: ${key}`);
      }
    });
  } catch (error) {
    console.error('Error applying translations:', error);
  }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', applyTranslations);

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
