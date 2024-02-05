var express = require('express');
var router = express.Router();
const userModel=require("./users");
const postModel=require("./pins");
const localStrategy=require("passport-local");
const passport = require('passport');
const upload=require("./multer");
const upload2=require("./multer2");
passport.use(new localStrategy(userModel.authenticate()));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register');
});
router.get("/login",function(req,res){
  const logInFailureMsg=req.flash("error");
  res.render("login",{logInFailureMsg});
});
router.get("/createpin",isLoggedIn,async function(req,res){
  const username=req.session.passport.user;
  const user=await userModel.findOne({username:username});
  res.render("createpin",{user});
})

router.get("/profile",isLoggedIn,async function(req,res){
  const username=req.session.passport.user;
  const user=await userModel.findOne({username:username}).populate("pins");
  res.render("profile",{user});
});
     
router.get("/feed",isLoggedIn,async function(req,res){
  const allPosts=await postModel.find().populate("userId");
  res.render("feed",{allPosts});
})
router.get("/following",isLoggedIn,function(req,res){
  res.render("following");
})

router.post("/allpostinfo",isLoggedIn,async function(req,res){
  const postKoId=req.body.postid;
  const loggedInUserKoUsername=req.session.passport.user;
  const loggedInUserKoDetails=await userModel.findOne({username:loggedInUserKoUsername}).populate("following");
  console.log(loggedInUserKoDetails)
  const post=await postModel.findOne({_id:postKoId}).populate("userId");
  // console.log(post) 
  res.render("postinfo",{post,loggedInUserKoDetails})  
}) 

//for registering a user in the model
router.post("/register",function(req,res){ 
  const userdata=new userModel({
    fullName: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
  });
  userModel.register(userdata,req.body.password)
  .then(function(){
    passport.authenticate("local")(req,res,function(){
      res.redirect("/profile");
    }) 
  })
})

//for login
router.post("/login",passport.authenticate("local",{
  successRedirect:"/profile",
  failureRedirect:"/login",
  failureFlash:true,
}),function(req,res){});

//for log out 
router.get("/logout",function(req,res,next){
  req.logout(function(err){
    if(err) {return next(err);}
    res.redirect("/login");
  }) 
});

//for authorization(making IS LOGGED IN middleware)
function isLoggedIn(req,res,next){ 
  if(req.isAuthenticated()){
    return next();
  }else{
    res.redirect("/");
  } 
}
 
//for uploading profile picture
router.post("/image",isLoggedIn,upload.single("profile"),async function(req,res){
  const profilePic=req.file.filename;
  const username=req.session.passport.user;
  const user=await userModel.findOne({username:username});
  user.profileImage=profilePic; 
  await user.save();
  res.redirect("/profile");
});

//for uploading posts
router.post("/createpin",isLoggedIn,upload2.single("pin"),async function(req,res){
  const filename=req.file.filename;
  const username=req.session.passport.user;
  const user=await userModel.findOne({username:username});
  const post =await postModel.create({
    imageURL: filename,
    userId: user._id,
    caption: req.body.caption,   
    description: req.body.description,
    link:req.body.link,
  });
  user.pins.push(post._id);
  await user.save(); 
  res.redirect("/profile");
}) 

module.exports = router;
