function changeToKor() {
    const isProjects = window.location.pathname.includes("project");
    const isCookies = window.location.pathname.includes("cookies");
    if (isProjects) {
        var comment = document.getElementById('comment');
        var about = document.getElementById('about');
        var project = document.getElementById('project');
        var contact = document.getElementById('contact');

        var mainProjects = document.getElementById('mainProjects');
        var conferenceTitle = document.getElementById('title-conference');
        var mask = document.getElementById('title-mask');
        var java = document.getElementById('title-java');
        var shadow = document.getElementById('title-shadow');
        var article = document.getElementById('see-article');

        var mores = document.querySelectorAll("[id = 'more-here']");
        for (var i = 0; i < mores.length; i++)
            mores[i].innerHTML = "더보기";


        comment.innerHTML = '쿠키';
        about.innerHTML = '소개';
        project.innerHTML = '작업물';
        contact.innerHTML = '연락링크';

        mainProjects.innerHTML = '주요 활동들';
        conferenceTitle.innerHTML = 'LightsUp 학회';
        mask.innerHTML = '가면 제작 가게';
        java.innerHTML = '급식 앱';
        shadow.innerHTML = 'Shadow 프로젝트';
        article.innerHTML = '기사 보기';



        comment.style.fontSize = "32px";
        about.style.fontSize = "32px";
        project.style.fontSize = "32px";
        contact.style.fontSize = "32px";

    } 
    else if (isCookies){
        var comment = document.getElementById('comment');
        var about = document.getElementById('about');
        var project = document.getElementById('project');
        var contact = document.getElementById('contact');
        comment.innerHTML = '쿠키';
        about.innerHTML = '소개';
        project.innerHTML = '작업물';
        contact.innerHTML = '연락링크';
        comment.style.fontSize = "32px";
        about.style.fontSize = "32px";
        project.style.fontSize = "32px";
        contact.style.fontSize = "32px";
        

        var cookie = document.getElementById('cookieText')
        var first = document.getElementById('first');
        var claude = document.getElementById('claude');
        var listing = document.getElementById('list');
        var element2 = document.getElementById('element2');
        var element3 = document.getElementById('element3');
        var element4 = document.getElementById('element4');
        
        cookie.innerHTML = "안녕하세요! 웹사이트의 작은 공간에 환영합니다 :D"
        +"<br>2년 전에도 웹사이트를 제작해보려 했으나, 그건 이보다 훨씬 단조로운, <br>그야말로 연습용 웹사이트였습니다."
        +"<br>오랜 시간동안 포트폴리오 웹사이트를 더 키우고 싶었으나, 대학교에 진학하고 Java를<br> 더 배우고 나서야 제대로 HTML, CSS, Javascript를 공부할 힘이 났네요."
        +"<br>그럼에도 아직 해결 못한 에러가 많으니, 그걸 여기서 솔직하게 풀어내려고 합니다."
        +"<br>언젠가 실력을 더 키우게 된다면 다시 돌아와 하나씩 해결해두고, 밑줄을 치고 싶네요."
        +"<br>제 웹사이트를 들려줘서 감사하고, 좋은 하루 보내세요!<br><br>";

        first.innerHTML = "★<s>폴라로이드 사진같이 생겨서 사용자가 움직일 수 있는 element 제작</s>";
        claude.innerHTML = "<br>문제가 되었던 부분을 Claude를 이용해 고침 - 해결";
        element2.innerHTML = "<br>☆ Swiper 의 내부적 문제<br>-> 윈도우 창을 줄여놓고 전체화면을 여러번 누르면 Swiper 구성이 망가짐";
        element3.innerHTML = "<br>☆ 또 다른 Swiper 의 내부적 문제<br>-> 윈도우 창의 너비가 760px 미만으로 내려가면 구성이 망가짐";
        element4.innerHTML = "<br>☆ '언어' 탭이 겹쳐져서 보임<br>-> Element의 위치를 Absolute로 설정하고 또 다른 Element를 추가하려 하면 어떻게 해야 바로 밑에 위치할지 모르겠음";
        list.innerHTML = "<br>골칫덩어리들 (•̀ᴗ•́ )و";

        cookie.style.wordSpacing = "5px";
        list.style.fontSize = "30px";
        var cookieText = document.getElementById('cookieTextWrapper');
        cookieText.style.fontFamily = "YooBin";
        cookieText.style.fontSize = "19px";
        var lists = document.getElementById('lists');
        lists.style.fontSize = "19px";
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

        values.innerHTML = '중요하게 여기는 가치들 !';
        language.innerHTML = '<br>✦한국어(모국어) ✦영어(능숙함) ✦일본어(기초)';
        languages.innerHTML = '언어';

        skill.innerHTML = '프로그래밍 언어들';

        comment.innerHTML = '쿠키';
        about.innerHTML = '소개';
        project.innerHTML = '작업물';
        contact.innerHTML = '연락링크';
        heading1.innerHTML = '<br><br>게임의 "모든 것" 을 창작하다<br><br>';
        heading2.innerHTML = '&nbsp; :아트, UI/UX 디자인, 효과음 부터 프로그래밍과 홍보까지. <br>&nbsp;&nbsp;&nbsp;표면적이며 내부적인 모든 요소를 담당합니다<br>';

        heading3.innerHTML = "&nbsp;안녕하세요! 배현지입니다.<br>&nbsp;저는 퍼듀 대학교에서 수학과에 재학중인 학생으로," +
            "취미활동으로 게임 개발 대회(Game jam)를 나가고 개인적인 코딩 작업물들을 만들며, 내가 그린 그림으로 남들을 즐겁게 해주는 일에 온전한 기쁨을 느끼는 사람입니다." +
            "<br>&nbsp;제 모든 작업물들은 단순한 마우스 클릭 몇번에 생성되는 것들이 아닌, 독학해서 만든 장기작 뿐입니다 ദ്ദി(⩌ᴗ⩌ )" +
            '<br>* (ᵔᴥᵔ) 더 많은 작업물들을 구경하고 싶으시다면 “작업물” 탭을 확인해보세요.<br><br>';

        comment.style.fontSize = "32px";
        about.style.fontSize = "32px";
        project.style.fontSize = "32px";
        contact.style.fontSize = "32px";
        heading1.style.fontFamily = 'Summer';
        heading2.style.fontFamily = 'YooBin';
        heading3.style.fontFamily = 'YooBin';

        heading2.style.fontSize = "23px";
        heading3.style.fontSize = "23px";


        heading2.style.lineHeight = "1.3";
        heading3.style.lineHeight = "1.3";
        languages.style.fontFamily = "YooBin";
        skill.style.fontFamily = "YooBin";
        language.style.fontFamily = "YooBin";
        language.style.fontSize = "38px";
        values.style.fontFamily = "Dandan";
        values.style.fontSize = "46px";
        values.style.left = "58vw";
    }
}
function changeToEng() {
    const isProjects = window.location.pathname.includes("project");
    const isCookies = window.location.pathname.includes("cookies");
    if (isProjects) {

        var comment = document.getElementById('comment');
        var about = document.getElementById('about');
        var project = document.getElementById('project');
        var contact = document.getElementById('contact');


        var mainProjects = document.getElementById('mainProjects');
        var conferenceTitle = document.getElementById('title-conference');
        var mask = document.getElementById('title-mask');
        var java = document.getElementById('title-java');
        var article = document.getElementById('see-article');
        var shadow = document.getElementById('title-shadow');
        shadow.innerHTML = "Shadow Project";

        var mores = document.querySelectorAll("[id = 'more-here']");

        for (var i = 0; i < mores.length; i++)
            mores[i].innerHTML = "more here";

        mainProjects.innerHTML = 'Main Projects';
        conferenceTitle.innerHTML = 'LightsUp Conference';
        mask.innerHTML = 'Mask Making Store';
        java.innerHTML = 'Cafeteria App';
        article.innerHTML = 'Check article';


        comment.innerHTML = 'cookies';
        about.innerHTML = 'about';
        project.innerHTML = 'project';
        contact.innerHTML = 'contact';

        comment.style.fontSize = "25px";
        about.style.fontSize = "25px";
        project.style.fontSize = "25px";
        contact.style.fontSize = "25px";

    } else if(isCookies){
        var comment = document.getElementById('comment');
        var about = document.getElementById('about');
        var project = document.getElementById('project');
        var contact = document.getElementById('contact');
        comment.innerHTML = 'cookies';
        about.innerHTML = 'about';
        project.innerHTML = 'project';
        contact.innerHTML = 'contact';

        comment.style.fontSize = "25px";
        about.style.fontSize = "25px";
        project.style.fontSize = "25px";
        contact.style.fontSize = "25px";
        
        var cookie = document.getElementById('cookieText')
        var first = document.getElementById('first');
        var claude = document.getElementById('claude');
        var element2 = document.getElementById('element2');
        var list = document.getElementById('list')
        var element3 = document.getElementById('element3');
        var element4 = document.getElementById('element4');

        cookie.innerHTML = "hi!"+
        "<br>welcome to this comfy part of my website :D"+
        "<br>I had a smaller website prior to this, which consisted of one page, and a navigation bar.<br>"+
        "Over the years, I decided to do something a bit bigger, which is this one right here!"+
        "<br> Still, I have some parts that I didn't have the skills to finish the development of."+
        "<br> So I'd like to share all of it down below!"+
        "<br> One day, when I become more knowledgable to HTML, CSS, and Javascript,"+
        "<br>I'll try to make all of them work, and will cross out the stuff I managed to solve."+
        "<br>Thanks for passing by and have a nice day!<br><br>";
        list.innerHTML = "LIST BELOW (•̀ᴗ•́ )و";
        first.innerHTML = "★ <s>Creating movable elements that resembles polaroid images</s>";
        claude.innerHTML = "<br>Found Failure Point w/ claude - solved !";
        element2.innerHTML = " <br>☆ Swiper's internal error"+
                "<br>-> when shrinking the window and pressing fullscreen multiple times, the layout breaks.";
        element3.innerHTML =  "<br>☆ Another Swiper error  "+
                "<br>-> Layout breaks when the width of the window shrinks under 760px. Unsure why.  ";
        element4.innerHTML = "<br>☆ Languages tab placed over elements"+
                "<br>-> When element above is positioned absolute, I don't know how to place another block<br> of elements right underneath it.";
    
        
        cookie.style.wordSpacing = "2px";
        list.style.fontSize = "24px";
        var cookieText = document.getElementById('cookieTextWrapper');
        cookieText.style.fontFamily = "Inter";
        var lists = document.getElementById('lists');
        lists.style.fontSize = "medium";
        cookieText.style.fontSize = "medium";
    
            }else {

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

        comment.innerHTML = 'cookies';
        about.innerHTML = 'about';
        project.innerHTML = 'project';
        contact.innerHTML = 'contact';
        heading1.innerHTML = '<br>Creating the "Everything" <br> for my Games<br>';
        heading2.innerHTML = ' &nbsp; :From the Art, UI/UX Designs, Sound Effects to Programming and Advertisement.'
            + "<br>I'm responsible for ALL you can see and interact with!";
        heading3.innerHTML = "&nbsp;Hello, I'm Iris, a Mathematics student at Purdue University." +
        "<br>&nbsp;I love joining Game jams and create personal coding projects in my free time. I feel uplifted when my drawings make others happy.<br>"+
            "My works are not just clicks, but are created with a learning curve, along with some personality ♪ <br>" +
            '<br>(ᵔᴥᵔ) You can check out my projects from the "projects" tab!<br><br>';

        comment.style.fontSize = "25px";
        about.style.fontSize = "25px";
        project.style.fontSize = "25px";
        contact.style.fontSize = "25px";
        heading1.style.fontFamily = 'Dandan';
        heading2.style.fontFamily = 'Nanum';
        heading3.style.fontFamily = 'Nanum';


        heading2.style.fontSize = "25px";
        heading3.style.fontSize = "25px";

        heading2.style.lineHeight = "1.1";
        heading3.style.lineHeight = "1.1";
        languages.style.fontFamily = "Inter";
        skill.style.fontFamily = "Inter";
        language.style.fontFamily = "Inter";
        language.style.fontSize = "32px";
        values.style.fontFamily = "Dandan";
        values.style.eft = "64vw";
        values.style.fontSize = "55px";
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
