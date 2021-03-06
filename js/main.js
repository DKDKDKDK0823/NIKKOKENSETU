$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$('.modal').on('shown.bs.modal', function () {
    var curModal = this;
    $('.modal').each(function(){
        if(this != curModal){
            $(this).modal('hide');
        }
    });
});

$(function(){
    var mySwiper = new Swiper ('.swiper-container-ver2', {
        effect: 'fade',
        loop: true,
        cubeEffect: {
          slideShadows: false,
           shadowOffset: 20,
           shadowScale: 0.94,
        },
         navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
});

