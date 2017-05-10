function start() {

    resizeAnimation();
    var elements = document.querySelectorAll("img");
    for(let e of elements) {
        e.ondragstart = function() { return false; };
    }
}

function videoCheck() {
    let videoElement = document.querySelector("video");
    videoElement.onended = function() {
        alert("The video has ended");
        window.location.assign("slides/slide-1.html");
    };
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
    //alert(`slide-${data}.html`);
    if(data === 0) {
        window.location.assign("../index.html");
        return;
    }
    window.location.assign(`slide-${data}.html`);
}

function slide_5() {
    if(document.querySelectorAll(".slide-5-imgs")) {
        let time = 1.0;
        for(let e of Array.from(document.querySelectorAll(".slide-5-imgs"))) {
            time += 0.25;
            e.style.WebkitAnimation = `fadeOpen 750ms ease-in-out forwards ${time}s`;
            e.style.animation = `fadeOpen 750ms ease-in-out forwards ${time}s`;
        }
    }

    if(document.querySelectorAll(".slide-5-imgs-se")) {
        let time = 3.25;
        for(let e of Array.from(document.querySelectorAll(".slide-5-imgs-se"))) {
            time += 0.25;
            e.style.WebkitAnimation = `fadeOpen 750ms ease-in-out forwards ${time}s`;
            e.style.animation = `fadeOpen 750ms ease-in-out forwards ${time}s`;
        }
    }
}
<<<<<<< HEAD
//Function reel 
function reelImage(){
	
	var idImage=document.getElementById("imgReel");
	var size=idImage.getAttribute("data-reel-size");
	var time=idImage.getAttribute("data-reel-time");
	var rute=idImage.getAttribute("data-reel-src")+"/";
	var type="."+idImage.getAttribute("data-type");
	var timeStart=idImage.getAttribute("data-start");
	var loop=idImage.getAttribute("data-loop");
	var cont=0;
		
	var validate=(loop=="true")?true:false;
	console.log(validate);
	setTimeout(function(){
	var interval=setInterval(function(){
		
		
		idImage.src=rute+cont+type;
		
			cont++;
		if(cont>size){
			if(validate){
			
				cont=0;
			}
			else{
				clearInterval(interval);
			return false;
			}
		}
		
	},time);
	
	},timeStart);
	
=======

function slide_6() {
    if(document.querySelectorAll(".slide-6-imgs")) {
        let time = 0.25;
        for(let e of Array.from(document.querySelectorAll(".slide-6-imgs"))) {
            time += 0.25;
            e.style.WebkitAnimation = `fadeOpen 750ms ease-in-out forwards ${time}s`;
            e.style.animation = `fadeOpen 750ms ease-in-out forwards ${time}s`;
        }
    }
}

function slide_6_1() {
    if(document.querySelectorAll(".slide-6-imgs")) {
        let time = 0.25;
        for(let e of Array.from(document.querySelectorAll(".slide-6-imgs"))) {
            e.style.WebkitAnimation = `fadeOpen 750ms ease-in-out forwards ${time}s`;
            e.style.animation = `fadeOpen 750ms ease-in-out forwards ${time}s`;
        }
    }
}

let checkArray = [true,true,true,true,true,true,true,true,true];

function slide_6_function(data) {

    let contain = document.querySelector(".slide-6-contain");
    let element = contain.children[data];
    let tempImg = document.querySelector(`.slide-6-${data}`);

    if(checkArray[data]) {
        element.style.WebkitAnimation = `rotateYwise 750ms ease-in-out forwards`;
        element.style.animation = `rotateYwise 750ms ease-in-out forwards`;
        setTimeout(function() {
            element.style.backgroundRepeat = "no-repeat";
            element.style.backgroundSize = "contain";
            element.style.backgroundImage = `url('../assets/slide-6-${data}-${data}.png')`;
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
        let time = 0.25;
        for(let e of Array.from(document.querySelector(".slide-16-1-contain").children)) {
            time += 0.25;
            e.style.WebkitAnimation = `fadeOpen 750ms ease-in-out forwards ${time}s`;
            e.style.animation = `fadeOpen 750ms ease-in-out forwards ${time}s`;
        }
    }
>>>>>>> refs/remotes/origin/danielBranch
}
