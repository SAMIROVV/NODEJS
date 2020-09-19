'use strict';
                                                      //🔥🔥🔥🔥🔥🔥      TO SCRAPE WEBSITEZ ESPECIALLY GOOGLE TRENDS      🔥🔥🔥🔥🔥🔥//

const express = require('express');
const app = express(); 


//🔴 AMAZING SCRAPER WITH NEPOCHATAYA 
    //for google trends autocomplete link  ===  https://nodejs1server1.herokuapp.com/SCRAPER1?https://trends.google.com/trends/api/autocomplete/bitcoin?hl=en-US&tz=-60☆SCPGTACM
    //for google trends dailytrends  link  ===  https://nodejs1server1.herokuapp.com/SCRAPER1?https://trends.google.com/trends/api/dailytrends?hl=en-US&tz=-60&geo=AU&ns=15☆SCPGTDTR
    //for google real timerends      link  ===  https://nodejs1server1.herokuapp.com/SCRAPER1?https://trends.google.com/trends/api/realtimetrends?hl=en-US&tz=-60&cat=all&fi=0&fs=0&geo=AU&ri=300&rs=20&sort=0☆SCPGTRTT
    //for google trends all          link  ===  https://nodejs1server1.herokuapp.com/SCRAPER1?https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60☆SCPGTQRY
    //for other websites             link  ===  https://nodejs1server1.herokuapp.com/SCRAPER1?url☆SCPURL

