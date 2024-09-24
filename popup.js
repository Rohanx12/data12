// Show popup after 30 seconds
window.onload = function() {
    setTimeout(function() {
        document.getElementById('popup').style.display = 'flex';
    }, 30000);

    // Close popup when "Skip" is clicked
    document.getElementById('skip').onclick = function() {
        document.getElementById('popup').style.display = 'none';
    };

    // Close popup when clicking outside the popup content
    document.querySelector('.popup-overlay').onclick = function(event) {
        if (event.target === document.querySelector('.popup-overlay')) {
            document.getElementById('popup').style.display = 'none';
        }
    };
};
