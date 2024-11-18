function showGallery() {
    const gallery = document.getElementById('gallery');
    gallery.style.display = 'block';
    window.scrollTo({ top: gallery.offsetTop, behavior: 'smooth' });
}
