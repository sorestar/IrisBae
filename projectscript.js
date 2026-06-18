
jQuery(document).ready(function ($) {
    $('.slider-img').on('click', function () {
        //thisOne 은 열리는거
        const allOnes = $('.slider-img');
        const thisOne = $(this);
        const thisId = this.id;
        allOnes.css('background-color', 'grey');
        console.log(thisId);
        if(thisId == "lights") {
            //thisOne.css('background-image', "url('images/favicon.png')");
            thisOne.css('background-color', 'red');
        }
        else if(thisId == "shadow") {
            thisOne.css('background-color', 'orange');

        }
        else if(thisId == "mask") {
            thisOne.css('background-color', 'black');

        }
        else if(thisId == "cafeteria") {
            thisOne.css('background-color', 'green');

        }
        else if(thisId == "java") {
            thisOne.css('background-color', 'blue');

        }
        
        allOnes.removeClass('active');
        thisOne.addClass('active');
    });
});

(() => {
    const copyrightElement = document.getElementById("copyright");
    copyrightElement.innerHTML = "&copy;  " + new Date().getFullYear() + " https://sorestar.github.io/portfolio/ - All Rights Reserved.";
})();
