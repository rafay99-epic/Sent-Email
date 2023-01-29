//Loading the express for application
const port= 5000;
const express = require("express");
const axios= require("axios");
const cherrio= require("cheerio");


// Using express for run the application
var app = express();

// //The url of different website
// const url= "https://www.pakistanlawsite.com/Login/MainPage";


// //axio will get the html data from the url
// axios(url)
//         .then(respond =>{
//               const html_code= respond.data
//               // console.log(html_code);
//               const $ = cherrio.load(html_code);
//               // /array
//               const article = [];
//                $(".fc-item__title",html_code).each(function(){
//                   const title = $(this).text()
//                   const url =$(this).find('a').attr('herf')
//                   article.push({
//                     title,
//                     url
//                 })
//                 console.log(article);
//   })
// }).catch(err => console.log(err))




const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.pakistanlawsite.com/Login/MainPage");

  const data = await page.$eval("div.data-class", (el) => el.innerText);
  console.log(data);

  await browser.close();
}

run();



app.listen(port,()=>{
    console.log("The server is running on port:" + port)
})
