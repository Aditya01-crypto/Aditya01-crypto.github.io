document.addEventListener('DOMContentLoaded', function () {
    const showImageButton = document.getElementById('showImageButton');
    showImageButton.addEventListener('click', function () {
        const imageUrl = 'https://example.com/your-image.jpg'; // Replace with your image URL
        const imageOverlay = document.createElement('div');
        imageOverlay.style.position = 'fixed';
        imageOverlay.style.top = '0';
        imageOverlay.style.left = '0';
        imageOverlay.style.width = '100%';
        imageOverlay.style.height = '100%';
        imageOverlay.style.backgroundImage = `url(${imageUrl})`;
        imageOverlay.style.backgroundSize = 'cover';
        imageOverlay.style.backgroundPosition = 'center';
        imageOverlay.style.zIndex = '9999';
        imageOverlay.style.cursor = 'pointer';
        document.body.appendChild(imageOverlay);
    });
});
