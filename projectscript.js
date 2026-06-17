
jQuery(document).ready(function ($) {
    $('.slider-img').on('click', function () {
        $('.slider-img').removeClass('active');
        $(this).addClass('active');
    })
});

(() => {
    const copyrightElement = document.getElementById("copyright");
    copyrightElement.innerHTML = "&copy;  " + new Date().getFullYear() + " https://sorestar.github.io/portfolio/ - All Rights Reserved.";
})();
