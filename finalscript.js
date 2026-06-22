function changeToKor() {
    const isProjects = window.location.pathname.includes("project");
    if (isProjects) {
        var comment = document.getElementById('comment');
        var about = document.getElementById('about');
        var project = document.getElementById('project');
        var contact = document.getElementById('contact');

        var mainProjects = document.getElementById('mainProjects');
        var conference = document.getElementById('conference');
        var conferenceTitle = document.getElementById('title-conference');
        var mask = document.getElementById('title-mask');
        var java = document.getElementById('title-java');
        var shadow = document.getElementById('title-shadow');
        var article = document.getElementById('see-article');


        var elms = document.querySelectorAll("[id='game']");
        for (var i = 0; i < elms.length; i++)
            elms[i].innerHTML = "게임";

        var mores = document.querySelectorAll("[id = 'more-here']");
        for (var i = 0; i < mores.length; i++)
            mores[i].innerHTML = "더보기";


        var comment = document.getElementById('comment');
        var about = document.getElementById('about');
        var project = document.getElementById('project');
        var contact = document.getElementById('contact');
        var heading1 = document.getElementById('heading1');
        var heading2 = document.getElementById('heading2');
        var heading3 = document.getElementById('heading3');
        var navbar = document.getElementById('navbar .a');


        comment.innerHTML = '댓글';
        about.innerHTML = '소개';
        project.innerHTML = '작업물';
        contact.innerHTML = '연락링크';

        mainProjects.innerHTML = '주요 활동들';
        conference.innerHTML = '학회';
        conferenceTitle.innerHTML = 'LightsUp 학회';
        mask.innerHTML = '가면 제작 가게';
        java.innerHTML = '자바 게임';
        shadow.innerHTML = 'Shadow 게임';
        article.innerHTML = '기사 보기';



        comment.style.fontSize = "32px";
        about.style.fontSize = "32px";
        project.style.fontSize = "32px";
        contact.style.fontSize = "32px";

    } else {

        var comment = document.getElementById('comment');
        var about = document.getElementById('about');
        var project = document.getElementById('project');
        var contact = document.getElementById('contact');
        var heading1 = document.getElementById('heading1');
        var heading2 = document.getElementById('heading2');
        var heading3 = document.getElementById('heading3');
        var navbar = document.getElementById('navbar .a');

        var skill = document.getElementById('skills');
        var languages = document.getElementById('languages');
        var language = document.getElementById('language');
        var values = document.getElementById('values');

        values.innerHTML = '중요하게 여기는 가치 !';
        language.innerHTML = '<br>✦한국어(모국어) ✦영어(능숙함) ✦일본어(기초)';
        languages.innerHTML = '언어';

        skill.innerHTML = '프로그래밍 언어들';

        comment.innerHTML = '댓글';
        about.innerHTML = '소개';
        project.innerHTML = '작업물';
        contact.innerHTML = '연락링크';
        heading1.innerHTML = '<br><br>게임의 "모든 것" 을 창작하다<br><br>';
        heading2.innerHTML = '&nbsp; :아트, UI/UX 디자인, 효과음 부터 프로그래밍과 홍보까지. <br>표면적이며 내부적인 모든 요소를 담당합니다<br>';

        heading3.innerHTML = "&nbsp;반갑습니다! 배현지입니다. 입시 준비에 머리를 싸매던 고등학교 2학년 때, <br> 저는 게임 개발을 위한 프로그래밍 공부를 시작하게 됩니다." +
            "<br>&nbsp;그 후로도 게임 개발 대회(Game jam) 와 개인적인 코딩 작업물들을 만들며, <br>내가 그린 그림으로 남들을 즐겁게 해주는 일에 온전한 기쁨을 느꼈습니다." +
            "<br>&nbsp;제 모든 작업물들은 단순한 마우스 클릭 몇번에 생성되지 않으며, 배움을 통해 기어코<br> 완성시키는 장기작 뿐입니다 ദ്ദി(⩌ᴗ⩌ )" +
            "<br><br>&nbsp;*이 웹사이트도 몇주간의 CSS / HTML / Javascript / Blender 공부를 통해 완성시켰습니다 !<br>" +
            '<br>(ᵔᴥᵔ) 더 많은 작업물들을 구경하고 싶으시다면 “작업물” 탭을 확인해보세요.<br><br>';

        comment.style.fontSize = "32px";
        about.style.fontSize = "32px";
        project.style.fontSize = "32px";
        contact.style.fontSize = "32px";
        heading1.style.fontFamily = 'Summer';
        heading2.style.fontFamily = 'YooBin';
        heading3.style.fontFamily = 'YooBin';

        heading2.style.fontSize = "20px";
        heading3.style.fontSize = "20px";


        heading2.style.lineHeight = "1.3";
        heading3.style.lineHeight = "1.3";
    }
}
function changeToEng() {
    const isProjects = window.location.pathname.includes("project");
    if (isProjects) {

        var comment = document.getElementById('comment');
        var about = document.getElementById('about');
        var project = document.getElementById('project');
        var contact = document.getElementById('contact');


        var mainProjects = document.getElementById('mainProjects');
        var conference = document.getElementById('conference');
        var conferenceTitle = document.getElementById('title-conference');
        var mask = document.getElementById('title-mask');
        var java = document.getElementById('title-java');
        var article = document.getElementById('see-article');
        var shadow = document.getElementById('title-shadow');
        shadow.innerHTML = "Shadow Game";

        var elms = document.querySelectorAll("[id='game']");
        for (var i = 0; i < elms.length; i++)
            elms[i].innerHTML = "Game";

        var mores = document.querySelectorAll("[id = 'more-here']");
        for (var i = 0; i < mores.length; i++)
            mores[i].innerHTML = "more here";

        mainProjects.innerHTML = 'Main Projects';
        conference.innerHTML = 'conference';
        conferenceTitle.innerHTML = 'LightsUp Conference';
        mask.innerHTML = 'Mask Making Store';
        java.innerHTML = 'Java Game';
        article.innerHTML = 'Check article';


        comment.innerHTML = 'comment';
        about.innerHTML = 'about';
        project.innerHTML = 'project';
        contact.innerHTML = 'contact';

        comment.style.fontSize = "25px";
        about.style.fontSize = "25px";
        project.style.fontSize = "25px";
        contact.style.fontSize = "25px";

    } else {

        var comment = document.getElementById('comment');
        var about = document.getElementById('about');
        var project = document.getElementById('project');
        var contact = document.getElementById('contact');
        var heading1 = document.getElementById('heading1');
        var heading2 = document.getElementById('heading2');
        var heading3 = document.getElementById('heading3');
        var navbar = document.getElementById('navbar .a');

        var skill = document.getElementById('skills');
        var languages = document.getElementById('languages');
        var language = document.getElementById('language');
        var values = document.getElementById('values');

        values.innerHTML = 'I value !';
        language.innerHTML = '<br>✦Korean(native) ✦English(fluent) ✦Japanese(Beginner)';
        languages.innerHTML = 'LANGUAGES';

        skill.innerHTML = 'SKILLS';

        comment.innerHTML = 'comment';
        about.innerHTML = 'about';
        project.innerHTML = 'project';
        contact.innerHTML = 'contact';
        heading1.innerHTML = '<br>Creating the "Everything" <br> for my Games<br>';
        heading2.innerHTML = ' &nbsp; :From the Art, UI/UX Designs, Sound Effects to Programming and Advertisement.'
            + "<br>I'm responsible for ALL you can see and interact with!";
        heading3.innerHTML = "&nbsp;Hello, I'm Iris. I started picking up programming for game dev at 17.<br>" +
            "Ever since then, I've been mesmerized in game jams and personal programming projects." +
            "My works are not just clicks, but are created with a learning curve, along with some personality ♪ <br>" +
            "<br>*Even this website took me weeks of mastering <br>HTML / CSS / Javascript / Blender! <br>" +
            '<br>(ᵔᴥᵔ) You can check out my projects from the "projects" tab!<br><br>';

        comment.style.fontSize = "25px";
        about.style.fontSize = "25px";
        project.style.fontSize = "25px";
        contact.style.fontSize = "25px";
        heading1.style.fontFamily = 'Dandan';
        heading2.style.fontFamily = 'Nanum';
        heading3.style.fontFamily = 'Nanum';


        heading2.style.fontSize = "23px";
        heading3.style.fontSize = "23px";

        heading2.style.lineHeight = "1.1";
        heading3.style.lineHeight = "1.1";
    }
}




document.addEventListener("DOMContentLoaded", () => {

    const lang = localStorage.getItem("lang") || "eng";
    applyLang(lang);

    document.getElementById("engButton").addEventListener('click', () => {
        localStorage.setItem("lang", "eng");
        applyLang("eng");
    });

    document.getElementById("korButton").addEventListener('click', () => {
        localStorage.setItem("lang", "kor");
        applyLang("kor");
    });

});


function applyLang(lang) {
    if (lang == "kor") {
        changeToKor();
    } else {
        changeToEng();
    }

}
