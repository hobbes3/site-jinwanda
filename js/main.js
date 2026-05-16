// Read More button
$('#readMoreBtn').on('click', function() {
    // 1. Toggle the expanded class on the container
    const isExpanded = $('#textContainer').toggleClass('expanded').hasClass('expanded');
    
    // 2. Dynamically change the button text based on the new state
    $(this).text(isExpanded ? 'Show Less' : 'Read More');
});

// Auto-caption the fabric images
const imageCatalog = [
    "images/fabrics/supima cotton.jpg", 
    "images/fabrics/silk.jpg",
    "images/fabrics/nylon-taffeta.jpg",
    "images/fabrics/poly-cotton.jpg",
    "images/fabrics/t800.jpg",
    "images/fabrics/bamboo.jpg",
    "images/fabrics/nylon.jpg", 
    "images/fabrics/polyester chiffon.jpg", 
    "images/fabrics/polar fleece.jpg", 
    "images/fabrics/linen.jpg", 
    "images/fabrics/satin.jpg", 
    "images/fabrics/tweed.jpg", 
];

// Loop through the catalog to build the UI
$.each(imageCatalog, function(index, filePath) {
    const match = filePath.match(/fabrics\/([^.]+)/);
    const filename = match ? match[1] : filePath;

    const $card = $(`
        <div class="col-3 col-6-medium col-6-small image-card">
            <img src="${filePath}" alt="${filename}">
            <div class="banner-overlay">${filename}</div>
        </div>
    `);

    $('#fabric-catalog').append($card);
});