app.get('/SCRAPER1', (req0, res0) => {
const url = require('url'); 
const Request = require('request');
  
	Request.post({url: 'https://scraper.nepochataya.pp.ua/sites', json: true, body: {"url":decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER1?','')  }}, (err, res, body) => {	
        Request({url: 'https://scraper.nepochataya.pp.ua'+body.previewPath, json: true,}, (err, res, body) => {
		
              var tz = req0.query.tz;
              var type = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[1];
		
	if(type === 'SCPURL' || type === ''){
		res0.header('Content-Type', 'application/json').send(body);}
		
	if(type === 'SCPGTACM'){
		res0.header('Content-Type', 'application/json').send(body.replace(')]}','').replace(/'/g, '').replace(',',''));}
	
	if(type === 'SCPGTDTR'){
		res0.header('Content-Type', 'application/json').send(body.replace(')]}','').replace(/'/g, '').replace(',',''));}
		
		
	if(type === 'SCPGTRTT'){
		res0.header('Content-Type', 'application/json').send(body.replace(')]}','').replace(/'/g, '').replace(',',''));}
		
	if(type === 'SCPGTEXPLORE'){
		res0.header('Content-Type', 'application/json').send(body.replace(')]}','').replace(/'/g, ''));}	
		
		
		
		
	if(type === 'SCPGTTS'){
		var obj = JSON.parse(body.replace(')]}','').replace(/'/g, ''));
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/multiline', query: {hl: req0.query.hl, tz: tz, req: JSON.stringify(obj.widgets[0].request), token: obj.widgets[0].token,tz: tz} }), json: true,}, (err, res, body) => {  
                res0.header('Content-Type', 'application/json').send(body.replace(')]}','').replace(/'/g, '').replace(',',''));});}
		
	if(type === 'SCPGTGEO'){
		var obj = JSON.parse(body.replace(')]}','').replace(/'/g, ''));
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/comparedgeo', query: {hl: req0.query.hl, tz: tz, req: JSON.stringify(obj.widgets[1].request), token: obj.widgets[1].token} }), json: true,}, (err, res, body) => {  
                res0.header('Content-Type', 'application/json').send(body.replace(')]}','').replace(/'/g, '').replace(',',''));});}	
		
	if(type === 'SCPGTTPC'){
		var obj = JSON.parse(body.replace(')]}','').replace(/'/g, ''));
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: JSON.stringify(obj.widgets[2].request), token: obj.widgets[2].token} }), json: true,}, (err, res, body) => {  
                res0.header('Content-Type', 'application/json').send(body.replace(')]}','').replace(/'/g, '').replace(',',''));});}	
		
	if(type === 'SCPGTQRY'){
		var obj = JSON.parse(body.replace(')]}','').replace(/'/g, ''));
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: JSON.stringify(obj.widgets[3].request), token: obj.widgets[3].token} }), json: true,}, (err, res, body) => {  
                res0.header('Content-Type', 'application/json').send(body.replace(')]}','').replace(/'/g, '').replace(',',''));});}		
		
			
});		
});
});
	






//🔴 GOOGLE TRENDS SCRAPER API
    //for SCPGTTS  Link  ===  https://nodejs1server1.herokuapp.com/SCRAPER2?keyword=bitcoin&startTime=400&endTime=10&geo=&hl=en&category=0&engine=youtube%E2%98%86SCPGTTS
    //for SCPGTGEO Link  ===  https://nodejs1server1.herokuapp.com/SCRAPER2?keyword=bitcoin&startTime=400&endTime=10&geo=&&resolution=&hl=en&category=0&engine=youtube%E2%98%86SCPGGEO
    //for SCPGTTPC Link  ===  https://nodejs1server1.herokuapp.com/SCRAPER2?keyword=bitcoin&startTime=400&endTime=10&geo=&hl=en&category=0&engine=youtube%E2%98%86SCPGTTPC
    //for SCPGTQRY Link  ===  https://nodejs1server1.herokuapp.com/SCRAPER2?keyword=bitcoin&startTime=400&endTime=10&geo=&hl=en&category=0&engine=youtube%E2%98%86SCPGTQRY
    //for SCPGTACM Link  ===  https://nodejs1server1.herokuapp.com/SCRAPER2?keyword=bitcoin&hl=en&engine=youtube%E2%98%86SCPGTACM
    //for SCPGTDTR Link  ===  https://nodejs1server1.herokuapp.com/SCRAPER2?geo=US&hl=en&time=400&engine=youtube%E2%98%86SCPGTDTR
    //for SCPGTRTT Link  ===  https://nodejs1server1.herokuapp.com/SCRAPER2?geo=US&hl=en&category=&engine=youtube%E2%98%86SCPGTRTT
    

app.get('/SCRAPER2', (req, res) => {
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









//🔴 AMAZING SCRAPER WITH COUNTWORDSFREE     
    //for google trends autocomplete link  ===  https://nodejs1server1.herokuapp.com/SCRAPER3?https://trends.google.com/trends/api/autocomplete/bitcoin?hl=en-US&tz=-60☆SCPGTACM
    //for google trends dailytrends  link  ===  https://nodejs1server1.herokuapp.com/SCRAPER3?https://trends.google.com/trends/api/dailytrends?hl=en-US&tz=-60&geo=AU&ns=15☆SCPGTDTR
    //for google real timerends      link  ===  https://nodejs1server1.herokuapp.com/SCRAPER3?https://trends.google.com/trends/api/realtimetrends?hl=en-US&tz=-60&cat=all&fi=0&fs=0&geo=AU&ri=300&rs=20&sort=0☆SCPGTRTT
    //for google trends all          link  ===  https://nodejs1server1.herokuapp.com/SCRAPER3?https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60☆SCPGTQRY
    //for other websites             link  ===  https://nodejs1server1.herokuapp.com/SCRAPER3?url☆SCPURL

app.get('/SCRAPER3', (req0, res0) => {
const url = require('url'); 
const Request = require('request');
  
	Request.post({url: 'https://countwordsfree.com/loadweb', json: true, body: {"url":decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER3?','') }}, (err, res, body) => {	
   
		
        
	var tz = req0.query.tz;
        var type = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[1];
		
	if(type === 'SCPURL' || type === ''){
        var obj = JSON.stringify(body).replace(/\\/g, '').replace('{"Success":true,"Text":")]}','').replace('n{"widgets"','{"widgets').replace(/'/g, '');
                //res0.send(JSON.parse(obj1.replace('{"Success":true,"Text":")]}','').replace('n{"widgets"','{"widgets').replace(/'/g, '')));}
                res0.header('Content-Type', 'application/json').send(obj);}

		     
	if(type === 'SCPGTACM'){
		res0.header('Content-Type', 'application/json').send(JSON.stringify(body).replace(/\\/g, ''));}
	
	if(type === 'SCPGTDTR'){
		res0.header('Content-Type', 'application/json').send(JSON.stringify(body).replace(/\\/g, ''));}
		
		
	if(type === 'SCPGTRTT'){
		res0.header('Content-Type', 'application/json').send(JSON.stringify(body).replace(/\\/g, ''));}
		
	if(type === 'SCPGTEXPLORE'){
		res0.header('Content-Type', 'application/json').send(JSON.stringify(body).replace(/\\/g, ''));}	
		
		
		
		
	if(type === 'SCPGTTS'){
		var obj = JSON.stringify(body).replace(/\\/g, '').replace('{"Success":true,"Text":")]}','').replace('n{"widgets"','{"widgets').replace(/'/g, '');
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/multiline', query: {hl: req0.query.hl, tz: tz, req: JSON.stringify(obj.widgets[0].request), token: obj.widgets[0].token,tz: tz} }), json: true,}, (err, res, body) => {  
                res0.header('Content-Type', 'application/json').send(body.replace(')]}','').replace(/'/g, '').replace(',',''));});}
		
	if(type === 'SCPGTGEO'){
		var obj = JSON.stringify(body).replace(/\\/g, '').replace('{"Success":true,"Text":")]}','').replace('n{"widgets"','{"widgets').replace(/'/g, '');
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/comparedgeo', query: {hl: req0.query.hl, tz: tz, req: JSON.stringify(obj.widgets[1].request), token: obj.widgets[1].token} }), json: true,}, (err, res, body) => {  
                res0.header('Content-Type', 'application/json').send(body.replace(')]}','').replace(/'/g, '').replace(',',''));});}	
		
	if(type === 'SCPGTTPC'){
		var obj = JSON.stringify(body).replace(/\\/g, '').replace('{"Success":true,"Text":")]}','').replace('n{"widgets"','{"widgets').replace(/'/g, '');
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: JSON.stringify(obj.widgets[2].request), token: obj.widgets[2].token} }), json: true,}, (err, res, body) => {  
                res0.header('Content-Type', 'application/json').send(body.replace(')]}','').replace(/'/g, '').replace(',',''));});}	
		
	if(type === 'SCPGTQRY'){
		var obj = JSON.stringify(body).replace(/\\/g, '').replace('{"Success":true,"Text":")]}','').replace('n{"widgets"','{"widgets').replace(/'/g, '');
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: JSON.stringify(obj.widgets[3].request), token: obj.widgets[3].token} }), json: true,}, (err, res, body) => {  
                res0.header('Content-Type', 'application/json').send(body.replace(')]}','').replace(/'/g, '').replace(',',''));});}		
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	});});




                                         //🔥🔥🔥🔥🔥🔥      TO SCRAPE WEBSITEZ USING GET REQUEST     🔥🔥🔥🔥🔥🔥//



//🔵 SCRAPER NORMAL WITH AXIOS
   //for websites link  ===  https://nodejs1server1.herokuapp.com/SCRAPER4?url

app.get('/SCRAPER4', (req0, res0) => {
const axios = require('axios');
const cheerio = require('cheerio');
const url = require('url'); 
axios.get(decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER4?',''))
	.then(({ data }) => {
  const $ = cheerio.load(data);
  res0.status(200).header('Content-Type', 'application/json').send(data).end();
        });});




		
		
		
		
//🔵 SCRAPER NORMAL WITH REQUEST
    //for websites link  ===  https://nodejs1server1.herokuapp.com/SCRAPER5?url

app.get('/SCRAPER5', (req0, res0) => {
const url = require('url'); 
const Request = require('request');
  
                Request({url:decodeURIComponent(url.format({ pathname: req0.originalUrl })).replace('/SCRAPER5?','')  }, (err, res, body) => {	
                res0.header('Content-Type', 'application/json').send(body).end();  
});
});



		
		




//🔵 SCRAPER NORMAL WITH WEBSITE_SCRAPER
   //for websites link  ===  https://nodejs1server1.herokuapp.com/SCRAPER6?url

app.get(('/SCRAPER6'),(req0, res0) => {
const scrape = require('website-scraper');
const url = require('url');
	
const options = {
  urls: [decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER6?','')],
  directory: decodeURIComponent(url.format({protocol: 'https',   host: req0.get('host'),    pathname: req0.originalUrl}))
};
	
	
	scrape(options, (err, res, body) => {res0.json(body).end();});
});
	
	



//🔵
app.get('/SCRAPER9', (req0, res0) => {
const url = require('url'); 
const Request = require('request');
const options = {
      method: 'GET',
      host: 'trends.google.com',
      path: '/trends/api/explore',
      qs: {
        hl: req0.query.hl,
        req: '{%22comparisonItem%22:[{%22keyword%22:%22bitcoin%22,%22geo%22:%22%22,%22time%22:%22today+5-y%22}],%22category%22:0,%22property%22:%22youtube%22}'
        tz: '-60',
      },
    };

   

    return Request(options)
    .then((results) => {
      //const parsedResults = parseResults(results);
	    res0.send(results);
	    
	    });
});
	    

	

    


    	
	




                                //🔥🔥🔥🔥🔥🔥      TO SCRAPE WEBSITEZ USING POST REQUEST     🔥🔥🔥🔥🔥🔥//



//❤ SCRAPER WITH REQUEST.POST
   //for websites link  ===  https://nodejs1server1.herokuapp.com/SCRAPER7?https://☆https://

app.get('/SCRAPER7', (req0, res0) => {
const url = require('url'); 
const Request = require('request');

  
	Request.post({path: decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER7?',''), json: true, body: {"url":decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[1] }}, (err, res, body) => {	
        res0.header('Content-Type', 'application/json').send(body).end();
        });});             
	



//❤ SCRAPER WITH AXIOS.POST
   //for websites link  ===  https://nodejs1server1.herokuapp.com/SCRAPER8?https://☆https://

app.get('/SCRAPER8', (req0, res0) => {
const axios = require('axios')
const url = require('url');
	
axios.post({url: decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER8?',''), json: true, body: {"url":decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[1] }}, (err, res, body) => {	
        res0.header('Content-Type', 'application/json').send(body).end();
        });});







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
