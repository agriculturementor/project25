const express = require("express");
const app = express();
const ejsmate = require("ejs-mate");
const CropPrice = require("./models/CropPrice");
const mentors = require("./models/mentorschema.js");
const farmer = require("./models/farmerschema.js");

 const methodOverride = require("method-override");

app.engine('ejs',ejsmate);
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

const mongoose = require('mongoose');
const url = "mongodb+srv://amit_123:962721@cluster0.u8hzvws.mongodb.net/price";
async function main(){
    await mongoose.connect(url);
}
main().catch(err => console.log(err));


app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.get("/profile",(req,res) =>{
    res.render("profile.ejs");
});
app.get("/home",async(req,res) =>{
 const allprice = await CropPrice.find({});
 const mentor = await mentors.find({});
 
    res.render("home.ejs", {allprice,mentor});
});
app.get("/Price/New", (req, res) => {
    res.render("Addprice.ejs");
});
app.post("/Price/New/add", async (req, res) => {
    const newprice = new CropPrice( req.body.Price);
  console.log(newprice);
     await newprice.save();
    res.redirect("/home");
});
// mentors
//new mentor
app.get("/mentor/new", (req, res) => {
    res.render("newmentor.ejs");
});
app.post("/mentor/new/add", async (req, res) => {
    const newmentor = new mentors( req.body.Mentor);
  // console.log(newmentor);
     await newmentor.save();
    res.redirect("/mentor");
});

app.get("/mentor", async(req, res) => {
  const mentor = await mentors.find({});
    res.render("mentor.ejs", {mentor});
});
 app.get("/mentor/:id", async(req, res) => {
  const mentor = await mentors.findById(req.params.id);
  console.log(mentor);
    res.render("profile.ejs", {mentor});
});


app.post("/search", async (req, res) => {
  try {
    const {crop} = req.body;
   
    console.log(crop);
   let   allprice = await CropPrice.find({district:crop});
  //  console.log(allprice);
   if( allprice.length == 0){
    allprice = await CropPrice.find({crop:crop});
   }
   if(allprice.length == 0){
    allprice = await CropPrice.find({state:crop});
   }
    
   

    console.log(allprice);
    res.render("search.ejs", { allprice }); 
  } catch (err) {
    console.error("Error while searching:", err);
    res.status(500).send("Server Error");
  }
});

app.get("/connect/:id", async(req, res) => {
  let id = req.params.id;
  console.log(id);
  // const mentor = await mentors.findById(req.params.id);
  // console.log(mentor);
     res.render("Newfarmer.ejs", {id});
});

app.post("/farmers/new/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const mentor = await mentors.findById(id);
    const newfarmer = new farmer( req.body.farmer);
  //  console.log(newfarmer);
     
     await mentor.save();
     await newfarmer.save();
    res.redirect("/home");
});

app.get("/community", (req, res) => {
  res.render("community.ejs");
});

// Schemes (uses free public API with fallback; view: views/schemes.ejs)
app.get("/schemes", (req, res) => {
  res.render("schemes.ejs");
});

app.listen(8080,(req,res)=>{
    console.log("port is listening on port 8080");
});