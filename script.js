// JavaScript untuk menangani form feedback
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form dari pengiriman default

    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;

    // Tampilkan alert sebagai konfirmasi
    alert(`Terima kasih, ${name}! Feedback Anda telah diterima:\n"${feedback}"`);

    // Reset form setelah pengiriman
    this.reset();
});