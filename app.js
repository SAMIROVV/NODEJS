'use strict';


const express = require('express');
const app = express(); 


//🔴 AMAZING SCRAPER WITH NEPOCHATAYA 
    //for google trends  link  ===  https://nodejs1server1.herokuapp.com/SCRAPER1?https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60☆GTQRY
    //for other websites link  ===  https://nodejs1server1.herokuapp.com/SCRAPER1?url☆URL

app.get('/SCRAPER1', (req0, res0) => {
const url = require('url'); 
const Request = require('request');
  
	Request.post({url: 'https://scraper.nepochataya.pp.ua/sites', json: true, body: {"url":decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER1?','')  }}, (err, res, body) => {	
        Request({url: 'https://scraper.nepochataya.pp.ua'+body.previewPath, json: true,}, (err, res, body) => {
		
              var tz = req0.query.tz;
              var obj = JSON.parse(body.replace(')]}','').replace(/'/g, ''));
              var type = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[1];
		
	if(type === 'SCPURL'){
		res0.send(body);}
		
	if(type === 'SCPGTEXPLORE'){
		res0.send(body.replace(')]}','').replace(/'/g, ''));}	
		
	if(type === 'SCPGTTS'){
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/multiline', query: {hl: req0.query.hl, tz: tz, req: JSON.stringify(obj.widgets[0].request), token: obj.widgets[0].token,tz: tz} }), json: true,}, (err, res, body) => {  
                res0.send(body.replace(')]}','').replace(/'/g, '').replace(',',''));});}
		
	if(type === 'SCPGTGEO'){
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/comparedgeo', query: {hl: req0.query.hl, tz: tz, req: JSON.stringify(obj.widgets[1].request), token: obj.widgets[1].token} }), json: true,}, (err, res, body) => {  
                res0.send(body.replace(')]}','').replace(/'/g, '').replace(',',''));});}	
		
	if(type === 'SCPGTTPC'){
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: JSON.stringify(obj.widgets[2].request), token: obj.widgets[2].token} }), json: true,}, (err, res, body) => {  
                res0.send(body.replace(')]}','').replace(/'/g, '').replace(',',''));});}	
		
	if(type === 'SCPGTQRY'){
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: JSON.stringify(obj.widgets[3].request), token: obj.widgets[3].token} }), json: true,}, (err, res, body) => {  
                res0.send(body.replace(')]}','').replace(/'/g, '').replace(',',''));});}		
		
			
});		
});
});
	




//🔵 SCRAPER NORMAL
    //for websites link  ===  https://nodejs1server1.herokuapp.com/SCRAPER2?url
app.get('/SCRAPER2', (req0, res0) => {
const url = require('url'); 
const Request = require('request');
  
                Request({url:decodeURIComponent(url.format({ pathname: req0.originalUrl })).replace('/SCRAPER2?','')  }, (err, res, body) => {	
                res0.header('Content-Type', 'application/json').send(body).end();  
});
});







//🔴 GOOGLE TRENDS SCRAPER
    //for SCPGTTS  Link  ===  https://nodejs1server1.herokuapp.com/SCRAPER3?keyword=bitcoin&startTime=400&endTime=10&geo=&hl=en&category=0&engine=youtube%E2%98%86SCPGTTS
    //for SCPGTGEO Link  ===  https://nodejs1server1.herokuapp.com/SCRAPER3?keyword=bitcoin&startTime=400&endTime=10&geo=&&resolution=&hl=en&category=0&engine=youtube%E2%98%86SCPGGEO
    //for SCPGTTPC Link  ===  https://nodejs1server1.herokuapp.com/SCRAPER3?keyword=bitcoin&startTime=400&endTime=10&geo=&hl=en&category=0&engine=youtube%E2%98%86SCPGTTPC
    //for SCPGTQRY Link  ===  https://nodejs1server1.herokuapp.com/SCRAPER3?keyword=bitcoin&startTime=400&endTime=10&geo=&hl=en&category=0&engine=youtube%E2%98%86SCPGTQRY
    //for SCPGTACM Link  ===  https://nodejs1server1.herokuapp.com/SCRAPER3?keyword=bitcoin&hl=en&engine=youtube%E2%98%86SCPGTACM
    //for SCPGTDTR Link  ===  https://nodejs1server1.herokuapp.com/SCRAPER3?geo=&hl=en&time=400&engine=youtube%E2%98%86SCPGTDTR
    //for SCPGTRTT Link  ===  https://nodejs1server1.herokuapp.com/SCRAPER3?keyword=geo=&hl=en&category=0&engine=youtube%E2%98%86SCPGTRTT
    

app.get('/SCRAPER3', (req, res) => {
const googleTrends = require('google-trends-api');
const url = require('url');
var type = decodeURIComponent(url.format({ pathname: req.originalUrl })).split("☆")[1];
		

	if(type === 'SCPGTTS'){googleTrends.interestOverTime ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000)),endTime: new Date(Date.now() - (req.query.endTime * 60 * 60 * 1000)), geo: req.query.geo, hl: req.query.language, category: req.query.category, property: req.query.engine})
           .then(function(results){res.header('Content-Type', 'application/json').send(results).end();});}
	
	if(type === 'SCPGTGEO'){ googleTrends.interestByRegion ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000)),endTime: new Date(Date.now() - (req.query.endTime * 60 * 60 * 1000)), geo: req.query.geo, resolution:req.query.resolution, hl: req.query.language, category: req.query.category, property: req.query.engine})
           .then(function(results){ res.header('Content-Type', 'application/json').send(results).end();});}

	if(type === 'SCPGTTPC'){ googleTrends.relatedTopics ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000)), endTime: new Date(Date.now() - (req.query.endTime * 60 * 60 * 1000)), geo: req.query.geo, hl: req.query.language, category: req.query.category ,property: req.query.engine})
           .then(function(results){ res.header('Content-Type', 'application/json').send(results).end();});}
	
	if(type === 'SCPGTQRY'){ googleTrends.relatedQueries ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000)), endTime: new Date(Date.now() - (req.query.endTime * 60 * 60 * 1000)), geo: req.query.geo, hl: req.query.language, category: req.query.category, property: req.query.engine})
           .then(function(results){ res.header('Content-Type', 'application/json').send(results).end();}); }
	
	if(type === 'SCPGTACM'){ googleTrends.autoComplete ({keyword: req.query.keyword, hl: req.query.language ,property: req.query.engine})
           .then(function(results){ res.header('Content-Type', 'application/json').send(results).end();}); }
	
	if(type === 'SCPGTDTR'){ googleTrends.dailyTrends ({geo: req.query.geo, hl: req.query.language, trendDate: new Date(Date.now() - (req.query.time * 60 * 60 * 1000)), property: req.query.engine})
           .then(function(results){ res.header('Content-Type', 'application/json').send(results).end();}); }
	
	if(type === 'SCPGTRTT'){ googleTrends.realTimeTrends ({geo: req.query.geo, hl: req.query.language, category: req.query.category, property: req.query.engine})
           .then(function(results){ res.header('Content-Type', 'application/json').send(results).end();}); }


});







