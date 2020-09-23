'use strict';
                                                      //🔴♼♼♼♼♼      TO SCRAPE WEBSITEZ ESPECIALLY GOOGLE TRENDS      ♼♼♼♼♼🔴//

const express = require('express');
const app = express(); 


//💔 AMAZING GOOGLE TRENDS SCRAPER WITH TOKEN

app.get('/SCRAPER1', (req0, res0) => {
const https = require('https');
var options1 = {hostname: 'https://trends.google.com', path: decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER1?https://trends.google.com',''),method: 'GET',};

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
             console.log(JSON.parse(data.slice(4)).widgets[1].token);          console.log(JSON.parse(data.slice(4)).widgets[1].request);   });}) });})

});



//💔Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

	
	module.exports = app;
