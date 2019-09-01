$(document).ready(function () {
    $('.navbar-toggler').html("<i class='fa fa-arrow-down fa-3x' style='color:#f15025'></i>")


    // init Isotope
    var $grid = $('.menu-dishes').isotope({
        // options
    });

    function isotopeFilter(deafult) {
        var filterValue = $(this).attr('data-filter');
        $('.menu button').removeClass('bg-main');
        if (deafult) $(`[data-filter="${deafult}"]`).addClass('bg-main');
        $(this).addClass('bg-main')
        $grid.isotope({
            filter: filterValue || deafult
        });
    }

    isotopeFilter('*');


    // filter items on button click
    $('.menu-btn-group').on('click', 'button', isotopeFilter);

    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });

    const expandNav = () => {
        $('nav .nav-list').toggleClass('active');
    }

    $('nav .nav-btn').on('click', expandNav);

    $('nav a').on('click', expandNav)


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
    bgNav();

    $(window).on('scroll', bgNav);
});