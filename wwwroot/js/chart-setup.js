window.initCharts = function () {
  new Chart(document.getElementById('graficoMetas'), {
    type: 'bar',
    data: {
      labels: ['Meta', 'Progreso'],
      datasets: [ ... ]
    },
    options: { ... }
  });

  // Gráfico de línea
  new Chart(document.getElementById('graficoLineal'), { ... });

  // Donas
  new Chart(document.getElementById('graficoDonaIngresos'), { ... });
  new Chart(document.getElementById('graficoDonaGastos'), { ... });
  new Chart(document.getElementById('graficoSubcategoria'), { ... });
}
