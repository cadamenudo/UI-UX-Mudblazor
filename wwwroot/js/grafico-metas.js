function dibujarGraficoMetas() {
    const ctxMetas = document.getElementById('graficoMetas').getContext('2d');
    new Chart(ctxMetas, {
        type: 'bar',
        data: {
            labels: ['Meta', 'Progreso'],
            datasets: [
                {
                    label: 'Meta',
                    data: [5000, null],
                    backgroundColor: '#E8C239',
                    borderRadius: 10,
                    barThickness: 50,
                    categoryPercentage: 0.6,
                    stack: 'progreso'
                },
                {
                    label: 'Faltante',
                    data: [null, 2500],
                    backgroundColor: '#AAB8F2',
                    borderRadius: { bottomLeft: 10, bottomRight: 10 },
                    barThickness: 50,
                    categoryPercentage: 0.6,
                    stack: 'progreso'
                },
                {
                    label: 'Logrado',
                    data: [null, 2500],
                    backgroundColor: '#3956E8',
                    borderRadius: { topLeft: 10, topRight: 10 },
                    barThickness: 50,
                    categoryPercentage: 0.6,
                    stack: 'progreso'
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
                legend: { display: false }
            },
            scales: {
                x: {
                    stacked: true,
                    grid: { display: false },
                    ticks: { color: '#64748B' }
                },
                y: {
                    stacked: true,
                    display: false,
                    grid: { display: false }
                }
            }
        }
    });
}