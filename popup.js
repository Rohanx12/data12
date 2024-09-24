// Show popup after 30 seconds
window.onload = function() {
    setTimeout(function() {
        document.getElementById('popup').style.display = 'flex';
    }, 300);

    // Close popup when "Skip" is clicked
    document.getElementById('skip').onclick = function(event) {
        event.preventDefault(); // Prevent the default jump behavior
        document.getElementById('popup').style.display = 'none';
    };

    // Close popup when clicking outside the popup content
    document.querySelector('.popup-overlay').onclick = function(event) {
        if (event.target === document.querySelector('.popup-overlay')) {
            event.preventDefault(); // Prevent the default jump behavior
            document.getElementById('popup').style.display = 'none';
        }
    };
};
