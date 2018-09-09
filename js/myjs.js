function openMail() {
var fname = document.getElementById("fname");
var subject = document.getElementById("subject");
var message = document.getElementById("message");
var body = `${message.value}  
${fname.value}`
window.location.href= `mailto:se.ayokunle@outlook.com?subject=${subject.value}&body=${body}`
}