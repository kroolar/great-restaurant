$(document).ready(function () {

    // Init Isotope
    var $grid = $('.menu-dishes').isotope({});

    function isotopeFilter(deafult) {
        var filterValue = $(this).attr('data-filter');
        $('.menu button').removeClass('bg-main');
        if (deafult) $(`[data-filter="${deafult}"]`).addClass('bg-main');
        $(this).addClass('bg-main')
        $grid.isotope({
            filter: filterValue || deafult
        });
    }

    // Domyślne wyszukanie wszystkich dań
    isotopeFilter('*');


    // Filtrowanie po naciśnięciu przycisku
    $('.menu-btn-group').on('click', 'button', isotopeFilter);

    // Isotope
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });

    // Rozsuwanie nawigacji
    const expandNav = () => {
        $('nav .nav-list').toggleClass('active');
    }

    // Naciśnięcie przycisku rozwijania
    $('nav .nav-btn').on('click', expandNav);

    // Naciśnięcie, któregoś elementu menu
    $('nav a').on('click', expandNav)


    // Funkcja zmieniająca przeźroczystość nawigacji
    const bgNav = () => {
        if (pageYOffset >= 200) {
            $('.nav-list').addClass('bg-main')
            $('.nav-list').removeClass('bg-transparent')
            console.log('dodano')
        } else if (pageYOffset < 200 && window.innerWidth >= 768) {
            $('.nav-list').addClass('bg-transparent')
            $('.nav-list').removeClass('bg-main')
        }
    }

    // Pierwsze ustawienie przeźroczystości nawigacji
    bgNav();

    // Sprzwdzanie przeźroczystości nawigacji przy kazdym scrollowaniu
    $(window).on('scroll', bgNav);
});