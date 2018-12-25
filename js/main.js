//global variables
let windowActive = false;
let windowMinMax = false;

function setTime() {
        var d = new Date(); // for now
        d.getHours(); // => 9
        d.getMinutes(); // =>  30
        d.getSeconds(); // => 51
        const time = d.getHours() + ':' + d.getMinutes();
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
    initDrag();
    if (!windowActive) {
        document.getElementsByClassName('window')[0].style.display = 'block';
        windowActive = true;
    }
    const title = document.getElementsByClassName('window-header-title')[0];
    const titleIcon = document.getElementsByClassName('window-header-icon')[0];
    const body = document.getElementsByClassName('window-body')[0];

    titleIcon.className = ' window-header-icon ml-1 mr-1';
    // fab fa-angular
    if (type == 'icon') {
        switch (element) {
            case 'angular':
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
                titleIcon.className += ' fab fa-react text-info'
                title.innerText = 'ReactJs';
                body.innerHTML = `<p> This page is still under development</p>`
                break;
            case 'node':
                titleIcon.className += ' fab fa-node'
                title.innerText = 'NodeJs';
                body.innerHTML = `<p> This page is still under development</p>`
                break;
            case 'python':
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
                titleIcon.className += ' fab fa-java'
                title.innerText = 'Java';
                body.innerHTML = `<p> This page is still under development</p>`
                break;
            case 'android':
                titleIcon.className += ' fab fa-android'
                title.innerText = 'Android';
                body.innerHTML = `<p> This page is still under development</p>`
                break;
            case 'php':
                titleIcon.className += ' fab fa-php'
                title.innerText = 'Php';
                body.innerHTML = `<p> This page is still under development</p>`
                break;
            case 'js':
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
                <img class="bg-dark rounded" src="images/gpcalc.png"></img>
                <p>GpCalc Web App</p>
                </div>

                <div class="d-inline-block m-2 window-project-icon text-center">
                <img class="bg-dark rounded" src="images/gpcalc.png"></img>
                <p>ayotycoon.github.io web</p>
                </div>
                `
                break;


            case 'ns':
                titleIcon.className += ' fab fa-ns'
                title.innerText = 'NativeScript';
                body.innerHTML = `
                <h3>What is NativeScript?</h3>
                <p> NativeScript is an open-source framework to develop apps on the Apple iOS and Android platforms. It was originally conceived and developed by Progress.[3] NativeScript apps are built using JavaScript, or by using any language that transpiles to JavaScript, such as TypeScript. NativeScript supports the Angular [4] and Vue JavaScript frameworks.[5] Mobile applications built with NativeScript result in fully native apps, which use the same APIs as if they were developed in Xcode or Android Studio.[6] </p>
                <h3>How good am i in this framework?</h3>
                <p> NativeScript is a Javascript framework, i love javascript so i'm also very good with NativeScript. I mostly use Angular with my Nativescript Applications</h3>
                <div class="d-inline-block m-2 window-project-icon text-center">
                <img class="bg-dark rounded" src="images/gpcalc.png"></img>
                <p>GpCalc Mobile</p>
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
        
            default:
                break;
        }

    }



}
function windowHeaderActions(type) {
    const __window = document.getElementsByClassName('window')[0]
    // type can be close, maximize or cancel
    if (type == 'close') {
        __window.style.display = 'none';
        document.getElementsByClassName('window-header-icon')[0].className = 'window-header-icon ml-1 mr-1'
        windowActive = false
    }
    /*

  min-width: 50%;
  height: 500px;
  margin-left: 50px;
  margin-top: 50px;
    */
    if (type == 'minMax') {

        if (windowMinMax) {
            __window.style.width = '50%';
            __window.style.height = '500px';
            __window.style.marginLeft = '50px';
            __window.style.marginTop = '50px';
            windowMinMax = false;
            initDrag()
        } else {

            __window.style.position = 'static';
            __window.style.position = 'absolute';
            __window.style.top = '0%';
            __window.style.left = '0%';

            __window.style.width = '100%';
            __window.style.height = '100%';
            __window.style.marginLeft = '0';
            __window.style.marginTop = '0';

            windowMinMax = true;
            initDrag()
        }

    }
}

function test(e) {
    console.log(e);
}
