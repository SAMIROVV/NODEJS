'use strict';


const express = require('express');
const googleTrends = require('google-trends-api');
const app = express();



//GT IS GOOGLE TRENDS


//🌷INTEREST BY REGIONS

app.get('/GTIBR', (req, res) => {
  googleTrends.interestByRegion ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000)),endTime: new Date(Date.now() - (req.query.endTime * 60 * 60 * 1000)), geo: req.query.geo, resolution:req.query.resolution, hl: req.query.language, category: req.query.category, property: req.query.engine, resolution: req.query.resolution})

        .then(function(results){
        res
            .status(200)
            .header('Content-Type', 'application/json')
            .send(results)
            .end();
        console.log('These results are awesome', results);
      })
	
	.catch((err) => {
  console.log(err);
})
});




//🌷INTEREST OVER TIME

app.get('/GTIOT', (req, res) => {
  googleTrends.interestOverTime ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000)),endTime: new Date(Date.now() - (req.query.endTime * 60 * 60 * 1000)), geo: req.query.geo, hl: req.query.language, category: req.query.category, property: req.query.engine})

        .then(function(results){
        res
            .status(200)
            .header('Content-Type', 'application/json')
            .send(results)
            .end();
        console.log('These results are awesome', results);
      })
	
	.catch((err) => {
  console.log(err);
})
});





//🌷RELATED QUERIES

app.get('/GTRQ', (req, res) => {
  googleTrends.relatedQueries ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000)), endTime: new Date(Date.now() - (req.query.endTime * 60 * 60 * 1000)), geo: req.query.geo, hl: req.query.language, category: req.query.category, property: req.query.engine})
        //googleTrends.relatedQueries ({keyword: req.query.keyword})
	  .then(function(results){
        res
            .status(200)
            .header('Content-Type', 'application/json')
            .send(results)
            .end();
        console.log('These results are awesome', results);
      })
        
	.catch((err) => {
  console.log(err);
})
	
      });




//🌷RELATED TOPICS

app.get('/GTRT', (req, res) => {
  googleTrends.relatedTopics ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000)), endTime: new Date(Date.now() - (req.query.endTime * 60 * 60 * 1000)), geo: req.query.geo, hl: req.query.language, category: req.query.category ,property: req.query.engine})

        .then(function(results){
        res
            .status(200)
            .header('Content-Type', 'application/json')
            .send(results)
            .end();
        console.log('These results are awesome', results);
      })
	
	.catch((err) => {
  console.log(err);
})
	
});





//🌷AUTOCOMPLETE

app.get('/GTAC', (req, res) => {
  googleTrends.autoComplete ({keyword: req.query.keyword, hl: req.query.language ,property: req.query.engine})
        .then(function(results){
        res
            .status(200)
            .header('Content-Type', 'application/json')
            .send(results)
            .end();
        console.log('These results are awesome', results);
      })
	
	.catch((err) => {
  console.log(err);
})
});





//🌷DAILY  TRENDS

app.get('/GTDT', (req, res) => {
  googleTrends.dailyTrends ({geo: req.query.geo, hl: req.query.language, trendDate: new Date(Date.now() - (req.query.time * 60 * 60 * 1000)), property: req.query.engine})
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
  googleTrends.realTimeTrends ({geo: req.query.geo, hl: req.query.language, category: req.query.category, property: req.query.engine})
        .then(function(results){
        res
            .status(200)
            .header('Content-Type', 'application/json')
            .send(results)
            .end();
        console.log('These results are awesome', results);
      });
});




//🐘🐘google trends Widgets token

app.get('/SCRAPE1', (req, res1) => {
var encodeUrl = require('encodeurl')
	const request = require('request');

const options = {
    url: 'https://scraper.nepochataya.pp.ua/sites',
    json: true,
   body:{"url":"https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req=%7B%22comparisonItem%22:%5B%7B%22keyword%22:%22bitcoins%22,%22geo%22:%22%22,%22time%22:%22today+5-y%22%7D%5D,%22category%22:0,%22property%22:%22youtube%22%7D&tz=-60","request":{"headers":{"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36"}}}
	//body: {"url": '"'+encodeUrl(req.query.path+'&tz='+req.query.tz+'&req='+req.query.reqy+'&tz='+req.query.tz1)+'"'}
};

request.post(options, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    console.log('Status', encodeUrl(req.query.path+'&tz='+req.query.tz+'&req='+req.query.reqy+'&tz='+req.query.tz1));
    console.log(body);		
    res1.send('https://scraper.nepochataya.pp.ua/static/files/trends.google.com'+body.directory.replace('null',''));

});
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
