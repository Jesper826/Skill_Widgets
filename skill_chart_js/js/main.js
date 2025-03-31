document.addEventListener("DOMContentLoaded", function () {
    fetch("https://api.weatherapi.com/v1/forecast.json?key=01945d06a89e4a2cba1120907250403&q=Amsterdam&aqi=no")
        .then(response => response.json())
        .then(data => {
            console.log(data);

            const hourlyData = data.forecast.forecastday[0].hour;
            const labels = hourlyData.map(entry => entry.time.split(" ")[1]);
            const tempData = hourlyData.map(entry => entry.temp_c);
            const windData = hourlyData.map(entry => entry.wind_kph);
            const humidityData = hourlyData.map(entry => entry.humidity);

            const chartConfig = (ctx, type, label, data, bgColor, borderColor) => {
                return new Chart(ctx, {
                    type: type,
                    data: {
                        labels: labels,
                        datasets: [{
                            label: label,
                            data: data,
                            backgroundColor: bgColor,
                            borderColor: borderColor,
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            };

            chartConfig(
                document.getElementById('chart1').getContext('2d'),
                'line',
                'Temperatuur (°C)',
                tempData,
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 1)'
            );

            chartConfig(
                document.getElementById('chart2').getContext('2d'),
                'bar',
                'Windsnelheid (km/u)',
                windData,
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 1)'
            );

            chartConfig(
                document.getElementById('chart3').getContext('2d'),
                'doughnut',
                'Luchtvochtigheid (%)',
                humidityData,
                ['rgba(75, 192, 192, 0.5)', 'rgba(200, 200, 200, 0.2)'],
                null
            );
        })
        .catch(error => console.error("Fout bij ophalen data:", error));

    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" });
        document.getElementById("current-time").textContent = timeString;
    }

    setInterval(updateTime, 1000);
    updateTime(); 
});
