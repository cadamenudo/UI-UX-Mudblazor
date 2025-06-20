// wwwroot/js/grafico-ingresos-gastos.js
window.inicializarGraficoLinea = () => {
  const ctx = document.getElementById('graficoLinea').getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [
        {
          label: 'Ingresos',
          data: [5000, 4800, 5300, 5100, 5500],
          borderColor: '#3956E8',
          backgroundColor: 'rgba(57, 86, 232, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 5
        },
        {
          label: 'Gastos',
          data: [3200, 3500, 3400, 3600, 3700],
          borderColor: '#E8C239',
          backgroundColor: 'rgba(232, 194, 57, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 5
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          backgroundColor: '#fff',
          titleColor: '#000',
          bodyColor: '#000',
          borderColor: '#ccc',
          borderWidth: 1,
          callbacks: {
            label: ctx => `${ctx.dataset.label}: $${ctx.parsed.y.toLocaleString()}`
          }
        },
        legend: {
          labels: {
            color: '#000'
          }
        }
      },
      scales: {
        x: {
          ticks: { color: '#64748B' },
          grid: { display: false }
        },
        y: {
          ticks: { color: '#64748B' },
          grid: { color: '#f0f0f0' }
        }
      }
    }
  });
};
