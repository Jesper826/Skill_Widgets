document.addEventListener("DOMContentLoaded", function() {
   fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const images = data.images; 

            const randomIndex = Math.floor(Math.random() * images.length);
            const selectedImage = images[randomIndex];

            document.getElementById("dynamicImage").src = selectedImage.src;
            document.getElementById("dynamicTitle").textContent = selectedImage.title;
            document.getElementById("dynamicText").textContent = selectedImage.text;
        })
        .catch(error => {
            console.error('Fout bij het laden van JSON:', error);
        });
});
    