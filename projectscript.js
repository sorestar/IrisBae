
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
            thisOne.css('background-color', 'green');

        }
        else if(thisId == "cafeteria") {
            thisOne.css('background-color', 'blue');

        }
        else if(thisId == "java") {
            thisOne.css('background-color', 'purple');

        }
        
        allOnes.removeClass('active');
        thisOne.addClass('active');
    });
});
(() => {
    const copyrightElement = document.getElementById("copyright");
    copyrightElement.innerHTML = "&copy;  " + new Date().getFullYear() + " https://sorestar.github.io/portfolio/ - All Rights Reserved.";
})();
new Swiper('.card-wrapper', {
    loop:true,

    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    },
    breakpoints: {
        0: {
            slidesPerView: 1
            
        },
        760: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});
/*
window.onresize = function() {
    const width = window.innerWidth;
        const cardList = document.querySelector('.card-list');
    if(width < 760) {
        cardList.style.marginLeft = "15vw";
        console.log("did");
    }
    else if (width > 760) {
        cardList.style.marginLeft = "39px";

    }
    
};
const width = window.innerWidth;
    if(width < 760) {
        const cardList = document.querySelector('.card-list');
        cardList.style.marginLeft = "18vw";
        console.log("did");
    }
    */