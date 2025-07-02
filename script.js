document.addEventListener('DOMContentLoaded', function() {
    const openMailModalBtn = document.getElementById('openMailModal');
    const mailModal = document.getElementById('mailModal');
    const closeButton = document.querySelector('.close-button');

    openMailModalBtn.addEventListener('click', function() {
        mailModal.style.display = 'flex';
    });

    closeButton.addEventListener('click', function() {
        mailModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == mailModal) {
            mailModal.style.display = 'none';
        }
    });
});