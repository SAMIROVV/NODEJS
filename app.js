'use strict';
                                                      //🔴♼♼♼♼♼      TO SCRAPE WEBSITEZ ESPECIALLY GOOGLE TRENDS      ♼♼♼♼♼🔴//

const express = require('express');
const app = express(); 


//💔 AMAZING GOOGLE TRENDS SCRAPER WITH TOKEN

    //for google trends autocomplete link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?https://trends.google.com/trends/api/autocomplete/bitcoin?hl=en-US&tz=-60☆SCPGTACM
    //for google trends dailytrends  link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?https://trends.google.com/trends/api/dailytrends?hl=en-US&tz=-60&geo=AU&ns=15☆SCPGTDTR
    //for google real timerends      link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?https://trends.google.com/trends/api/realtimetrends?hl=en-US&tz=-60&cat=all&fi=0&fs=0&geo=AU&ri=300&rs=20&sort=0☆SCPGTRTT
    //for google trends all          link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60☆SCPGTQRY


app.get('/SCRAPER1', (req0, res0) => {
    const https = require('https');
    const url = require('url'); 
    var options1 = {hostname: 'trends.google.com', path: decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER1?https://trends.google.com',''),method: 'GET',};

https.get(options1, (res) => {
    let data = '';
    res.on('data', (chunk) => {data += chunk; });
    res.on('end', () => {
    var cookie = res.headers['set-cookie'][0].split(';')[0];    
    var options2 = {hostname: 'trends.google.com', path: decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER1?https://trends.google.com',''), method: 'GET', headers: {'cookie': cookie} };
       
https.get(options2, (res) => {
    let data = '';
    res.on('data', (chunk) => {data += chunk; });
    res.on('end', () => {
             console.log(JSON.parse(data.slice(4)).widgets[1].token);          
	    console.log(JSON.parse(data.slice(4)).widgets[1].request);
    
    var type = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[1];
	    
	if(type === 'SCPGTACM'){
		res0.header('Content-Type', 'application/json').send(data.replace(')]}','').replace(/'/g, '').replace(',',''));}
	
	if(type === 'SCPGTDTR'){
		res0.header('Content-Type', 'application/json').send(data.replace(')]}','').replace(/'/g, '').replace(',',''));}
		
		
	if(type === 'SCPGTRTT'){
		res0.header('Content-Type', 'application/json').send(data.replace(')]}','').replace(/'/g, '').replace(',',''));}
		
	if(type === 'SCPGTEXPLORE'){
		res0.header('Content-Type', 'application/json').send(data.replace(')]}','').replace(/'/g, ''));}	
    
    
    
    
    });}) });
    


})

});





















//💔Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

	
	module.exports = app;
