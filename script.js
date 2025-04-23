// Dark/Light Mode Toggle
const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleButton.textContent = body.classList.contains('dark-mode') ? '🌞' : '🌙';
});

// Skills Chart
const ctx = document.getElementById('skillsChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Arduino', 'C++', 'Python', 'Electronics', 'Problem Solving', 'Robotics'],
    datasets: [{
      label: 'Skill Level (%)',
      data: [95, 90, 85, 88, 92, 94],
      backgroundColor: '#00bfa5',
      borderRadius: 10
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Eyob Geletaw - Technical Skills',
        font: { size: 18 },
        color: '#111'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10
        }
      }
    }
  }
});
