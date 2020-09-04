'use strict';

const express = require('express');
const googleTrends = require('google-trends-api');
const app = express();


//GT IS GOOGLE TRENDS


//🌷INTEREST BY REGIONS

app.get('/GT_IBR', (req, res) => {
  googleTrends.interestByRegion ({keyword: req.query.keyword})
        .then(function(results){
        res
            .status(200)
            .header('Content-Type', 'application/json')
            .send(results)
            .end();
        console.log('These results are awesome', results);
      });
});




//🌷INTEREST OVER TIME

app.get('/GT_IOT', (req, res) => {
  googleTrends.interestOverTime ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000))})
        .then(function(results){
        res
            .status(200)
            .header('Content-Type', 'application/json')
            .send(results)
            .end();
        console.log('These results are awesome', results);
      });
});





//🌷RELATED QUERIES

app.get('/GT_RQ', (req, res) => {
  googleTrends.relatedQueries ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000))})
        .then(function(results){
        res
            .status(200)
            .header('Content-Type', 'application/json')
            .send(results)
            .end();
        console.log('These results are awesome', results);
      });
        
      });




//🌷RELATED TOPICS

app.get('/GT_RT', (req, res) => {
  googleTrends.relatedTopics ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000))})
        .then(function(results){
        res
            .status(200)
            .header('Content-Type', 'application/json')
            .send(results)
            .end();
        console.log('These results are awesome', results);
      });
});





//🌷AUTOCOMPLETE

app.get('/GTAC', (req, res) => {
  googleTrends.autoComplete ({keyword: req.query.keyword, hl: req.query.language})
        .then(function(results){
        res
            .status(200)
            .header('Content-Type', 'application/json')
            .send(results)
            .end();
        console.log('These results are awesome', results);
      });
});





//🌷DAILY  TRENDS

app.get('/GTDT', (req, res) => {
  googleTrends.dailyTrends ({geo: req.query.geo, hl: req.query.language, trendDate: new Date(Date.now() - (req.query.time * 60 * 60 * 1000))})
        .then(function(results){
        res
            .status(200)
            .header('Content-Type', 'application/json')
            .send(results)
            .end();
        console.log('These results are awesome', results);
      });
});





//🌷REAL TIME TRENDS

app.get('/GTRTT', (req, res) => {
  googleTrends.realTimeTrends ({geo: req.query.geo})
        .then(function(results){
        res
            .status(200)
            .header('Content-Type', 'application/json')
            .send(results)
            .end();
        console.log('These results are awesome', results);
      });
});





//🌷Fetch Json
const scrape = require('website-scraper');
app.get(('/scraper'),(req, res) => {
const url = 'https://trends.google.com/trends/api/explore?hl=en-GB&tz=-60&req={"comparisonItem":[{"keyword":"banana","geo":"US","time":"today+12-m"},{"keyword":"boy","geo":"US","time":"today+12-m"},{"keyword":"sexy","geo":"US","time":"today+12-m"},{"keyword":"star","geo":"US","time":"today+12-m"},{"keyword":"mom","geo":"US","time":"today+12-m"}],"category":0,"property":""}&tz=-60';

	
	
scrape({
  urls: [url],
  directory: '/app'
})  
	
	.then(function(results){
        res
            .status(200)
            .header('Content-Type', 'application/json')
            .send(results)
            .end();
        console.log('These results are awesome', results);
      });

});



//🌷YOUTUBE SCRAPE SEARCH

app.get('/YTSEARCH', (req, res) => {
const simpleYT = require('simpleyt')

simpleYT(req.query.keyword, {
    filter: req.query.type
    // Available filters: video, playlist
 //https://ytapi.cf/search/girl
    
})
	.then(function(results){
        res
            .status(200)
            .header('Content-Type', 'application/json')
            .send(results)
            .end();
        console.log('These results are awesome', results);
      });
	
});





app.get('/Scrap', (req, res) => {

	var scrapman = require("scrapman")
scrapman.load(req.query.url, function(results){
    //results contains the HTML obtained from the url
    console.log(results);
});
  


});




//🌷Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;
