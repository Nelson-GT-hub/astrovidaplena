{ threshold: 0.1 };

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
   
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');

    // menu
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show'); 

        // visibilidad del menú
        if (menu.classList.contains('show')) {
            menu.style.maxHeight = menu.scrollHeight + 'px'; // Expandir el menú
        } else {
            menu.style.maxHeight = '0'; // Colapsar el menú
        }
    });

    
    menu.style.maxHeight = '0';

    const menuItems = menu.querySelectorAll('a');
    const underline = document.querySelector('.menu-underline');

    function moveUnderline(item) {
        const itemRect = item.getBoundingClientRect();
        const menuRect = menu.getBoundingClientRect();

        underline.style.width = `${itemRect.width}px`;
        underline.style.left = `${itemRect.left - menuRect.left}px`;
    }

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => moveUnderline(item));
    });

    menu.addEventListener('mouseleave', () => {
        const activeItem = menu.querySelector('a.active') || menuItems[0];
        moveUnderline(activeItem);
    });

    
    const activeItem = menu.querySelector('a.active') || menuItems[0];
    moveUnderline(activeItem);

});


const socialMediaList = document.querySelector('.social-media-list');
socialMediaList.innerHTML += `
    <li><a href="https://www.instagram.com/astrovidaplena/" target="_blank">Instagram</a></li>
    <li><a href="https://www.facebook.com/guerreroveronik?locale=es_LA" target="_blank">Facebook</a></li>
`;