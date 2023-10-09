const contato = $('.contato');
const depoimentos = $('.depoimentos');
const sobre = $('.sobre');
const btn = $('#btnTop');
const menuItem = document.getElementById('menuitem');

menuItem.style.maxHeight = '0px';
function menuToggle() {
    if (menuItem.style.maxHeight == '0px') {
        menuItem.style.maxHeight = '200px';
    } else {
        menuItem.style.maxHeight = '00px';
    }
}

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

//header
contato.click(function() {
    $('html, body').animate({scrollTop:5000}, 'slow');
});
depoimentos.click(function() {
    $('html, body').animate({scrollTop:3100}, 'slow');
});
sobre.click(function() {
    $('html, body').animate({scrollTop:2350}, 'slow');
});

//botão voltar para cima
btn.click(function() {
    $('html, body').animate({scrollTop:0}, 'slow');
});
document.addEventListener('scroll',ocultar)
function ocultar(){
    if(window.scrollY > 10){
        $('#btnTop').show();
    } else {
        $('#btnTop').hide();
    }
}
ocultar()