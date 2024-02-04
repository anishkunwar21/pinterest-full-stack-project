const pinsContainer=document.querySelector(".posts-flex-container");
const postsBox=pinsContainer.children;
const btns=document.querySelectorAll(".btn-hehe");
const form=document.querySelectorAll(".form");
for(let btn of btns){
btn.addEventListener("click",function(){
    btn.nextElementSibling.submit();
})
}














































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

// // <a href="/profile/postinfo" class="posts-box-btn">
// </a>