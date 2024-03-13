var sidemenu = document.getElementById('sidemenu');
var sidebar = document.getElementById('sidebar');
var closex = document.getElementById('closex');

sidemenu.addEventListener('click', () => {
    sidebar.classList.remove('d-none');
    sidebar.classList.add('d-block');
})

closex.addEventListener('click', () => {
    sidebar.classList.remove('d-block');
    sidebar.classList.add('d-none');
})