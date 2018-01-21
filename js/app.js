function toggleMenu() {
    $('#menuToggle').toggleClass('active');
    $('#overlay').toggleClass('open');
    $('.lista-animales li').removeClass('ficha-activa').addClass('ficha-no-activa');
}

function stopAllVideos() {
    $('.video-wrapper iframe').each(function(){
        this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });
}

$('.menu-toggle, #mainNav a').click(function () {
    toggleMenu();
});

$(".lista-animales").delegate("li", "click", function(){
    $(this).removeClass('ficha-no-activa').addClass('ficha-activa');
    $('body').addClass('overflow-hidden');
});

$(".cerrar-ficha").click(function (e) {
    e.stopPropagation();
    $(this).closest('li').removeClass('ficha-activa').addClass('ficha-no-activa');
    $('body').removeClass('overflow-hidden');
    stopAllVideos();
});
