var navMenuAnchorTags=document.querySelectorAll(".nav-menu a");
var interval;
for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        // var targetSectionId=this.textContent.trim().toLowerCase();
        // var targetSection=document.getElementById(targetSectionId);
        var targetSectionId=this.getAttribute("href").substring(1);
        var targetSection=document.getElementById(targetSectionId);
        // console.log(targetSection);
        interval=setInterval(scrollVertically,20,targetSection);
    });
}

function scrollVertically(targetSection){
    var targetSectionCoordinates=targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top<=0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
}

var progressBars=document.querySelectorAll(".skill-progress>div");
var skillsContainer=document.getElementById("skills-container");
var animationDone=false;
window.addEventListener('scroll',checkScroll);

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width=0+'%';
    }
}
initialiseBars();

function fillBars(){
    for(let bar of progressBars){
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth+'%';
        },5);
    }
}


function checkScroll(){
    // check if skills-container is visible on window 
    var coordinates= skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<window.innerHeight){
        // skills container section is visible
        animationDone=true;
        console.log("skills section visible");
        fillBars();
    }
}

