
const centerTextPlugin = {
  id: 'centerText',
  beforeDraw(chart) {
    const { width, height } = chart;
    const ctx = chart.ctx;
    const total = chart.config.data.datasets[0].data.reduce((a, b) => a + b, 0);

    ctx.save();
    ctx.font = 'bold 14px "Greycliff CF", sans-serif';
    ctx.fillStyle = '#64748B';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Total', width / 2, height / 2 - 12);

    ctx.font = 'bold 32px "Greycliff CF", sans-serif';
    ctx.fillStyle = '#000';
    ctx.fillText(`$${total.toLocaleString()}`, width / 2, height / 2 + 12);
    ctx.restore();
  }
};

new Chart(document.getElementById('graficoDonaIngresos').getContext('2d'), {
  type: 'doughnut',
  data: {
    labels: ['Sueldo', 'Negocio', 'Inversiones', 'Otros'],
    datasets: [{
      data: [4200, 1300, 900, 600],
      backgroundColor: ['#3956E8', '#7459D9', '#E8C239', '#AAB8F2'],
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    cutout: '60%',
    plugins: {
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#000',
        bodyColor: '#000',
        borderWidth: 1,
        borderColor: '#ccc',
        callbacks: {
          label: function(context) {
            return `${context.label}: $${context.formattedValue}`;
          }
        }
      },
      legend: { display: false }
    }
  },
  plugins: [centerTextPlugin]
});
