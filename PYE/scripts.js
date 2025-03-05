$(document).ready(function() {
    $('#estadisticasTable').DataTable(); // Inicializar DataTables
});

// Datos de precios de casas (en millones)
const preciosCasas = [1.5, 3.8, 2.7, 5.0, 2.2, 4.5, 3.2, 1.8, 6.0, 7.3, 5.8, 3.0, 4.0, 2.5, 6.3, 4.2, 5.1, 3.5, 4.7, 2.0, 5.5, 3.3, 6.7, 3.6, 2.3, 4.1, 1.9, 2.8, 4.9, 5.4, 3.4, 4.3, 6.2, 7.0, 3.9, 6.1, 4.6, 3.7, 5.2, 2.1, 6.5, 2.9, 5.6, 3.1, 4.4, 6.4, 5.7, 3.8, 2.6, 7.1, 6.8, 5.9, 4.8, 1.7, 5.3, 3.3, 2.4, 3.1, 4.0, 6.3, 5.0, 3.5, 4.9, 6.2, 2.1, 3.4, 4.1, 5.7, 3.6, 4.5, 6.9, 7.2, 4.7];

// Crear gráfico de distribución de precios de casas
const ctx1 = document.getElementById('precioDistribucion').getContext('2d');
const precioDistribucionChart = new Chart(ctx1, {
    type: 'line', // Cambié de 'histogram' a 'line'
    data: {
        labels: preciosCasas,
        datasets: [{
            label: 'Distribución de Precios',
            data: preciosCasas,
            backgroundColor: 'rgba(0, 123, 255, 0.6)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1,
            fill: false // No relleno debajo de la línea
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Precio (millones de pesos)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Frecuencia'
                }
            }
        }
    }
});

// Crear gráfico de frecuencias en intervalos
const ctx2 = document.getElementById('frecuenciaIntervalos').getContext('2d');
const frecuenciaIntervalosChart = new Chart(ctx2, {
    type: 'bar', // Mantengo 'bar' para el gráfico de barras
    data: {
        labels: ['1.00 - 1.67', '1.67 - 2.34', '2.34 - 3.01', '3.01 - 3.68', '3.68 - 4.35', '4.35 - 5.02', '5.02 - 5.69', '5.69 - 6.36', '6.36 - 7.03', '7.03 - 7.70'],
        datasets: [{
            label: 'Frecuencia',
            data: [13, 6, 12, 18, 12, 15, 9, 7, 3, 5],
            backgroundColor: 'rgba(255, 165, 0, 0.6)',
            borderColor: 'rgba(255, 165, 0, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Frecuencia'
                }
            }
        }
    }
});
