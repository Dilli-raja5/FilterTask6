
    // Get filter buttons and product cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.items');


    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked filter button
            button.classList.add('active');
            // Get the filter value from the data attribute
            const filterValue = button.getAttribute('data-filter');
            // Loop through product cards and show/hide based on filter
            productCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
    
        const popup = document.getElementById('popimage');
        const Image = document.getElementById('Image');
        const closeModal = document.querySelector('.close');
    
        productCards.forEach(card => {
            card.addEventListener('click', () => {
                const imageUrl = card.querySelector('img').getAttribute('src');
                popup.style.display = 'block';
                Image.src = imageUrl;
            });
        });
    
        closeModal.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    
        window.addEventListener('click', event => {
            if (event.target === modalf) {
                popup.style.display = 'none';
            }
        });
    });