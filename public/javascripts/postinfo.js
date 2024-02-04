const followBtn=document.querySelector(".follow-btn");
const unFollowBtn=document.querySelector(".unfollow-btn");
const followForm=document.querySelector(".followForm")
const unFollowForm=document.querySelector(".unFollowForm")
console.log(followBtn,unFollowBtn,followForm,unFollowForm);
followBtn.addEventListener("click",function(){
    followForm.submit();
});
unFollowBtn.addEventListener("click",function(){
    unFollowForm.submit();
})