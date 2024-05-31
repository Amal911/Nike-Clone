document.addEventListener('DOMContentLoaded', function () {
    const headings = document.querySelectorAll('.col-md-4 h3');

    headings.forEach(heading => {
        heading.addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});