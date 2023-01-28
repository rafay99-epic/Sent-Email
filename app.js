//Loading the express for application
const port= 5000;
const express = require("express");
const axios= require("axios");
const cherrio= require("cheerio");


// Using express for run the application
var app = express();

//The url of different website
const url= "https://www.pakistanlawsite.com/Login/MainPage";


//axio will get the html data from the url
axios(url)
        .then(respond =>{
              const html_code= respond.data
              console.log(html_code);
  });



app.listen(port,()=>{
    console.log("The server is running on port:" + port)
});
