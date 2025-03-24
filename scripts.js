document.addEventListener('DOMContentLoaded', function () {
    const showImageButton = document.getElementById('showImageButton');
    showImageButton.addEventListener('click', function () {
        const imageUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fphotos%2Ftree-sunset-clouds-sky-silhouette-736885%2F&psig=AOvVaw2bbJdUPkrDlEeVTmowcmtj&ust=1742896229145000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNDvh8e4oowDFQAAAAAdAAAAABAE'; // Replace with your image URL
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
