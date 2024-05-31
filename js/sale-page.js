window.addEventListener('scroll', function() {
    var header = document.getElementById('header-bar');
    var sidebar = document.getElementById('sidebar');
    var scrollPosition = window.scrollY;

    if (scrollPosition < 80) { // You can adjust this value as needed

        header.style.position = 'fixed';
        header.style.top = '0';
        sidebar.style.position = 'fixed';
        sidebar.style.top = '80px'; // Same as the initial value in CSS


    } else {
      
        header.style.position = 'static';
        sidebar.style.position = 'static';
    }
});
