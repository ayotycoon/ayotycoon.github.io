//global variables
let windowActive = false;
let windowMinMax = false;
let chevron = false;
let activeWindow='';

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
    if (!chevron) {
        cheOptions.style.display = 'block';
        cheOptions.style.left = che_X - cheOptions.getBoundingClientRect().width / 2 + 'px';
        cheOptions.style.top = che_Y - 5 * che_height + 'px';
        chevron = true;
    } else {
        cheOptions.style.display = 'none';
        chevron = false;
    }

}




// get screen size
var isWeb = true;
if (window.innerWidth <= 772) {
    isWeb = false;
}
function setTime() {
    var d = new Date(); // for now
    d.getHours(); // => 9
    d.getMinutes(); // =>  30
    d.getSeconds(); // => 51
    const time = d.getHours() + ':' + (d.getMinutes().toString().length != 1 ? d.getMinutes() : '0' + d.getMinutes());
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
function openWindow(element) {
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
    let lElement = '';

    switch (element) {
        case 'angular':
            lElement = '<i class="ml-3 each-footer-icon fab fa-angular animated fadeIn" title="Angular"></i>';
            taskBar.innerHTML = taskBar.innerHTML.replace(RegExp(lElement), '')
            taskBar.innerHTML += lElement;
            titleIcon.className += ' fab fa-angular text-danger'
            title.innerText = 'Angular';
            body.innerHTML = `
                <h3>What is Angular?</h3>
                <p> Angular (commonly referred to as "Angular 2+" or "Angular v2 and above") is a TypeScript-based open-source front-end web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.</p>
                <hr>
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
            lElement = '<i class="ml-3 each-footer-icon fab fa-react animated fadeIn" title="React"></i>';
            taskBar.innerHTML = taskBar.innerHTML.replace(RegExp(lElement), '')
            taskBar.innerHTML += lElement;
            titleIcon.className += ' fab fa-react text-info'
            title.innerText = 'ReactJs';
            body.innerHTML = `<h3>What is React ?</h3>
                <p> 
                React (also known as React.js or ReactJS) is a JavaScript library<hr> for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
                
                </p>
                `
            break;
        case 'html':
            lElement = '<i class="ml-3 each-footer-icon fab fa-html5 animated fadeIn" title="Html5"></i>';
            taskBar.innerHTML = taskBar.innerHTML.replace(RegExp(lElement), '')
            taskBar.innerHTML += lElement;
            titleIcon.className += ' fab fa-html5'
            title.innerText = 'Html 5';
            body.innerHTML = `<h3>What is HTML ?</h3>
                <p> 
                Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.
                
                </p>
                `
            break;
        case 'css':
            lElement = '<i class="ml-3 each-footer-icon fab fa-css3 animated fadeIn" title="css3"></i>';
            taskBar.innerHTML = taskBar.innerHTML.replace(RegExp(lElement), '')
            taskBar.innerHTML += lElement;
            titleIcon.className += ' fab fa-css3'
            title.innerText = 'Css 3';
            body.innerHTML = `<h3> What is css?</h3>
            <p> Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>`
            break;
        case 'node':
            lElement = '<i class="ml-3 each-footer-icon fab fa-node animated fadeIn" title="Node js"></i>';
            taskBar.innerHTML = taskBar.innerHTML.replace(RegExp(lElement), '')
            taskBar.innerHTML += lElement;
            titleIcon.className += ' fab fa-node'
            title.innerText = 'NodeJs';
            body.innerHTML = `
                <h3>What is NodeJs?</h3>
                <p> Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. Typically, JavaScript is used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML and run client-side by a JavaScript engine in the user's web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web application development around a single programming language, rather than different languages for server side and client side scripts.</p>
                <hr>
                <p>
                I'm very much comfortable with the NodeJs Eco-system. 
                
                </p>
                <h3>Projects using this language</h3>

                <div class="d-inline-block m-2 window-project-icon text-center">
                <img class="bg-dark rounded" src="images/gpcalc.png"></img>
                <p>GpCalc Mobile</p>
                </div>
                
        
                `
            break;
        case 'python':
            lElement = '<i class="ml-3 each-footer-icon fab fa-python animated fadeIn" title="Python"></i>';
            taskBar.innerHTML = taskBar.innerHTML.replace(RegExp(lElement), '')
            taskBar.innerHTML += lElement;
            titleIcon.className += ' fab fa-python'
            title.innerText = 'Python';
            body.innerHTML = `
                <h3>What is Python?</h3>
                <p> Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace. It provides constructs that enable clear programming on both small and large scales.[26] In July 2018, Van Rossum stepped down as the leader in the language community.[27][28]</p>
                <hr>
                <p>
                This is is my language of choice! I use python to write almost everything. From automating things on my computer to building machine learning and AI models. I'm very comfortable using this language
                
                </p>
        
                `
            break;
        case 'java':
            lElement = '<i class="ml-3 each-footer-icon fab fa-java animated fadeIn" title="Java"></i>';
            taskBar.innerHTML = taskBar.innerHTML.replace(RegExp(lElement), '')
            taskBar.innerHTML += lElement;
            titleIcon.className += ' fab fa-java'
            title.innerText = 'Java';
            body.innerHTML = `<h3>What is Java?</h3>
                <p> Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented,[15] and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers "write once, run anywhere" (WORA),[16] meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.[17] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture.
                <hr>
                `
            break;
        case 'android':
            lElement = '<i class="ml-3 each-footer-icon fab fa-android animated fadeIn" title="Android"></i>';
            taskBar.innerHTML = taskBar.innerHTML.replace(RegExp(lElement), '')
            taskBar.innerHTML += lElement;
            titleIcon.className += ' fab fa-android'
            title.innerText = 'Android Studio';
            body.innerHTML = `<h3>What is Android Studio?</h3>
                <p> Android Studio is the official<hr> integrated development environment (IDE) for Google's Android operating system, built on JetBrains' IntelliJ IDEA software and designed specifically for Android development.
                <hr>
                `
            break;
        case 'php':
            lElement = '<i class="ml-3 each-footer-icon fab fa-php animated fadeIn" title="Php"></i>';
            taskBar.innerHTML = taskBar.innerHTML.replace(RegExp(lElement), '')
            taskBar.innerHTML += lElement;
            titleIcon.className += ' fab fa-php'
            title.innerText = 'Php';
            body.innerHTML = `<h3>What is Php?</h3>
                <p> PHP: Hypertext Preprocessor (or simply PHP) is a server-side scripting language designed for Web development. 
                <hr>
                slimPhp and Laravel are favourite php frameworks
                `
            break;
        case 'js':
            lElement = '<i class="ml-3 each-footer-icon fab fa-js animated fadeIn" title="JavaScript"></i>';
            taskBar.innerHTML = taskBar.innerHTML.replace(RegExp(lElement), '')
            taskBar.innerHTML += lElement;
            titleIcon.className += ' fab fa-js text-js'
            title.innerText = 'JavaScript';
            body.innerHTML = `
                <h3>What is Javascript?</h3>
                <p> JavaScript often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.

Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web. JavaScript enables interactive web pages and thus is an essential part of web applications. The vast majority of websites use it, and all major web browsers have a dedicated JavaScript engine to execute it.</p>
                <hr>
                <p> This windows desktop like experience is made possible with javascript. Javascript is actually one of my favourite languages</p>
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

            lElement = '<img class="ml-3 d-inline-block task-window-icon-img r-icon animated fadeIn" src="./images/icons/nativescript.svg" title="NativeScript">';
            taskBar.innerHTML = taskBar.innerHTML.replace(RegExp(lElement), '')
            taskBar.innerHTML += lElement;
            titleIcon.innerHTML = '<img class="window-icon-img r-icon" src="./images/icons/nativescript.svg">'
            title.innerText = 'NativeScript';
            body.innerHTML = `
                <h3>What is NativeScript?</h3>
                <p> NativeScript is an open-source framework to develop apps on the Apple iOS and Android platforms. It was originally conceived and developed by Progress. NativeScript apps are built using JavaScript, or by using any language that transpiles to JavaScript, such as TypeScript. NativeScript supports the Angular  and Vue JavaScript frameworks. Mobile applications built with NativeScript result in fully native apps, which use the same APIs as if they were developed in Xcode or Android Studio. </p>
                <hr>
                
                <h3>Projects using this framework</h3>
                <div class="d-inline-block m-2 window-project-icon text-center">
                <img class="bg-dark rounded" src="./images/gpcalc.png"></img>
                <p>GpCalc Mobile</p>
                </div>


                `
            break;
        case 'kotlin':
            lElement = '<img class="ml-3 d-inline-block task-window-icon-img r-icon animated fadeIn" src="./images/icons/kotlin.svg" title="Kotlin">';
            taskBar.innerHTML = taskBar.innerHTML.replace(RegExp(lElement), '')
            taskBar.innerHTML += lElement;
            titleIcon.innerHTML = '<img class="window-icon-img r-icon" src="./images/icons/kotlin.svg">'
            title.innerText = 'Kotlin';
            body.innerHTML = `
                <h3>What is Kotlin?</h3>
                <p> Kotlin is a statically typed programming language that runs on the Java virtual machine and also can be compiled to JavaScript source code or use the LLVM compiler infrastructure. It is sponsored and developed by JetBrains. </p>
                <hr>
                <p> Kotlin makes it easier to build core Android applications without the overly verbose nature of Java. I'm very confident in this language</h3>
                

        `
            break;
        case 'mongo':
            lElement = '<img class="ml-3 d-inline-block task-window-icon-img r-icon animated fadeIn" src="./images/icons/kotlin.svg" title="Kotlin">';
            taskBar.innerHTML = taskBar.innerHTML.replace(RegExp(lElement), '')
            taskBar.innerHTML += lElement;
            titleIcon.innerHTML = '<img class="window-icon-img r-icon" src="./images/icons/mongodb.svg">'
            title.innerText = 'Mongo Db';
            body.innerHTML = `
                <h3>What is Mongo Db?</h3>
                <p> MongoDB is a cross-platform document-oriented database program. It is issued under the Server Side Public License (SSPL) version 1, which was submitted for OSI certification but later withdrawn in lieu of SSPL version 2<hr>. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc..</p>
                <hr>
                <p> This is actually my database of choice!</h3>
                

        `
            break;
        case 'about':
            lElement = '<img class="ml-3 d-inline-block task-window-icon-img r-icon animated fadeIn" src="./images/icons/ayo.jpg" title="Sunmola ayokunle">';
            taskBar.innerHTML = taskBar.innerHTML.replace(RegExp(lElement), '');
            taskBar.innerHTML += lElement;
            titleIcon.innerHTML = '<img class="window-icon-img r-icon" src="./images/icons/ayo.jpg">';
            title.innerText = 'Sunmola Ayokunle';
            body.innerHTML = `
                
                <h2 class="font-1 mt-5">Hi, I'm Sunmola Ayokunle.
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
                <div class="p-2 border-top border-white rounded">
B.Eng Computer Engineering. Olabisi Onabanjo University
                </div>
                
            <br>
                <h3>Technology Summary</h3>
                <div class="p-2 border-top border-white rounded">
 <h5>Web Development</h5>
                NodeJs, Express, MongoDb, Mysql, Angular, React, JavaScript, CSS/LESS/Sass, Html, Bootstrap, Typescript</br>
                Php, laravel, slimPHP
                <h5>Mobile Development</h5>
                NodeJs, Nativescript, Android Studio, Java, Javascript, Kotlin, Angular
                <h5>Software Development</h5>
                NodeJs, Electron
                <h5>Languages</h5>
                Java, Javascript, TypeScript, Python, Php, Kotlin, Octave
                <h5>Data Science and Ai</h5>
                Python, Numpy, Pandas, Opencv, Octave.
                
                </div>
            <br>
                <h3>Others</h3>
                <div class="p-2 border-top border-white rounded">
Git, XML,  Windows
                </div>
                
               

                `
            break;


        default:
            break;
    }

    taskBar.scrollTop = taskBar.scrollHeight;
    activeWindow = lElement;

}
function windowHeaderActions(type) {
    const __window = document.getElementsByClassName('window')[0];
    // type can be close, maximize or cancel
    if (type == 'close') {

        __window.style.display = 'none';

        document.getElementsByClassName('window-header-icon')[0].className = 'window-header-icon ml-1 mr-1';
        // remove icon taskbar
        document.getElementsByClassName('normal-tb')[0].innerHTML = document.getElementsByClassName('normal-tb')[0].innerHTML.replace(RegExp(activeWindow), '');


        windowActive = false
    }else if (type == 'minMax') {
        if (windowMinMax) { // if its already maximized
            if (isWeb) {
                __window.style.width = '70%';
                __window.style.marginLeft = '50px';
            } else {
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


    } else {
        __window.className+=' animated zoomOutDown'
        setTimeout(() => {
            __window.style.display = 'none';
            document.getElementsByClassName('window')[0].className = 'window border-top border-dark clearfix pt-1 bg-dark text-white';
            windowActive = false
        }, 300);
    }


}

function test(e) {
    console.log(e);
}
openWindow('about');