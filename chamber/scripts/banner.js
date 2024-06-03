function toggleBanner() {
    const today = new Date().getDay();
    const banner = document.getElementById('banner');
    if (today >= 1 && today <= 3) { // Monday to Wednesday
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}

// Close banner
document.getElementById('closeBanner').addEventListener('click', () => {
    document.getElementById('banner').style.display = 'none';
});

toggleBanner();
