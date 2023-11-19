const express = require("express");
const app = express();
const port =3000;

const checkWorkingHours = (req, res, next) => {
  const currentDay = new Date().getDay(); // 0 is Sunday, 1 is Monday, and so on
  const currentHour = new Date().getHours();

  
  if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 9 &&
    currentHour < 17
  ) {
    next(); 
  } else {
    res
      .status(403)
      .sendFile(__dirname+'/view/auth.html')
  }
};


app.use(checkWorkingHours);
app.use(express.static(__dirname+'/view'))


app.get("/",(req,res)=>{
  res.status(200).sendFile(__dirname+ "/view/Home.html");
})


app.get("/ContactUS", (req, res) => {
  res.status(200).sendFile(__dirname + "/view/ContactUs.html");
});
app.get("/OurServices", (req, res) => {
  res.status(200).sendFile(__dirname + "/view/OurServices.html");
});

app.listen(port,(err)=>err? console.log(err):console.log("server listening on port: " , port));