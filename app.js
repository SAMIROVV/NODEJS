'use strict';
                                                      //🔴♼♼♼♼♼      TO SCRAPE WEBSITEZ ESPECIALLY GOOGLE TRENDS      ♼♼♼♼♼🔴//

const express = require('express');
const app = express(); 


//💔 AMAZING GOOGLE TRENDS SCRAPER WITH TOKEN

    //for Ggle trends(EXPLORE/TS/GEO/TPC/QRY) link ===  https://nodejsgithub.herokuapp.com/SCRAPER0?https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60☆SCPGTQRY
    //for google trends autocomplete link  ===  https://nodejsgithub.herokuapp.com/SCRAPER0?https://trends.google.com/trends/api/autocomplete/bitcoin?hl=en-US&tz=-60☆SCPGTACM
    //for google trends dailytrends  link  ===  https://nodejsgithub.herokuapp.com/SCRAPER0?https://trends.google.com/trends/api/dailytrends?hl=en-US&tz=-60&geo=AU&ns=15☆SCPGTDTR
    //for google real timerends      link  ===  https://nodejsgithub.herokuapp.com/SCRAPER0?https://trends.google.com/trends/api/realtimetrends?hl=en-US&tz=-60&cat=all&fi=0&fs=0&geo=AU&ri=300&rs=20&sort=0☆SCPGTRTT
  

app.get('/SCRAPER0', (req0, res0) => {
    const https = require('https');
    const url = require('url');
    var type = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[1];    
	
	
	
//TO SCRAPE GTRENDS AUTOCOMPLETE & DAILY TRENDS & REAL TIME TRENDS
	if(type === 'SCPGTACM'  || type === 'SCPGTDTR'  || type === 'SCPGTRTT'){
 var options0 =decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER0?','');
                https.get(options0  , (res) => {  
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)));
				      });});}  
	    
		
//TO SCRAPE GTRENDS EXPLORE & TIME SERIES & GEO & RELATED TOPICS & RELATED QUERIES	
else{   
https.get({hostname: 'trends.google.com', path: decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER0?https://trends.google.com',''), method: 'GET',}, (res) => {
    let data = '';
    res.on('data', (chunk) => {data += chunk; });
    res.on('end', () => {
        var cookie = res.headers['set-cookie'][0].split(';')[0];
        https.get({hostname: 'trends.google.com', path: decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER0?https://trends.google.com',''), method: 'GET', headers: {'cookie': cookie} }, (res) => {
            let data = '';
            res.on('data', (chunk) => {data += chunk; });
            res.on('end', () => {
            
    
    
	    
	if(type === 'SCPGTEXPLORE' || type === ''){
		
var td = JSON.parse(data.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'■'+JSON.stringify(item.request)+'■'+item.token})   ;
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterItems(td, 'geo_map'))
		
		
		

		


		
		
		res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(4)).widgets);};   
	    
	    
        if(type === 'SCPGTTS'){		
                var options3 = url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/multiline', query: {hl: req0.query.hl, tz: req0.query.tz[0], req: JSON.stringify(JSON.parse(data.slice(4)).widgets[0].request), token: JSON.parse(data.slice(4)).widgets[0].token,tz: req0.query.tz[0]} })  
                https.get(options3, (res) => {  
                let data = '';
                  res.on('data', (chunk) => {data += chunk; });
                  res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)));    });});}
		    
	    
        if(type === 'SCPGTGEO'){		
                var options4 = url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/comparedgeo', query: {hl: req0.query.hl, tz: req0.query.tz[0], req: JSON.stringify(JSON.parse(data.slice(4)).widgets[1].request), token: JSON.parse(data.slice(4)).widgets[1].token,tz: req0.query.tz[0]} })  
                https.get(options4, (res) => {  
                let data = '';
                  res.on('data', (chunk) => {data += chunk; });
                  res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)));});});}
	    
	    
	if(type === 'SCPGTTPC'){		
                var options5 = url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: req0.query.tz[0], req: JSON.stringify(JSON.parse(data.slice(4)).widgets[2].request), token: JSON.parse(data.slice(4)).widgets[2].token,tz: req0.query.tz[0]} })  
                https.get(options5, (res) => {  
                let data = '';
                  res.on('data', (chunk) => {data += chunk; });
                  res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)));});});}
	    
	    
	if(type === 'SCPGTQRY'){		
                var options6 = url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: req0.query.tz[0], req: JSON.stringify(JSON.parse(data.slice(4)).widgets[3].request), token: JSON.parse(data.slice(4)).widgets[3].token,tz: req0.query.tz[0]} })  
                https.get(options6, (res) => {  
                let data = '';
                  res.on('data', (chunk) => {data += chunk; });
                  res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)));});});}
	    
	 
	 
	    
	    
	    
    
    });
    }); 
    });
    })};

    });




















//💔Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

	
	module.exports = app;
