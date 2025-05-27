document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("page");
});
setTimeout(() => {
  const loading = document.getElementById('loading');
  const main = document.getElementById('main');
  if (loading && main) {
    loading.style.zIndex = '0';
    loading.style.display = 'none';
    main.style.zIndex = '1000';
  }
},1000);
                
setTimeout(() => {
  const loading = document.getElementById('ack');
  const main = document.getElementById('main');
  if (loading && main) {
    loading.style.zIndex = '0';
    loading.style.display = 'none'; 
    main.style.zIndex = '1000';
  }
}, 1000);

function menutoggle() {
  const nav = document.querySelector("nav");
  const toggle = document.getElementById("toggle");
  const toggleMenu = document.querySelector(".togglemenu");
  const icon = toggleMenu.querySelector("i");

  nav.classList.toggle("show");
  toggle.classList.toggle("show");
 

  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('toggle');

  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeIcon.textContent = '☼'; 
  } else {
    themeIcon.textContent = '☽';
  }
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}
document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  const themeIcon = document.getElementById('theme-icon');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = '☼'; 
  } else {
    themeIcon.textContent = '☽'; 
  }
});
document.addEventListener("scroll", function () {
  const section = document.querySelector("#connect");
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    section.classList.add("visible");
  }
});
