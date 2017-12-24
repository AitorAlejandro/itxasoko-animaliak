function toggleMenu() {
    $('#menuToggle').toggleClass('active');
    $('#overlay').toggleClass('open');
}
$('.menu-toggle, #mainNav a').click(function () {
    toggleMenu();
});

$(".lista-animales").delegate("li", "click", function(){
    $(this).addClass('ficha-activa');
});