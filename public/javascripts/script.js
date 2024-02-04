const icon=document.querySelector(".icon");
const chooseFile=document.querySelector(".choose-file");
const form=document.querySelector(".form");
const pinsContainer=document.querySelector(".posts-flex-container");
const impBtn=document.querySelector(".btn-hehe");
const postsBox=pinsContainer.children;
//                 // <a href="/profile/postinfo" class="posts-box-btn">
// </a>

icon.addEventListener("click",function(){
    chooseFile.click();
});
chooseFile.addEventListener("change",function(){
    form.submit();
});





function creatingRandomHeightAndWidthForPins(){
for(let postBox of postsBox){
    // let randomHeight=Math.floor(Math.random()*329);
    // let randomWidth=Math.floor(Math.random()*244);
    function randomHeight(maxHeight,minHeight){
        let difference=maxHeight-minHeight;
        let random=Math.random();
        random=Math.floor(random*difference);
        random=random+minHeight;
        return random;
    }
    function randomWidth(maxWidth,minWidth){
        let difference=maxWidth-minWidth;
        let random=Math.random();
        random=Math.floor(random*difference);
        random=random+minWidth;
        return random;
    }
    const height=randomHeight(350,156);
    const width=randomWidth(245,240)
    postBox.style.height=`${height}px`;
    postBox.style.width=`${width}px`;
}
}
creatingRandomHeightAndWidthForPins();



/**
 *  function generateRandom(min = 0, max = 100) {

        // find diff
        let difference = max - min;
    
        // generate random number 
        let rand = Math.random();
    
        // multiply with difference 
        rand = Math.floor( rand * difference);
    
        // add with min value 
        rand = rand + min;
    
        return rand;
    }
    
    console.log(generateRandom());
 */