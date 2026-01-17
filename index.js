const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.menu-mobile a, .nav-main a');

const tabItems = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content');


// Função darkmode
let darkmode = localStorage.getItem('darkmode');
const themes = document.querySelectorAll('#themeMobileLogo, #themeMobileButton, #themeLogo, #themeMainButton, #themeLogoFooter');

const ativarDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const desativarDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if (darkmode === 'active') ativarDarkMode();

themes.forEach(btn => {
    btn.addEventListener('click', () => {
        darkmode = localStorage.getItem('darkmode');
        darkmode !== 'active' ? ativarDarkMode() : desativarDarkMode();
    })
})


// Função para transição de página
function irPara(pagina) {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = pagina;
    }, 400);
}

// Função para o menu sidebar

function toggleMenu() {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

menuToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    })
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        toggleMenu();
    }
})

tabItems.forEach(item => {
    item.addEventListener('click', function() {
        tabItems.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        this.classList.add('active');

        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    })
})

if (tabItems.length > 0) {
    tabItems[0].classList.add('active');
    const firstTabId = tabItems[0].getAttribute('data-tab');
    document.getElementById(firstTabId).classList.add('active');
}