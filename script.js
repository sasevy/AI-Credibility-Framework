document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button[data-target]');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      const section = document.getElementById(targetId);
      section.classList.toggle('active');
    });
  });

  const engagement = document.getElementById('engagement');
  const visual = document.getElementById('visual');
  const timing = document.getElementById('timing');
  const result = document.getElementById('result');

  function calculateReach() {
    const reach = Math.floor((
      parseInt(engagement.value || 0) * 2 +
      parseInt(visual.value || 0) * 1.5 +
      parseInt(timing.value || 0) * 1.2
    ));
    result.textContent = `Result: "This content would reach ${reach.toLocaleString()} users"`;
  }

  [engagement, visual, timing].forEach(input => {
    input.addEventListener('input', calculateReach);
  });
});
