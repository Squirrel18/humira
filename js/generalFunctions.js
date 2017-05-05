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