//🌷Fetch Json
const scrape = require('website-scraper');
app.get(('/SCRAPE2'),(req, res) => {
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



//🌷Website SCRAPER

app.get('/SCRAPE3', (req, res) => {
const axios = require('axios');
const cheerio = require('cheerio');

axios.get(req.query.url)
	
		
	
	.then(({ data }) => {
  const $ = cheerio.load(data);
  res
            .status(200)
            .header('Content-Type', 'application/json')
	
            .send(data)
            .end();
        console.log('These results are awesome', data);
  
});
	

});




//🌷WEBSITE SCRAPER

app.get('/SCRAPE4', (req, res) => {
const phantomJsCloud = require("phantomjscloud")
var browser = new phantomJsCloud.BrowserApi(req.query.key)
        
        browser.requestSingle({ url: req.query.url, renderType: "plainText" })
	
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

app.get('/YTSEARCH1', (req, res) => {
const simpleYT = require('simpleyt')

simpleYT(req.query.keyword, {
    filter: req.query.type
    // Available filters: video, playlist
 //https://ytapi.cf/search/girl
    
})
            .header('Content-Type', 'application/json')
            .send(results)
            .end();
        console.log('These results are awesome', results);
      });
	



//🌷YOUTUBE SCRAPE SEARCH

app.get('/YTSEARCH2', (req, res) => {
const axios = require('axios');
const cheerio = require('cheerio');

axios.get(req.query.url)
	
		
	
	.then(({ data }) => {
  const $ = cheerio.load(data);
  res
            .status(200)
            .header('Content-Type', 'application/json')
	
            .send(data)
            .end();
        console.log('These results are awesome', data);
  
});
	

});


//🌷YOUTUBE SCRAPE SEARCH
app.get('/YTSEARCH3', (req, res) => {
const phantomJsCloud = require("phantomjscloud")
var browser = new phantomJsCloud.BrowserApi(req.query.key)
        
        browser.requestSingle({ url: req.query.url, renderType: "plainText" })
	
	.then(function(results){
        res
            .status(200)
            .header('Content-Type', 'application/json')
            .send(results)
            .end();
        console.log('These results are awesome', results);
      });
                
	
	});





//🌷Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;
