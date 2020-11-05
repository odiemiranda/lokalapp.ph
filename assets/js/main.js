
let app = {};

function onResize() {
    if (app.mainElWidth != app.mainEl.clientWidth) {
        app.mainElWidth = app.mainEl.clientWidth;

        if (app.mainElWidth <= 500) {
            app.housesSmallLeft.forEach(function(el) {
                el.style.width = "119vw";
            });
            app.housesSmallRight.forEach(function(el) {
                el.style.width = "112vw";
            });

            app.houses.forEach(function(el) {
                el.style.width = "0px";
            });

        } else {
            app.housesSmallLeft.forEach(function(el) {
                el.style.width = "0";
            });
            app.housesSmallRight.forEach(function(el) {
                el.style.width = "0";
            });

            app.houses.forEach(function(el) {
                el.style.width = "calc(50% - " + (app.mainElWidth / 2) + "px)";
            });

        }

        
    }
}

function switchSubText() {
    let currentIdx = false;
    let nextIdx = false;

    for (idx = 0; idx < app.subTexts.length; idx++) {      
        if (app.subTexts[idx].className == "active") {
            currentIdx = idx;
            if (idx < app.subTexts.length-1) {
                nextIdx = idx + 1;
            } else {
                nextIdx = 0;
            }
            break;
        }
   }

   app.subTexts[currentIdx].className= "";
   app.subTexts[nextIdx].className= "active";

}

function subTextAnimation() {
    setTimeout(function() {
        switchSubText();
        subTextAnimation();
    }, 5000);
}

function init() {
    app.mainEl = document.querySelector('.main p');
    app.houses = document.querySelectorAll('.houses.left, .houses.right');
    app.housesSmallLeft = document.querySelectorAll('.houses-small .line.left');
    app.housesSmallRight = document.querySelectorAll('.houses-small .line.right');
    app.subTexts = document.querySelectorAll('.sub-text span');
    app.mainElWidth = 0;


    app.subTexts.forEach(function(el, idx) {
        console.log(el, idx, el.className);
    })

    onResize();
    subTextAnimation();
}


window.onload = init;
window.onresize = onResize;