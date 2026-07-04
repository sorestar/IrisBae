
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
    initialSlide: 4,

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
    let captions, captions2;
    if (lang == "eng") {
        console.log("eng");
        captions = ['', "<br>Solo Developer of Cafeteria App <br>for Anyang Girls' High School", "<br>Solo Developer<br>Presented at the 2026 Fractal Showcase<br>Created during Global Game Jam",
            '<br>Lead Director of Metroidvania Game<br>Created during 2024 GMTK Game Jam', "<br>Co-coordinator of the LightsUp Conference<br>"
            + "Focus on Outreach & VR Room"];
        captions2 = ['',
            '✦ Integrated public APIs for real-time dining data'
            + '<br>✦ Implemented backend using Firebase Realtime Database and managed full development'
            + '<br>✦ Currently on Closed Testing stage'
            + '<br><br><b>FUNCTIONS</b><br><br>'
            + '&nbsp;&nbsp;This app has a rating system!'
            + " You can rate the overall score of the meal, and see how everyone<br> else rated it thanks to Firebase."
            + '<br>The app has been postponed for a long time, as the testers would have to open the app daily.'
            + '<br>&nbsp;&nbsp; I did not want to give everyone the burden of doing this for two weeks,<br> so this ended as a short experiment.',
            "✦ Participated in 48 hour Game jam @ Purdue University<br>"
            + "✦ Implemented silly dialogues and pixel art animation for the final build<br>"
            + "✦ 2 Endings and a scoring system based on accuracy<br><br>"
            + "<b>ABOUT THE GAME</b><br><br>"
            + "&nbsp;&nbsp;You chose to be the owner of a shop, but not an ordinary one! <br>Here, you craft masks for little animal creatures! In the world you live in,<br>animal friends would buy masks to go to weddings and parades🦊<br>&nbsp;&nbsp;You can make anything here with just a small craft table and some paint cans."
            + "<br>Heavily inspired by the early 2000s Adobe-flash style games, the game includes<br> a minigame, 7 unique customers and various endings."
            ,
            "✦ Led development of complete game during 72 hour game jam<br>" +
            '✦ Implemented all core gameplay systems, including player movement, <br>enemy AI logic, and level progression.'
            + "<br><br><b>ABOUT</b><br><br>"
            + "&nbsp;&nbsp;The game is about a little girl earning weapons from shadows of stone statues<br> to combat enemies."
            + "We interpreted the theme, 'Built to Scale', as shadows that would grow and shrink depending on the stone statues.<br>"
            + "&nbsp;&nbsp;I incorporated the sound effects, cover photo, and the boss enemy's animation<br> from teammates to coordinate the final build."
            + "<br>&nbsp;&nbsp;By communicating over a short time frame and participating in my first ever<br> game jam, I learned a lot about time management and keeping a scope."
            + "Furthermore, by designing the levels, I learned a lot on where what obstacles should be placed."
            ,
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: The Sustainable Energy Club of Purdue's first Conference (To be held annually)<br>"
            + "<br>✦ 110+ attendees, 3 Energy Industry Panelists, 5 Lightning Talks, Keynote Speaker"
            + "<br>✦ Includes Poster Sessions, VR Room<br><br>"
            + "<b>ROLE✶</b><br><br>"
            + "&nbsp;&nbsp;Along with assisting with the overall preparation of the conference<br> (contacting related services,"
            + " establishing a website, and advertisement)"
            + " I contacted undergraduate students willing to present for poster sessions."
            + " I was also responsible<br>for guiding attendees to experience a VR simulation on how one's energy choices <br>can immensely impact the Earth."
            + "<br><br>*All staff members along with coordinators took required VR training <br>and speech training sessions with TEDx."
        ];
        document.getElementById('projectText2').style.fontSize = '15px';

    }
    else {
        console.log("kor");
        captions = ['', '급식 앱 1인 개발자<br> 안양여자고등학교 급식 안내 앱', '게임 1인 개발자<br>2026 Fractal Showcase에서 발표<br>Global Game Jam 기간동안 제작', 'Metroidvania 장르 게임 총괄 디렉터<br>2024 GMTK Game Jam 기간동안 제작', "<br>LightsUp Conference 공동 운영위원<br>"
            + "포스터 세션 관리 밑 VR Room 담당"];
        captions2 = ['',
            '✦ 실시간 급식 정보를 위해 오픈 API 적용<br>'
            + '✦ Firebase의 Realtime Database 기능을 활용해 사용자가 입력한 정보를 저장함<br>'
            + '✦ Closed Testing 진행중<br><br>'
            + '<b>기능</b><br><br>'
            + '&nbsp;&nbsp;어플에 급식 평가 시스템을 도입하여 급식이 어땠는지 저장하고, 남들은 어떻게 생각했는지 확인할 수 있도록 하였습니다. <br>사용자로부터 평가를 받으면 Firebase에 저장을 해두고, 평균치를 나타내는 방식을 사용하였습니다.' +
            '<br>Closed Testing 단계에서는 모든 테스터들이 이주동안 연속적으로 앱을 열어야 출시에 적합하다는 판정을 받게 됩니다. <br>앱을 공개하는 것보다는 혼자서 앱을 개발하며 배워가는 과정에 초점을 두었기 때문에 현재로서는 더이상 업데이트할 예정이 <br>없습니다.'
            , '✦ 퍼듀 대학교에서 진행된 48시간 게임 잼의 참가작<br>' +
            '✦ 재치있는 대사들과 픽셀 아트 애니메이션 제작<br>' +
            '✦ 두가지 엔딩과 정확성에 따른 점수 시스템 도입<br><br>' +
            '<b>게임에 대해</b><br><br>'
            + "&nbsp;&nbsp;조금 기이한 가게의 사장이 되기로 한 당신..<br>여기선 동물 친구들을 위해 가면을 제작하게 됩니다. 이 세상에서는 동물 친구들이 결혼식과 무도회장에 가기 위해 가면을 <br>필요로 하는 일이 아주 많거든요🦊"
            + "&nbsp;&nbsp;작은 작업대와 페인트통 몇개라면 그 무엇이든 만들 수 있는 가게에 초대합니다!"
            + "<br>2000년대 초반의 어도비 플래시 게임에 큰 영감을 받아, 이 게임은 미니게임 하나, 7명의 손님과 두가지 엔딩을 포함합니다."
            , '✦ 72시간짜리 게임 잼 기간동안의 모든 기획과 개발 담당'
            + '<br>✦ 프로그래밍, 대다수의 아트, 그리고 팀원들로부터 전해받은 에셋을 융합하는 역할을 함'
            + '<br><br><b>게임에 대해</b><br><br>'
            + '&nbsp;&nbsp;이 게임은 소녀가 돌 석상으로부터 다양한 종류의 무기를 얻어, 적을 해치우는 내용이 주력입니다. <br>게임 잼의 주제였던 "Built to Scale"에 맞춰, 늘어나고 줄어드는 그림자를 활용했습니다.<br>'
            + '팀원들끼리의 의사소통이 원활하게 이루어지도록 하였고, 전해받은 요소들을 게임에 직접 적용시키는 일을 맡았습니다.'
            + '<br>&nbsp;&nbsp;처음 참여했던 게임 잼, 짧은 시간동안 팀원들이랑 어떻게 소통하고 완료 기한을 정해야하는지, 그리고 게임이 너무 커지지 않도록 넣고 싶은 요소들을 자제하는 법을 배웠습니다.'
            + '<br>또한, 다양한 레벨을 만들며 어디에 무슨 방해물을 놓아야 플레이어가 아슬아슬하게 통과할 수 있는지 몸소 깨달았습니다.'
            ,
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 퍼듀 대학교에서 처음 개최된 지속가능한 에너지 동아리의 학술대회 (매년 개최 예정)<br>"
            + "<br>✦ 참석자 110여명, 업계 패널리스트 3명, 구두 발표자 5명, 기조 연설자"
            + "<br>✦ 포스터 세션과 VR (가상현실) 체험 포함<br><br>"
            + "<b>역할✶</b><br><br>"
            + "&nbsp;&nbsp;학회의 전반적인 기획 단계를 보조하면서 (웹사이트 구현, 필요한 서비스들 연락, 홍보) 이전에 유사한 학회에서 발표한 경력이<br> 있는 학부생들에게 연락하여 포스터 세션을 구축했습니다."
            + "<br>또한, 학회 참석자들이 VR 시뮬레이션 게임 (사람의 선택에 따라 지구환경이 어떻게 바뀌는지 체험) 을 제대로 경험할 수 있도록<br> 도와주는 역할을 맡았습니다.<br>"
            + "<br><br>*모든 스태프와 운영위원들은 TEDx 으로부터 발표 관련 트레이닝을 받았습니다."
        ];

        document.getElementById('projectText2').style.fontSize = '15px';

    }
    document.querySelector('.projectText').innerHTML = captions[this.realIndex + 1];
    document.querySelector('.projectText2').innerHTML = captions2[this.realIndex + 1];
}

function resize() {
    const width = window.innerWidth;
    const deco = document.getElementById('deco');
    const cardList = document.querySelector('.card-list');
    const dummy = document.querySelector('.dummy');
    const announce = document.querySelector('.announce');
    if (width < 760) {

        dummy.style.height = '200vh';
        
        announce.style.height = '46vh';
        announce.style.fontSize = '15px';
    } else if (width >= 760 && width < 1024) {
        
        
        dummy.style.height = '0px';
        announce.style.height = '0px';
        announce.style.fontSize = '0px';
        deco.style.marginLeft = '65%';
        cardList.style.marginLeft = "70px";
    }
    else if (width >= 1024) {
        
        
        dummy.style.height = '0px';
        announce.style.height = '0px';
        announce.style.fontSize = '0px';
        deco.style.marginLeft = '44%';
        cardList.style.marginLeft = "39px";

    }
}
window.onresize = resize();