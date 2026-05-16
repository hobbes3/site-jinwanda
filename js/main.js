const fadeBox = document.getElementById('textContainer');
const readMoreBtn = document.getElementById('readMoreBtn');

readMoreBtn.addEventListener('click', function() {
    // Toggle the expanded class
    fadeBox.classList.toggle('expanded');
    
    // Update the button text based on the state
    if (fadeBox.classList.contains('expanded')) {
        readMoreBtn.textContent = 'Show Less';
    } else {
        readMoreBtn.textContent = 'Continue Reading';
    }
});
