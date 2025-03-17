function loadJSONData() {
    fetch('./json/data.json') 
        .then(response => response.json())
        .then(data => {
            jsonData = data;
            loadDynamicContent(0);
        })
        .catch(error => {
            console.error('Fout bij het laden van JSON-data:', error);
        });
}

function loadDynamicContent(index) {
    const imageWidget = document.getElementById('dynamicImage');
    const titleWidget = document.getElementById('dynamicTitle');
    const textWidget = document.getElementById('dynamicText');

    if (index >= 0 && index < jsonData.images.length) {
        imageWidget.src = jsonData.images[index].src;
        titleWidget.innerText = `Afbeelding ${index + 1}`;
        textWidget.innerText = jsonData.images[index].text;
    }
}

loadJSONData();
    
function loadDynamicContent(index) {
    const imageWidget = document.getElementById('dynamicImage');
    const titleWidget = document.getElementById('dynamicTitle');
    const textWidget = document.getElementById('dynamicText');

    if (index >= 0 && index < jsonData.images.length) {
        imageWidget.src = jsonData.images[index].src;
        titleWidget.innerText = `Afbeelding ${index + 1}`;
        textWidget.innerText = jsonData.images[index].text;
    }
}

loadDynamicContent(0);
