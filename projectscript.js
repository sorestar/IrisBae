
jQuery(document).ready(function ($) {
    $('.slider-img').on('click', function () {
        //thisOne 은 열리는거
        const allOnes = $('.slider-img');
        const thisOne = $(this);
        const thisId = this.id;
        allOnes.css('background-color', 'grey');
        console.log(thisId);
        if (thisId == "lights") {
            //thisOne.css('background-image', "url('images/favicon.png')");
            thisOne.css('background-color', 'red');
        }
        else if (thisId == "shadow") {
            thisOne.css('background-color', 'orange');

        }
        else if (thisId == "mask") {
            thisOne.css('background-color', 'green');

        }
        else if (thisId == "cafeteria") {
            thisOne.css('background-color', 'blue');

        }
        else if (thisId == "java") {
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
    loop: true,
    initialSlide: 1,

    on: {
        init: updateText, resize,
        slideChange: updateText,
    },

    pagination: {
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
 document.getElementById("korButton").addEventListener('click', () => {
        window.location.reload();
    });

     document.getElementById("engButton").addEventListener('click', () => {
        window.location.reload();
    });


function updateText() {
    const lang = localStorage.getItem("lang") || "eng";
    let captions;
    if(lang == "eng"){

     captions = ['', 'this is my wacky java game.', 'this is a mask thing', 'this is my shadow', "Co-coordinator of the LightsUp Conference<br> held by the Sustainable Energy Club at Purdue University<br>"
        + "Focus on Outreach & VR Room<br>"];
    }
    else{
         captions = ['', '자바게임.', '마스크 뭐시기', '그림자',"학회"];
    }
    document.querySelector('.projectText').innerHTML = captions[this.realIndex + 1];
}
function resize() {
    const width = window.innerWidth;
    const deco = document.getElementById('deco');
    const cardList = document.querySelector('.card-list');
    const dummy = document.querySelector('.dummy');
    const announce = document.querySelector('.announce');
    if (width < 760) {
        deco.style.height = '0px';
        dummy.style.height = '120vh';
        announce.style.height = '46vh';
        announce.style.fontSize = '15px';
    } else if (width >= 760 && width < 1024) {
        deco.style.height = '140px';
        deco.style.marginLeft = '65%';
        dummy.style.height = '0px';
        announce.style.height = '0px';
        announce.style.fontSize = '0px';
        cardList.style.marginLeft = "70px";
    }
    else if (width >= 1024) {
        deco.style.height = '140px';
        deco.style.marginLeft = '44%';
        dummy.style.height = '0px';
        announce.style.height = '0px';
        announce.style.fontSize = '0px';
        cardList.style.marginLeft = "39px";

    }
}
window.onresize = resize();
/*
const width = window.innerWidth;
    if(width < 760) {
        const cardList = document.querySelector('.card-list');
        cardList.style.marginLeft = "18vw";
        console.log("did");
    }
    */