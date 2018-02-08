var currentBG = 0;
var mybg = 0;
var curHeight = 70;
var curWidth = 100;
var temp = 0;

document.getElementById("bg1").addEventListener("click", function(){
	currentBG = 1;
	changeBG()
});
document.getElementById("bg2").addEventListener("click", function(){
	currentBG = 2;
	changeBG()
});
document.getElementById("bg3").addEventListener("click", function(){
	currentBG = 3;
	changeBG()
});
document.getElementById("bg4").addEventListener("click", function(){
	currentBG = 4;
	changeBG()
});
document.getElementById("ch1").addEventListener("mouseenter", function(){
	if (currentBG == 1) {document.getElementById("zoom").style.backgroundImage = ("url(imgs/i1.jpg)"); mybg = 1;}
	else if (currentBG == 2) {document.getElementById("zoom").style.backgroundImage = ("url(imgs/i4.jpg)"); mybg = 4;}
	else if (currentBG == 3) {document.getElementById("zoom").style.backgroundImage = ("url(imgs/i7.jpg)"); mybg = 7;}
	else if (currentBG == 4) {document.getElementById("zoom").style.backgroundImage = ("url(imgs/i10.jpg)"); mybg = 10;}
});
document.getElementById("ch2").addEventListener("mouseenter", function(){
	if (currentBG == 1) {document.getElementById("zoom").style.backgroundImage = ("url(imgs/i2.jpg)"); mybg = 2;}
	else if (currentBG == 2) {document.getElementById("zoom").style.backgroundImage = ("url(imgs/i5.jpg)"); mybg = 5;}
	else if (currentBG == 3) {document.getElementById("zoom").style.backgroundImage = ("url(imgs/i8.jpg)"); mybg = 8;}
	else if (currentBG == 4) {document.getElementById("zoom").style.backgroundImage = ("url(imgs/i11.jpg)"); mybg = 11;}
});

document.getElementById("ch3").addEventListener("mouseenter", function(){
	if (currentBG == 1) {document.getElementById("zoom").style.backgroundImage = ("url(imgs/i3.jpg)"); mybg = 3;}
	else if (currentBG == 2) {document.getElementById("zoom").style.backgroundImage = ("url(imgs/i6.jpg)"); mybg = 6;}
	else if (currentBG == 3) {document.getElementById("zoom").style.backgroundImage = ("url(imgs/i9.jpg)"); mybg = 9;}
	else if (currentBG == 4) {document.getElementById("zoom").style.backgroundImage = ("url(imgs/i12.jpg)"); mybg = 12;}
});
document.getElementById("make").addEventListener("click", function(){
	document.getElementById("bg").style.backgroundImage = ("url(imgs/i" + mybg + ".jpg")
});
document.getElementById("reset").addEventListener("click", function(){
	document.getElementById("bg").style.backgroundImage = ("none")
});
document.getElementById("show").addEventListener("click", function(){
	document.getElementById("app1").style.display = ("block")
});
document.getElementById("hide").addEventListener("click", function(){
	document.getElementById("app1").style.display = ("none")
});
document.getElementById("zoom").addEventListener("click", function(){
	document.getElementById("zoomcontrols").style.display = ("block")
});
document.getElementById("zoomplus").addEventListener("click", function(){
	curHeight += 7;
	curWidth += 10;
	document.getElementById("zoom").style.height = (curHeight + "%")
	document.getElementById("zoom").style.width = (curWidth + "%")
});
document.getElementById("zoomminus").addEventListener("click", function(){
	curHeight -= 7;
	curWidth -= 10;
	document.getElementById("zoom").style.height = (curHeight + "%")
	document.getElementById("zoom").style.width = (curWidth + "%")
});
document.getElementById("next").addEventListener("click", function(){
	currentBG += 1;
	if (currentBG >= 5) {
		currentBG = 1
	}
	changeBG()
});
document.getElementById("prev").addEventListener("click", function(){
	currentBG -= 1;
	if (currentBG <= 0) {
		currentBG = 4
	}
	changeBG()
});

function changeBG(){
	if (currentBG == 1) {
		document.getElementById("ch1").style.backgroundImage = ("url(imgs/i1.jpg)")
		document.getElementById("ch2").style.backgroundImage = ("url(imgs/i2.jpg)")
		document.getElementById("ch3").style.backgroundImage = ("url(imgs/i3.jpg)")
	} else if (currentBG == 2) {
		document.getElementById("ch1").style.backgroundImage = ("url(imgs/i4.jpg)")
		document.getElementById("ch2").style.backgroundImage = ("url(imgs/i5.jpg)")
		document.getElementById("ch3").style.backgroundImage = ("url(imgs/i6.jpg)")
	} else if (currentBG == 3) {
		document.getElementById("ch1").style.backgroundImage = ("url(imgs/i7.jpg)")
		document.getElementById("ch2").style.backgroundImage = ("url(imgs/i8.jpg)")
		document.getElementById("ch3").style.backgroundImage = ("url(imgs/i9.jpg)")
	} else if (currentBG == 4) {
		document.getElementById("ch1").style.backgroundImage = ("url(imgs/i10.jpg)")
		document.getElementById("ch2").style.backgroundImage = ("url(imgs/i11.jpg)")
		document.getElementById("ch3").style.backgroundImage = ("url(imgs/i12.jpg)")
	}
}