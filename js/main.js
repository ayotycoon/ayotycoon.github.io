//global variables
let windowActive = false;
let windowMinMax = false;
let chevron = false;

/*
<div class="chevron-box">44</div>
*/
function chevronOpen() {
    let cheIcon = document.getElementsByClassName('fa-chevron-up')[0].getBoundingClientRect();
    let cheOptions = document.getElementsByClassName('chevron-box')[0];

    che_X = cheIcon.x;
    che_Y = cheIcon.y;
    che_height = cheIcon.height;

    // set chev options to the up of chev icon
    if (!chevron){
        cheOptions.style.display = 'block';
        cheOptions.style.left = che_X - cheOptions.getBoundingClientRect().width / 2 + 'px';
        cheOptions.style.top = che_Y - 5 * che_height + 'px';
        chevron = true;
    }else{
        cheOptions.style.display = 'none';
        chevron = false;
    }
    
}




// get screen size
var isWeb = true;
if(window.innerWidth <= 772) {
isWeb = false;
}
function setTime() {
        var d = new Date(); // for now
        d.getHours(); // => 9
        d.getMinutes(); // =>  30
        d.getSeconds(); // => 51
    const time = d.getHours() + ':' + (d.getMinutes().toString().length != 1 ? d.getMinutes() : '0' + d.getMinutes() );
        document.getElementsByClassName('time')[0].innerText = time;
    
}
setTime()
setInterval(setTime, 60000);

// get right click
const body = document.getElementsByClassName('body')[0]
body.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    alert('This page is still under development')
})

