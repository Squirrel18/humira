function start() {
    resizeAnimation();
    var video = document.querySelectorAll("video");
    /*for(var i = 0; i < video.length; i++) {
        console.log(video[i]);
        video[i].play();
    }*/
    //alert('video');
}

function videoCheck() {
    var videoElement = document.querySelector(".index");
    if(videoElement) {
        videoElement.style.WebkitAnimation = 'fadeClose 750ms ease-in-out forwards';
        videoElement.style.animation = 'fadeClose 750ms ease-in-out forwards';
        setTimeout(function() {
            window.location.assign("slides/slide-1.html");
        }, 750);
    }
}

function resizeAnimation() {
    //get current window size
    var width = window.innerWidth;
    var height = window.innerHeight;
    //get the project main element that contains all scenes
    var currentSceneEl = document.body.children[0];
    //get the current size
    var scene_w = currentSceneEl.offsetWidth;
    var scene_h = currentSceneEl.offsetHeight;
    //calculate the scale factor
    var factor_w = width / scene_w;
    var factor_h = height / scene_h;
    //select the minimum of the above, so it is stretched to the screen
    //but does not change the aspect ratio
    var factor = Math.min(factor_w, factor_h);
    //set transform origin to 0,0
    currentSceneEl.style['transformOrigin'] = '0 0';
    currentSceneEl.style['webkitTransformOrigin'] = '0 0';
    //scale
    currentSceneEl.style['transform'] = 'scale(' + factor + ',' + factor + ')';
    currentSceneEl.style['webkitTransform'] = 'scale(' + factor + ',' + factor + ')';
}
//optional: rescale every time the window size is changed
window.onresize = function() {
    resizeAnimation();
}

function changeSlide(data) {
    window.location.assign("slide-" + data + ".html");
}

function slide_5() {
    if(document.querySelectorAll(".slide-5-imgs")) {
        var time = 1;
        var e = document.querySelectorAll(".slide-5-imgs");
        for(var i = 0; i < e.length; i++) {
            time += 0.25;
            e[i].style.WebkitAnimation = 'fadeOpen 750ms ease-in-out forwards ' + time + 's';
            e[i].style.animation = 'fadeOpen 750ms ease-in-out forwards ' + time + 's';
        }
    }

    if(document.querySelectorAll(".slide-5-imgs-se")) {
        var time_1 = 3.25;
        var e_1 = document.querySelectorAll(".slide-5-imgs-se");
        for(var i = 0; i < e.length; i++) {
            time += 0.25;
            e_1[i].style.WebkitAnimation = 'fadeOpen 750ms ease-in-out forwards ' + time + 's';
            e_1[i].style.animation = 'fadeOpen 750ms ease-in-out forwards ' + time + 's';
        }
    }
}

//Function reel 
function reelImage(){
	
	var idImage = document.getElementById("imgReel");
	var size = idImage.getAttribute("data-reel-size");
	var time = idImage.getAttribute("data-reel-time");
	var rute = idImage.getAttribute("data-reel-src") + "/";
	var type = "." + idImage.getAttribute("data-type");
	var timeStart = idImage.getAttribute("data-start");
	var loop = idImage.getAttribute("data-loop");
	var cont = 0;
		
    if(loop) {
        validate = true;
    } else {
        validate = false;
    }

	setTimeout(function() {
	    var interval = setInterval(function() {
		    idImage.src = rute + cont + type;
			cont++;
            if(cont > size) {
                if(validate) {
                    cont = 0;
                } else {
                    clearInterval(interval);
                    return false;
                }
            }
	    }, time);
	}, timeStart);
}
	
function slide_6() {
    if(document.querySelectorAll(".slide-6-imgs")) {
        var time = 0.25;
        var e = document.querySelectorAll(".slide-6-imgs");
        for(var i = 0; i < e.length; i++) {
            time += 0.25;
            e[i].style.WebkitAnimation = 'fadeOpen 750ms ease-in-out forwards ' + time + 's';
            e[i].style.animation = 'fadeOpen 750ms ease-in-out forwards ' + time + 's';
        }
    }
}

function slide_6_1() {
    if(document.querySelectorAll(".slide-6-imgs")) {
        var time = 0.25;
        var e = document.querySelectorAll(".slide-6-imgs");
        for(var i = 0; i < e.length; i++) {
            e[i].style.WebkitAnimation = 'fadeOpen 750ms ease-in-out forwards ' + time + 's';
            e[i].style.animation = 'fadeOpen 750ms ease-in-out forwards ' + time + 's';
        }
    }
}

var checkArray = [true,true,true,true,true,true,true,true,true];

function slide_6_function(data) {

    var contain = document.querySelector(".slide-6-contain");
    var element = contain.children[data];
    var tempImg = document.querySelector(".slide-6-" + data);

    if(checkArray[data]) {
        element.style.WebkitAnimation = `rotateYwise 750ms ease-in-out forwards`;
        element.style.animation = `rotateYwise 750ms ease-in-out forwards`;
        setTimeout(function() {
            element.style.backgroundRepeat = "no-repeat";
            element.style.backgroundSize = "contain";
            element.style.backgroundImage = "url('../assets/slide-6-" + data + "-" + data + ".png')";
        }, 500);
        tempImg.style.display = "none";
        checkArray[data] = false;
    } else {
        tempImg.style.display = "block";
        element.style.WebkitAnimation = `rotateYwiseBackwards 750ms ease-in-out forwards`;
        element.style.animation = `rotateYwiseBackwards 750ms ease-in-out forwards`;
        setTimeout(function() {
            element.style.backgroundImage = `none`;
        }, 250);
        slide_6_1();
        checkArray[data] = true;
    }
}

function slide_16() {
    if(document.querySelector(".slide-16-1-contain")) {
        var time = 0.25;
        var e = document.querySelector(".slide-16-1-contain").children;
        for(var i = 0; i < e.length; i++) {
            time += 0.25;
            e[i].style.WebkitAnimation = 'fadeOpen 750ms ease-in-out forwards ' + time + 's';
            e[i].style.animation = 'fadeOpen 750ms ease-in-out forwards ' + time + 's';
        }
    }
}
