'use strict';
                                                      //🔴♼♼♼♼♼      TO SCRAPE WEBSITEZ ESPECIALLY GOOGLE TRENDS      ♼♼♼♼♼🔴//

const express = require('express');
const app = express(); 


//💔 AMAZING GOOGLE TRENDS SCRAPER WITH TOKEN

    //link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60☆SCPGTQRY


app.get('/SCRAPER0', (req0, res0) => {
    const https = require('https');
    const url = require('url'); 
    var options1 = {hostname: 'trends.google.com', path: decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER0?https://trends.google.com',''), method: 'GET',  };
       
https.get(options1, (res) => {
    let data = '';
    res.on('data', (chunk) => {data += chunk; });
    res.on('end', () => {
    var cookie = res.headers['set-cookie'][0].split(';')[0];    
    var options2 = {hostname: 'trends.google.com', path: decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER0?https://trends.google.com',''), method: 'GET', headers: {'cookie': cookie} };
       
https.get(options2, (res) => {
    let data = '';
    res.on('data', (chunk) => {data += chunk; });
    res.on('end', () => {
            
    
    var type = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[1];
    var tz = req0.query.tz;         
	
	if(type === 'SCPGTEXPLORE'){
	
		res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(4)).widgets);
console.log(JSON.parse(data.slice(4)).widgets.map((item) => { item.id , item.token }));
for(i = 0; i < JSON.parse(data.slice(4)).widgets.length; i++){
   console.log("Id is :" + JSON.parse(data.slice(4)).widgets[i].id+"token is : " + JSON.parse(data.slice(4)).widgets[i].token);
}		
		
	};   
	    
        if(type === 'SCPGTTS'){		
                var options3 = url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/multiline', query: {hl: req0.query.hl, tz: tz, req: JSON.stringify(JSON.parse(data.slice(4)).widgets[0].request), token: JSON.parse(data.slice(4)).widgets[0].token,tz: tz} })  
                https.get(options3, (res) => {  
		let data = '';
                  res.on('data', (chunk) => {data += chunk; });
                  res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)));    });});}
		    
    
    
    });
    }); 
    });
    });
    });




















//💔Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

	
	module.exports = app;
