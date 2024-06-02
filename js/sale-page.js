document.getElementById('toggleSidebarBtn').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar-container');
    var toggleBtn = document.getElementById('toggleSidebarBtn');
    var toggleText = document.getElementById('filter-text');
    // var iconBtn = document.getElementById('iconBtn');
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
        // iconBtn.style.display = 'block';
        toggleText.textContent = 'Hide Filter';
    } else {
        sidebar.style.display = 'none';
        // iconBtn.style.display = 'block';
        toggleText.textContent = 'Show Filter';
    }
});
