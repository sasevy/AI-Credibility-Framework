// JavaScript for digital poster interactivity

// Toggle expandable sections
const setupSectionToggles = () => {
  const buttons = document.querySelectorAll('button[data-target]');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const sectionId = button.dataset.target;
      const section = document.getElementById(sectionId);
      const isActive = section.classList.contains('active');
      document.querySelectorAll('.dropdown-section').forEach(sec => sec.classList.remove('active'));
      if (!isActive) section.classList.add('active');
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
};

// Reveal logic for quote challenge
const setupQuoteReveal = () => {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(reveal => {
    reveal.addEventListener('click', () => {
      reveal.classList.remove('hidden');
    });
  });
};

// Algorithm simulator calculator
const setupSimulator = () => {
  const engagement = document.getElementById('engagement');
  const visual = document.getElementById('visual');
  const timing = document.getElementById('timing');
  const result = document.getElementById('result');

  const calculateReach = () => {
    const e = parseInt(engagement?.value || 0);
    const v = parseInt(visual?.value || 0);
    const t = parseInt(timing?.value || 0);
    const reach = Math.round((e * 2 + v * 1.5 + t * 1.2) * 1000);
    let tier = "📉 Moderate Reach";
    if (reach > 2_000_000) tier = "🌐 Viral!";
    else if (reach > 1_000_000) tier = "📈 Trending";

    if (result) result.textContent = `Result: \"This content would reach ${reach.toLocaleString()} users\" (${tier})`;
  };

  [engagement, visual, timing].forEach(input => input?.addEventListener('input', calculateReach));
  calculateReach();
};

// Initialize all components
window.addEventListener('DOMContentLoaded', () => {
  setupSectionToggles();
  setupQuoteReveal();
  setupSimulator();
});
