// mudando de cor o fundo ao clicar
// $(document).ready(function() {
//     $('h1').click(function(){
//         $(this).css('background-color', '#e67e22');
//     });
// });
// js--section-features" id="features"
// scroll triger function  - http://imakewebthings.com/waypoints/

$(document).ready(function () {
    /* For the sticky navigation */
    $(".js--section-features").waypoint(
        function (direction) {
            if (direction == "down") {
                $("nav").addClass("sticky");
            } else {
                $("nav").removeClass("sticky");
            }
        },
        {
            offset: "60px;" // ajuste altura que deve aparecer o navBar
        }
    );

    /* Scroll on buttons */
    $(".js--scroll-to-plans").click(function () {
        $("html, body").animate(
            { scrollTop: $(".js--section-plans").offset().top },
            1500
        );
    });

    $(".js--scroll-to-start").click(function () {
        $("html, body").animate(
            { scrollTop: $(".js--section-features").offset().top },
            1000
        );
    });

    /* Navigation scroll */
    $(function () {
        $("a[href*=\\#]:not([href=\\#])").click(function () {
            if (
                location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length
                    ? target
                    : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html,body").animate(
                        {
                            scrollTop: target.offset().top
                        },
                        1000
                    );
                    return false;
                }
            }
        });
    });

    /* Animations on scroll */
    $(".js--wp-1").waypoint(
        function (direction) {
            $(".js--wp-1").addClass("animated fadeIn");
        },
        {
            offset: "50%" // a imagem aparece em 50% da página
        }
    );

    $(".js--wp-2").waypoint(
        function (direction) {
            $(".js--wp-2").addClass("animated fadeInUp");
        },
        {
            offset: "50%" // a imagem aparece em 50% da página
        }
    );

    $(".js--wp-3").waypoint(
        function (direction) {
            $(".js--wp-3").addClass("animated rotateInUpLeft");
        },
        {
            offset: "50%" // a imagem aparece em 50% da página
        }
    );

    $(".js--wp-4").waypoint(
        function (direction) {
            $(".js--wp-4").addClass("animated pulse");
        },
        {
            offset: "50%" // a imagem aparece em 50% da página
        }
    );

    /* Mobile navigation */
    $(".js--nav-icon").click(function () {
        var nav = $(".js--main-nav");
        var icon = $(".js--nav-icon i");

        nav.slideToggle(200); // tempo pra abrir e fechar o menu

        if (icon.hasClass("ion-md-reorder")) { // mudando o icone de acordo com o click abrir e fechar 
            icon.addClass("ion-md-close");
            icon.removeClass("ion-md-reorder");
        } else {
            icon.addClass("ion-md-reorder");
            icon.removeClass("ion-md-close");
        }
    });
});
