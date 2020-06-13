const cvs = document.getElementByld('canvas');
const ctx = cvs.getContext('2d');

let imageName = new Image();
imageName.src = "jspics/Apple_01.png";

ctx.fillStyle = "red";
ctx.fillRect(100,300,30,30);