// when you click element display window
function openWindow(type, element) {
    // show the window
    
    if (!windowActive) {
        document.getElementsByClassName('window')[0].style.display = 'block';
        windowActive = true;
    }
    const title = document.getElementsByClassName('window-header-title')[0];
    const titleIcon = document.getElementsByClassName('window-header-icon')[0];
    const body = document.getElementsByClassName('window-body')[0];
    const taskBar = document.getElementsByClassName('normal-tb')[0];
    titleIcon.className = ' window-header-icon ml-1 mr-1';
    titleIcon.innerHTML = '';
    // fab fa-angular
    if (type == 'icon') {
        switch (element) {
            case 'angular':
                taskBar.innerHTML += ' <i class="ml-3 each-footer-icon fab fa-angular animated fadeIn" title="Angular"></i>'
                titleIcon.className += ' fab fa-angular text-danger'
                title.innerText = 'Angular';
                body.innerHTML = `
                <h3>What is Angular?</h3>
                <p> Angular (commonly referred to as "Angular 2+" or "Angular v2 and above")[4][5] is a TypeScript-based open-source front-end web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.</p>
                <h3>How good am i in this framework?</h3>
                <p> Angular is my favourite javascript framework, Infact this website is the only javascript app that i didnt write in angular, i just wanted to use plain Js for the fun of it</h3>
<h3>Projects using this framework</h3>
                <div class="d-inline-block m-2 window-project-icon text-center">
                <img class="bg-dark rounded" src="images/gpcalc.png"></img>
                <p>GpCalc Mobile</p>
                </div>
                <div class="d-inline-block m-2 window-project-icon text-center">
                <img class="bg-dark rounded" src="images/gpcalc.png"></img>
                <p>GpCalc Web App</p>
                </div>

                `
                
                break;
            case 'react':
                taskBar.innerHTML += ' <i class="ml-3 each-footer-icon fab fa-react animated fadeIn" title="React"></i>'
                titleIcon.className += ' fab fa-react text-info'
                title.innerText = 'ReactJs';
                body.innerHTML = `<p> This page is still under development</p>`
                break;
            case 'html':
                taskBar.innerHTML += ' <i class="ml-3 each-footer-icon fab fa-html5 animated fadeIn" title="Html5"></i>'
                titleIcon.className += ' fab fa-html5'
                title.innerText = 'Html 5';
                body.innerHTML = `<p> This page is still under development</p>`
                break;
            case 'css':
                taskBar.innerHTML += ' <i class="ml-3 each-footer-icon fab fa-css3 animated fadeIn"  title="css3"></i>'
                titleIcon.className += ' fab fa-css3'
                title.innerText = 'Css 3';
                body.innerHTML = `<p> This page is still under development</p>`
                break;
            case 'node':
                taskBar.innerHTML += ' <i class="ml-3 each-footer-icon fab fa-node animated fadeIn" title="Node js"></i>'
                titleIcon.className += ' fab fa-node'
                title.innerText = 'NodeJs';
                body.innerHTML = `<p> This page is still under development</p>`
                break;
            case 'python':
                taskBar.innerHTML += ' <i class="ml-3 each-footer-icon fab fa-python animated fadeIn" title="Python"></i>'
                titleIcon.className += ' fab fa-python'
                title.innerText = 'Python';
                body.innerHTML = `
                <h3>What is Python?</h3>
                <p> Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace. It provides constructs that enable clear programming on both small and large scales.[26] In July 2018, Van Rossum stepped down as the leader in the language community.[27][28]</p>
                <h3>How good am i in this language?</h3>
                <p>
                This is is my language of choice! I use python to write almost everything. From automating things on my computer to building machine learning and AI models. I'm very comfortable using this language
                
                </p>
        
                `
                break;
            case 'java':
                taskBar.innerHTML += ' <i class="ml-3 each-footer-icon fab fa-java animated fadeIn" title="Java"></i>'
                titleIcon.className += ' fab fa-java'
                title.innerText = 'Java';
                body.innerHTML = `<p> This page is still under development</p>`
                break;
            case 'android':
            
                taskBar.innerHTML += ' <i class="ml-3 each-footer-icon fab fa-android animated fadeIn" title="Android"></i>'
                titleIcon.className += ' fab fa-android'
                title.innerText = 'Android';
                body.innerHTML = `<p> This page is still under development</p>`
                break;
            case 'php':
                taskBar.innerHTML += ' <i class="ml-3 each-footer-icon fab fa-php animated fadeIn" title="Php"></i>'
                titleIcon.className += ' fab fa-php'
                title.innerText = 'Php';
                body.innerHTML = `<p> This page is still under development</p>`
                break;
            case 'js':
                taskBar.innerHTML += ' <i class="ml-3 each-footer-icon fab fa-js animated fadeIn" title="JavaScript"></i>'
                titleIcon.className += ' fab fa-js text-js'
                title.innerText = 'JavaScript';
                body.innerHTML = `
                <h3>What is Javascript?</h3>
                <p> JavaScript often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.

Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web.[8] JavaScript enables interactive web pages and thus is an essential part of web applications. The vast majority of websites use it,[9] and all major web browsers have a dedicated JavaScript engine to execute it.</p>
                <h3>How good am i in this language?</h3>
                <p> This windows desktop like experience is made possible with javascript, i can confidently say i'm super good 😊😊😉. Javascript is actually one of my favourite languages</p>
               <h3>Projects using this language</h3>

                <div class="d-inline-block m-2 window-project-icon text-center">
                <img class="bg-dark rounded" src="images/gpcalc.png"></img>
                <p>GpCalc Mobile</p>
                </div>
                <div class="d-inline-block m-2 window-project-icon text-center">
                <img class="bg-dark rounded" src="./images/gpcalc.png"></img>
                <p>GpCalc Web App</p>
                </div>

                <div class="d-inline-block m-2 window-project-icon text-center">
                <img class="bg-dark rounded" src="./images/gpcalc.png"></img>
                <p>ayotycoon.github.io web</p>
                </div>
                `
                break;


            case 'ns':
                taskBar.innerHTML += ' <img class="ml-3 d-inline-block task-window-icon-img r-icon animated fadeIn" src="./images/icons/nativescript.svg" title="NativeScript">'
                titleIcon.innerHTML = '<img class="window-icon-img r-icon" src="./images/icons/nativescript.svg">'
                title.innerText = 'NativeScript';
                body.innerHTML = `
                <h3>What is NativeScript?</h3>
                <p> NativeScript is an open-source framework to develop apps on the Apple iOS and Android platforms. It was originally conceived and developed by Progress.[3] NativeScript apps are built using JavaScript, or by using any language that transpiles to JavaScript, such as TypeScript. NativeScript supports the Angular [4] and Vue JavaScript frameworks.[5] Mobile applications built with NativeScript result in fully native apps, which use the same APIs as if they were developed in Xcode or Android Studio.[6] </p>
                <h3>How good am i in this framework?</h3>
                <p> NativeScript is a Javascript framework, i love javascript so i'm also very good with NativeScript. I mostly use Angular with my Nativescript Applications</h3>
                <div class="d-inline-block m-2 window-project-icon text-center">
                <img class="bg-dark rounded" src="./images/gpcalc.png"></img>
                <p>GpCalc Mobile</p>
                </div>


                `
                break;
            case 'kotlin':
                taskBar.innerHTML += ' <img class="ml-3 d-inline-block task-window-icon-img r-icon animated fadeIn" src="./images/icons/kotlin.svg" title="Kotlin">'
                titleIcon.innerHTML = '<img class="window-icon-img r-icon" src="./images/icons/kotlin.svg">'
                title.innerText = 'Kotlin';
                body.innerHTML = `
                <h3>What is Kotlin?</h3>
                
                `
                break;
            case 'about':
                taskBar.innerHTML += ' <img class="ml-3 d-inline-block task-window-icon-img r-icon animated fadeIn" src="./images/icons/ayo.jpg" title="Sunmola ayokunle">'
                titleIcon.innerHTML = '<img class="window-icon-img r-icon" src="./images/icons/ayo.jpg">'
                title.innerText = 'Sunmola Ayokunle';
                body.innerHTML = `
                
                <h2 class="font-1">Hi, I'm Sunmola Ayokunle.
                <br>
                A <span class="l1">Software Engineer</span> in Nigeria.
                <div style="width=100%" class="text-center">
<img src="./images/ff.gif" class="jump_anim">
                </div>
                
                
                </h2>
                <p>- Lead programmer with a sole aim of incorporating user and business requirements into cost-effective, secure and user-friendly solutions known for scalability and durability.</p>
                <p>- Knowledge of commercial and open source software/database engineering tools, design techniques, CASE tools and security standards.</p>
                <p>- Proven leader and project manager; drive system architecture decisions and lead projects from concept through the release process.</p>
                <p>- Innovator of next-generation solutions, systems and applications giving companies a competitive edge and producing outstanding results for customers.</p>
                
                <h3>Education & Credentials</h3>
                <div class="p-2 border border-white rounded">
B.Eng Computer Engineering. Olabisi Onabanjo University
                </div>
                
            <br>
                <h3>Technology Summary</h3>
                <div class="p-2 border border-white rounded">
 <h5>Web Development</h5>
                NodeJs, Express, MongoDb, Mysql, Angular, React, JavaScript, CSS/LESS/Sass, Html, Bootstrap, Typescript</br>
                Php, laravel, slimPHP
                <h5>Mobile Development</h5>
                NodeJs, Nativescript, Android Studio, Java, Javascript, Kotlin, Angular
                <h5>Software Development</h5>
                NodeJs, Electron
                <h5>Languages</h5>
                Java, Javascript, TypeScript, Python, Php, Kotlin, Octave
                <h3>Data Science and Ai</h3>
                Python, Numpy, Pandas, Opencv, Octave.
                <h3>Others</h3>
                Git, XML,  Windows
                </div>
               

                `
                break;


            default:
                break;
        }
    } else {
        // then its folder
        switch (element) {
            case 'web':
                titleIcon.className += ' fa fa-folder'
                title.innerText = 'Web development';
                body.innerHTML = `<p> This page is still under development</p>`
                break;

            case 'desktop':
                titleIcon.className += ' fa fa-folder'
                title.innerText = 'Desktop development';
                body.innerHTML = `<p> This page is still under development</p>`
                break;
            case 'mobile':
                titleIcon.className += ' fa fa-folder'
                title.innerText = 'Mobile development';
                body.innerHTML = `<p> This page is still under development</p>`
                break;
            case 'data':
                titleIcon.className += ' fa fa-folder'
                title.innerText = 'Data Analysis and AI';
                body.innerHTML = `<p> This page is still under development</p>`
                break;
            default:
                break;
        }


    
    }
    taskBar.scrollTop = taskBar.scrollHeight;


}
function windowHeaderActions(type) {
    const __window = document.getElementsByClassName('window')[0]
    // type can be close, maximize or cancel
    if (type == 'close') {
        
        __window.style.display = 'none';

        document.getElementsByClassName('window-header-icon')[0].className = 'window-header-icon ml-1 mr-1'

        
        
        windowActive = false
    }

    if (type == 'minMax') {
        if (windowMinMax) { // if its already maximized
            if(isWeb) {
                __window.style.width = '70%';
                __window.style.marginLeft = '50px';
            }else {
                __window.style.width = '90%';
                __window.style.marginLeft = '10px';
            }

            __window.style.marginTop = '50px';
            __window.style.height = '500px';
            windowMinMax = false;
            // change max icon
            document.getElementsByClassName('maxMin')[0].className = 'maxMin far fa-square fa-actions ml-3 cursor'
            
        } else { // if its not yet maximized


 
            __window.style.transform = 'none';

            __window.style.width = '100%';
            __window.style.height = '100%';
            __window.style.marginLeft = '0';
            __window.style.marginTop = '0';

            windowMinMax = true;
            // change max icon
            document.getElementsByClassName('maxMin')[0].className = 'maxMin fa fa-long-arrow-alt-up fa-actions ml-3 cursor'
            
        }

    }
}

function test(e) {
    console.log(e);
}
openWindow('icon', 'about');