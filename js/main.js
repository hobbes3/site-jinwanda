// Read More button
$('#readMoreBtn').on('click', function() {
    // 1. Toggle the expanded class on the container
    const isExpanded = $('#textContainer').toggleClass('expanded').hasClass('expanded');
    
    // 2. Dynamically change the button text based on the new state
    $(this).text(isExpanded ? 'Show Less' : 'Read More');
});

// Auto-caption the fabric images
const imageCatalog = [
    "images/fabrics/nylon-taffeta.jpeg",
    "images/fabrics/silk.jpeg",
    "images/fabrics/poly-cotton.jpeg",
    "images/fabrics/t800.jpeg",
    "images/fabrics/bamboo.jpeg",
    "images/fabrics/nylon.jpeg", 
    "images/fabrics/polyester chiffon.jpeg", 
    "images/fabrics/polar fleece.jpeg", 
    "images/fabrics/linen.jpeg", 
];

// Loop through the catalog to build the UI
$.each(imageCatalog, function(index, filePath) {
    const match = filePath.match(/fabrics\/([^.]+)/);
    const filename = match ? match[1] : filePath;

    const $card = $(`
        <div class="col-4 col-6-medium col-12-small image-card">
            <img src="${filePath}" alt="${filename}">
            <div class="banner-overlay">${filename}</div>
        </div>
    `);

    $('#fabric-catalog').append($card);
});