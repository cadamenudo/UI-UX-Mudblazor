
window.inicializarGraficoGastosTotales = () => {
  const colores = ['#3956E8', '#7459D9', '#E8C239', '#BA68C8', '#AAB8F2', '#64748B'];

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

  const categoriasGasto = {
    labels: ['Alimentación', 'Casa', 'Cuidado Personal', 'Deuda', 'Entretenimiento', 'Impuestos'],
    data: [1200, 900, 400, 600, 350, 450]
  };

  const subcategorias = {
    alimentacion: { labels: ['Supermercado', 'Comidas fuera', 'Café'], data: [800, 300, 100] },
    casa: { labels: ['Hipoteca', 'Servicios', 'Mantenimiento'], data: [500, 250, 150] },
    cuidado: { labels: ['Higiene', 'Peluquería'], data: [250, 150] },
    dependientes: { labels: ['Escuela', 'Ropa', 'Cuidado niños'], data: [400, 200, 150] },
    deuda: { labels: ['Tarjetas', 'Préstamos'], data: [350, 250] },
    entretenimiento: { labels: ['Cine', 'Streaming'], data: [200, 150] },
    medicos: { labels: ['Seguro', 'Copagos'], data: [300, 150] },
    impuestos: { labels: ['Federal', 'Propiedad'], data: [300, 150] },
    donaciones: { labels: ['ONG', 'Familia'], data: [200, 150] },
    seguros: { labels: ['Auto', 'Vida'], data: [250, 150] },
    telecom: { labels: ['Internet', 'Celular'], data: [100, 80] },
    transporte: { labels: ['Gasolina', 'Mantenimiento'], data: [200, 100] }
  };

  new Chart(document.getElementById('graficoDonaGastos').getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: categoriasGasto.labels,
      datasets: [{
        data: categoriasGasto.data,
        backgroundColor: colores
      }]
    },
    options: {
      responsive: true,
      cutout: '60%',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#fff',
          titleColor: '#000',
          bodyColor: '#000',
          borderWidth: 1,
          borderColor: '#ccc',
          callbacks: {
            label: ctx => `${ctx.label}: $${ctx.formattedValue}`
          }
        }
      }
    },
    plugins: [centerTextPlugin]
  });

  let chartSub = new Chart(document.getElementById('graficoSubcategoria').getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: subcategorias['alimentacion'].labels,
      datasets: [{
        data: subcategorias['alimentacion'].data,
        backgroundColor: colores
      }]
    },
    options: {
      responsive: true,
      cutout: '60%',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#fff',
          titleColor: '#000',
          bodyColor: '#000',
          borderWidth: 1,
          borderColor: '#ccc',
          callbacks: {
            label: ctx => `${ctx.label}: $${ctx.formattedValue}`
          }
        }
      }
    },
    plugins: [centerTextPlugin]
  });

  document.getElementById('selectorCategoria').addEventListener('change', function () {
    const key = this.value;
    if (subcategorias[key]) {
      chartSub.data.labels = subcategorias[key].labels;
      chartSub.data.datasets[0].data = subcategorias[key].data;
      chartSub.update();
    }
  });
};
