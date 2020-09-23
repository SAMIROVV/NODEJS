'use strict';
                                                      //🔴♼♼♼♼♼      TO SCRAPE WEBSITEZ ESPECIALLY GOOGLE TRENDS      ♼♼♼♼♼🔴//

const express = require('express');
const app = express(); 


//💔 AMAZING GOOGLE TRENDS SCRAPER WITH TOKEN

    //link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60☆SCPGTQRY


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
    var tz = req0.query.tz;         
	
	if(type === 'SCPGTEXPLORE'){
		res0.header('Content-Type', 'application/json').send(data.replace(')]}','').replace(/'/g, ''));}
	    
	    
        if(type === 'SCPGTTS'){
		const Request = require('request');
                var obj = JSON.parse(data.replace(')]}','').replace(/'/g, ''));
                https.get({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/multiline', query: {hl: req0.query.hl, tz: tz, req: JSON.stringify(obj.widgets[0].request), token: obj.widgets[0].token,tz: tz} }), json: true,}, (err, res, body) => {  
                res0.header('Content-Type', 'application/json').send(body.replace(')]}','').replace(/'/g, '').replace(',',''));});}
		    
    
    
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
