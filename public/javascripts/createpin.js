const uploadSection=document.querySelector(".upload-section");
const choosePinFile=document.querySelector(".choose");
const form=document.querySelector(".form");
uploadSection.addEventListener("click",function(){
    choosePinFile.click();
});
choosePinFile.addEventListener("change",function(req,res){
    uploadSection.innerHTML=`<div class="upload-text-content">
    <i class="fa-2x fa-solid fa-circle-check icon"></i>
    <h1 class="uploaded">Uploaded!</h1>
    </div>`
})
/**
 * <%
        user.pins.length===0?
        <div class="txt-box">
            <h1>Nothing to show...yet! Pins you create will live here.</h1>
            <a href="/createpin"><button class="btn">Create Pin</button></a>
        </div>:
        <div class="posts-flex-container">
            <%
            user.pins.forEach(function(pin){ %>
                <div class="posts-box">
                <img src="/images/pins/<%=pin.imageURL%>">
            </div>
            <% })
             %>
        %>
 */