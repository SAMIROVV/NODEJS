'use strict';
                                                      //🔴♼♼♼♼♼      TO SCRAPE GOOGLE TRENDS      ♼♼♼♼♼🔴//

const express = require('express');
const app = express(); 


        //💔💙💚 AMAZING GOOGLE TRENDS SCRAPER WITH TOKEN 💚💙💔//

    //for Ggle trends(EXPLORE/TS/GEO/TPC/QRY) link ===  https://nodejsgithub.herokuapp.com/SCRAPER0?https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60☆SCPGTQRY
    //for google trends autocomplete link  ===  https://nodejsgithub.herokuapp.com/SCRAPER0?https://trends.google.com/trends/api/autocomplete/bitcoin?hl=en-US&tz=-60☆SCPGTACM
    //for google trends dailytrends  link  ===  https://nodejsgithub.herokuapp.com/SCRAPER0?https://trends.google.com/trends/api/dailytrends?hl=en-US&tz=-60&geo=AU&ns=15☆SCPGTDTR
    //for google real timerends      link  ===  https://nodejsgithub.herokuapp.com/SCRAPER0?https://trends.google.com/trends/api/realtimetrends?hl=en-US&tz=-60&cat=all&fi=0&fs=0&geo=AU&ri=300&rs=20&sort=0☆SCPGTRTT
  

app.get('/SCRAPER0', (req0, res0) => {
    const https = require('https');
    const url = require('url');
    var type = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[1];    
	
	
	
//TO SCRAPE GTRENDS AUTOCOMPLETE & DAILY TRENDS & REAL TIME TRENDS
	
	if(type === 'SCPGTACM'){
                https.get(decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER0?','')   , (res) => {  
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {res0.header('Content-Type', 'application/json').send( JSON.parse(data.slice(5)).default.topics.map(function (item) {  return item.title+'☉'+item.type})  );
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
               var td = JSON.parse(data.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
               const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)}

    
    
	    
	if(type === 'SCPGTEXPLORE' || type === ''){
             res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(4)).widgets); console.log(filterItems(td, 'related_topics☉{'))  };
		    
		    
        if(type === 'SCPGTTS'){		
             https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/multiline', query: {hl: req0.query.hl, tz: req0.query.tz[0], req: filterItems(td, 'timeseries☉{')[0].split('☉')[1], token: filterItems(td, 'timeseries☉{')[0].split('☉')[2],tz: req0.query.tz[0]} })  , (res) => {  
                let data = '';
                res.on('data', (chunk) => {data += chunk; });
                res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)).default.timelineData.map(function (item) {  return item.formattedTime+'☉'+item.value})       );    });});}
		    
	    
        if(type === 'SCPGTGEO'){		
                https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/comparedgeo', query: {hl: req0.query.hl, tz: req0.query.tz[0], req: filterItems(td, 'geo_map☉{')[0].split('☉')[1], token: filterItems(td, 'geo_map☉{')[0].split('☉')[2]  ,tz: req0.query.tz[0]} })  , (res) => {  
                  let data = '';
                  res.on('data', (chunk) => {data += chunk; });
                  res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)).default.geoMapData.map(function (item) {  return item.geoName+'☉'+item.value})       );    });});}
		    
	    				
	if(type === 'SCPGTTPC'){		
                https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: req0.query.tz[0], req: filterItems(td, 'related_topics☉{')[0].split('☉')[1], token: filterItems(td, 'related_topics☉{')[0].split('☉')[2]  ,tz: req0.query.tz[0]} })  , (res) => {  
                  let data = '';
                  res.on('data', (chunk) => {data += chunk; });
                  res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.topic.title+'☉'+item.topic.type+'☉'+item.value})+'↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.topic.title+'☉'+item.topic.type+'☉'+item.value})   );    
				      });});}
               
		   
	if(type === 'SCPGTQRY'){		
                https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: req0.query.tz[0], req: filterItems(td, 'related_queries☉{')[0].split('☉')[1], token: filterItems(td, 'related_queries☉{')[0].split('☉')[2]  ,tz: req0.query.tz[0]} })  , (res) => {  
                  let data = '';
                  res.on('data', (chunk) => {data += chunk; });
                  res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☉'+item.value})+'↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☉'+item.value}));                            
				      });});}		
		    
		    
		  		    
		    
    });
    }); 
    });
    })};
    });
			  

			  
	

         //💔💙💚 GOOGLE TRENDS SCRAPER API 💚💙💔//

    //for SCPGTACM Link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?keyword=bitcoin&hl=en&☆SCPGTACM
    //for SCPGTDTR Link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?geo=US&language=en&time=400&☆SCPGTDTR
    //for SCPGTRTT Link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?geo=US&language=en&category=all&%E2%98%86SCPGTRTT
    //for SCPGTTS  Link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?keyword=bitcoin&startTime=400&endTime=10&geo=&language=en&category=0&engine=youtube&☆SCPGTTS
    //for SCPGTGEO Link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?keyword=bitcoin&startTime=400&endTime=10&geo=&&resolution=&language=en&category=0&engine=youtube&☆SCPGGEO
    //for SCPGTTPC Link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?keyword=bitcoin&startTime=400&endTime=10&geo=&language=en&category=0&engine=youtube&☆SCPGTTPC
    //for SCPGTQRY Link  ===  https://nodejsgithub.herokuapp.com/SCRAPER1?keyword=bitcoin&startTime=400&endTime=10&geo=&language=en&category=0&engine=youtube&☆SCPGTQRY
    
    app.get('/SCRAPER1', (req, res) => {
const googleTrends = require('google-trends-api');
const url = require('url');
var type = decodeURIComponent(url.format({ pathname: req.originalUrl })).split("☆")[1];
		

	//TO SCRAPE GTRENDS AUTOCOMPLETE & DAILY TRENDS & REAL TIME TRENDS
	
	if(type === 'SCPGTACM'){ googleTrends.autoComplete ({keyword: req.query.keyword, hl: req.query.language ,property: req.query.engine})
           .then(function(data){ res.header('Content-Type', 'application/json').send( JSON.parse(data).default.topics.map(function (item) {  return item.title+'☉'+item.type})  ).end();}); }
	
	if(type === 'SCPGTDTR'){ googleTrends.dailyTrends ({geo: req.query.geo, hl: req.query.language, trendDate: new Date(Date.now() - (req.query.time * 60 * 60 * 1000))})
           .then(function(data){res.header('Content-Type', 'application/json').send( JSON.parse(data).default.trendingSearchesDays[0].trendingSearches.map(function (item) {  return item.title.query+'☉'+item.formattedTraffic+'☉'+item.relatedQueries.map(function (item) {  return item.query})+'☉'+item.articles.map(function (item) {  return item.title+'🍎'+item.timeAgo+'🍎'+item.snippet}) })    ).end();}); }
	
	if(type === 'SCPGTRTT'){ googleTrends.realTimeTrends ({geo: req.query.geo, hl: req.query.language, category: req.query.category})
           .then(function(data){ res.header('Content-Type', 'application/json').send(JSON.parse(data).storySummaries.trendingStories.map(function (item) {  return item.articles.map(function (item) {  return item.articleTitle+'☉'+item.source+'☉'+item.time+'☉'+item.snippet})}) ).end();}); }


	
	
	//TO SCRAPE GTRENDS TIME SERIES & GEO & RELATED TOPICS & RELATED QUERIES
	
	if(type === 'SCPGTTS'){googleTrends.interestOverTime ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000)),endTime: new Date(Date.now() - (req.query.endTime * 60 * 60 * 1000)), geo: req.query.geo, hl: req.query.language, category: req.query.category, property: req.query.engine})
           .then(function(data){res.header('Content-Type', 'application/json').send(JSON.parse(data).default.timelineData.map(function (item) {  return item.formattedTime+'☉'+item.value})).end();});}
	
	if(type === 'SCPGTGEO'){ googleTrends.interestByRegion ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000)),endTime: new Date(Date.now() - (req.query.endTime * 60 * 60 * 1000)), geo: req.query.geo, resolution:req.query.resolution, hl: req.query.language, category: req.query.category, property: req.query.engine})
           .then(function(data){ res.header('Content-Type', 'application/json').send(JSON.parse(data).default.geoMapData.map(function (item) {  return item.geoName+'☉'+item.value})).end();});}

	if(type === 'SCPGTTPC'){ googleTrends.relatedTopics ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000)), endTime: new Date(Date.now() - (req.query.endTime * 60 * 60 * 1000)), geo: req.query.geo, hl: req.query.language, category: req.query.category ,property: req.query.engine})
           .then(function(data){ res.header('Content-Type', 'application/json').send(JSON.parse(data).default.rankedList[1].rankedKeyword.map(function (item) {  return item.topic.title+'☉'+item.topic.type+'☉'+item.value})+'↕'+JSON.parse(data).default.rankedList[0].rankedKeyword.map(function (item) {  return item.topic.title+'☉'+item.topic.type+'☉'+item.value})   ) .end();});}

	if(type === 'SCPGTQRY'){ googleTrends.relatedQueries ({keyword: req.query.keyword, startTime: new Date(Date.now() - (req.query.startTime * 60 * 60 * 1000)), endTime: new Date(Date.now() - (req.query.endTime * 60 * 60 * 1000)), geo: req.query.geo, hl: req.query.language, category: req.query.category, property: req.query.engine})
           .then(function(data){ res.header('Content-Type', 'application/json').send(JSON.parse(data).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☉'+item.value})+'↕'+JSON.parse(data).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☉'+item.value})) .end();});}
	

});

		    
    
    
    

//💔💙💚 AMAZING SCRAPER WITH NEPOCHATAYA WITH REQUEST💚💙💔//

    //for google trends autocomplete link  ===  https://nodejsgithub.herokuapp.com/SCRAPER2?https://trends.google.com/trends/api/autocomplete/bitcoin?hl=en-US&tz=-60☆SCPGTACM
    //for google trends dailytrends  link  ===  https://nodejsgithub.herokuapp.com/SCRAPER2?https://trends.google.com/trends/api/dailytrends?hl=en-US&tz=-60&geo=AU&ns=15☆SCPGTDTR
    //for google real timerends      link  ===  https://nodejsgithub.herokuapp.com/SCRAPER2?https://trends.google.com/trends/api/realtimetrends?hl=en-US&tz=-60&cat=all&fi=0&fs=0&geo=AU&ri=300&rs=20&sort=0☆SCPGTRTT
    //for google trends all          link  ===  https://nodejsgithub.herokuapp.com/SCRAPER2?https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60☆SCPGTQRY
    //for other websites             link  ===  https://nodejsgithub.herokuapp.com/SCRAPER2?url☆SCPURL

	app.get('/SCRAPER2', (req0, res0) => {
const url = require('url'); 
const Request = require('request');
  
                Request.post({url: 'https://scraper.nepochataya.pp.ua/sites', json: true, body: {"url":decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER2?','')  }}, (err, res, body) => {	
        
		Request({url: 'https://scraper.nepochataya.pp.ua'+body.previewPath, json: true,}, (err, res, body) => {
	
              var tz = req0.query.tz[0];
              var type = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[1];
		
	
		//TO SCRAPE URL & GTRENDS EXPLORE & AUTOCOMPLETE & DAILY TRENDS & REAL TIME TRENDS
		
	if(type === 'SCPURL' || type === ''){
		res0.header('Content-Type', 'application/json').send(body);}
		
	if(type === 'SCPGTACM'){
		res0.header('Content-Type', 'application/json').send( JSON.parse(body.slice(5)).default.topics.map(function (item) {  return item.title+'☉'+item.type})  );}
	
	if(type === 'SCPGTDTR'){
		res0.header('Content-Type', 'application/json').send(JSON.parse(body.slice(5)).default.trendingSearchesDays[0].trendingSearches.map(function (item) {  return item.title.query+'☉'+item.formattedTraffic+'☉'+item.relatedQueries.map(function (item) {  return item.query})+'☉'+item.articles.map(function (item) {  return item.title+'🍎'+item.timeAgo+'🍎'+item.snippet})   })); }
		
		
	if(type === 'SCPGTRTT'){
		res0.header('Content-Type', 'application/json').send(JSON.parse(body.slice(5)).storySummaries.trendingStories.map(function (item) {  return item.articles.map(function (item) {  return item.articleTitle+'☉'+item.source+'☉'+item.time+'☉'+item.snippet})}) )	;}
		
	if(type === 'SCPGTEXPLORE'){
		res0.header('Content-Type', 'application/json').send(JSON.parse(body.slice(4)));}	
		
		
		
		//TO SCRAPE GTRENDS TIME SERIES & GEO & RELATED TOPICS & RELATED QUERIES
		
	if(type === 'SCPGTTS'){
		var td = JSON.parse(body.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
                const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)};
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/multiline', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'timeseries☉{')[0].split('☉')[1], token: filterItems(td, 'timeseries☉{')[0].split('☉')[2]  ,tz: tz} }), json: true,}, (err, res, body) => {  
                res0.header('Content-Type', 'application/json').send(JSON.parse(body.slice(5)).default.timelineData.map(function (item) {  return item.formattedTime+'☉'+item.value})       );    });}
		    
		
	if(type === 'SCPGTGEO'){
		var td = JSON.parse(body.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
                const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)};
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/comparedgeo', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'geo_map☉{')[0].split('☉')[1], token: filterItems(td, 'geo_map☉{')[0].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                res0.header('Content-Type', 'application/json').send(JSON.parse(body.slice(5)).default.geoMapData.map(function (item) {  return item.geoName+'☉'+item.value})       );    });}
		    	
		
	if(type === 'SCPGTTPC'){
		var td = JSON.parse(body.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
                const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)};
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_topics☉{')[0].split('☉')[1], token: filterItems(td, 'related_topics☉{')[0].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                res0.header('Content-Type', 'application/json').send(JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.topic.title+'☉'+item.topic.type+'☉'+item.value})+'↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.topic.title+'☉'+item.topic.type+'☉'+item.value})   );     });}	
		
	if(type === 'SCPGTQRY'){
		var td = JSON.parse(body.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
                const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)};              
                Request({url:url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[0].split('☉')[1], token: filterItems(td, 'related_queries☉{')[0].split('☉')[2]  } }), json: true,}, (err, res, body) => {  
                res0.header('Content-Type', 'application/json').send(JSON.parse(body.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☉'+item.value})+'↕'+JSON.parse(body.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☉'+item.value})); });}	                           
				      	    
		
			
});		
});
});
	
		           
    
    



//💔💙💚 AMAZING SCRAPER WITH NEPOCHATAYA WITH HTTPS💚💙💔//

    //for google trends autocomplete link  ===  https://nodejsgithub.herokuapp.com/SCRAPER3?https://trends.google.com/trends/api/autocomplete/bitcoin?hl=en-US&tz=-60☆SCPGTACM
    //for google trends dailytrends  link  ===  https://nodejsgithub.herokuapp.com/SCRAPER3?https://trends.google.com/trends/api/dailytrends?hl=en-US&tz=-60&geo=AU&ns=15☆SCPGTDTR
    //for google real timerends      link  ===  https://nodejsgithub.herokuapp.com/SCRAPER3?https://trends.google.com/trends/api/realtimetrends?hl=en-US&tz=-60&cat=all&fi=0&fs=0&geo=AU&ri=300&rs=20&sort=0☆SCPGTRTT
    //for google trends all          link  ===  https://nodejsgithub.herokuapp.com/SCRAPER3?https://trends.google.com/trends/api/explore?hl=en-US&tz=-60&req={"comparisonItem":[{"keyword":"bitcoin","geo":"","time":"today+5-y"}],"category":0,"property":"youtube"}&tz=-60☆SCPGTQRY
    //for other websites             link  ===  https://nodejsgithub.herokuapp.com/SCRAPER3?url☆SCPURL

	app.get('/SCRAPER3', (req0, res0) => {
           const url = require('url'); 
           const https = require('https');
           const Request = require('axios');        
		  
//needle,,Request('post', 'https://scraper.nepochataya.pp.ua/sites', {url:decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER3?','')  }).then (  (res) => {		      
					      
		Request.post('https://scraper.nepochataya.pp.ua/sites', {url:decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER3?','')  }).then((res) => { 		      
				
    
   https.get('https://scraper.nepochataya.pp.ua'+res.data.previewPath+'/', (res) => {		
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
			res.on('end', () => {					
                         var tz = req0.query.tz[0];
                         var type = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[1];
		
	
		//TO SCRAPE URL & GTRENDS EXPLORE & AUTOCOMPLETE & DAILY TRENDS & REAL TIME TRENDS
		
	if(type === 'SCPURL' || type === ''){
		res0.header('Content-Type', 'application/json').send(data)}
				
		
	if(type === 'SCPGTACM'){
		res0.header('Content-Type', 'application/json').send( JSON.parse(data.slice(5)).default.topics.map(function (item) {  return item.title+'☉'+item.type})  );}
	
				
	if(type === 'SCPGTDTR'){
		res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)).default.trendingSearchesDays[0].trendingSearches.map(function (item) {  return item.title.query+'☉'+item.formattedTraffic+'☉'+item.relatedQueries.map(function (item) {  return item.query})+'☉'+item.articles.map(function (item) {  return item.title+'🍎'+item.timeAgo+'🍎'+item.snippet})   })); }
		
		
	if(type === 'SCPGTRTT'){
		res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)).storySummaries.trendingStories.map(function (item) {  return item.articles.map(function (item) {  return item.articleTitle+'☉'+item.source+'☉'+item.time+'☉'+item.snippet})}) )	;}
		
				
	if(type === 'SCPGTEXPLORE'){
		res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(4)));}	
		
		
		
		//TO SCRAPE GTRENDS TIME SERIES & GEO & RELATED TOPICS & RELATED QUERIES
		
	
		if(type === 'SCPGTTS'){
		var td = JSON.parse(data.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
                const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)};	
                  https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/multiline', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'timeseries☉{')[0].split('☉')[1], token: filterItems(td, 'timeseries☉{')[0].split('☉')[2]  ,tz: tz} })       , (res) => {  
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)).default.timelineData.map(function (item) {  return item.formattedTime+'☉'+item.value})  );    });});}
		    
		
	if(type === 'SCPGTGEO'){
		var td = JSON.parse(data.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
                const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)};		
                  https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/comparedgeo', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'geo_map☉{')[0].split('☉')[1], token: filterItems(td, 'geo_map☉{')[0].split('☉')[2]  } })  , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)).default.geoMapData.map(function (item) {  return item.geoName+'☉'+item.value})       );    });});}
		    					
		
	if(type === 'SCPGTTPC'){
		var td = JSON.parse(data.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
                const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)};		
                  https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_topics☉{')[0].split('☉')[1], token: filterItems(td, 'related_topics☉{')[0].split('☉')[2]  } }) , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.topic.title+'☉'+item.topic.type+'☉'+item.value})+'↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.topic.title+'☉'+item.topic.type+'☉'+item.value})   );   });});}	
		
				
	if(type === 'SCPGTQRY'){
		var td = JSON.parse(data.slice(4)).widgets.map(function (item) {  return item.id.replace('_0','').replace('_1','').replace('_2','').replace('_3','').replace('_4','')+'☉'+JSON.stringify(item.request)+'☉'+item.token})   ;
                const filterItems = (arr, query) => {  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)};      
                   https.get(url.format({ protocol: 'https', hostname: 'trends.google.com/', pathname: 'trends/api/widgetdata/relatedsearches', query: {hl: req0.query.hl, tz: tz, req: filterItems(td, 'related_queries☉{')[0].split('☉')[1], token: filterItems(td, 'related_queries☉{')[0].split('☉')[2]  } })  , (res) => {
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data.slice(5)).default.rankedList[1].rankedKeyword.map(function (item) {  return item.query+'☉'+item.value})+'↕'+JSON.parse(data.slice(5)).default.rankedList[0].rankedKeyword.map(function (item) {  return item.query+'☉'+item.value}));     });});}	                           
				      	    			
				
				
});			
});		
});
});







//💔💙💚 AMAZING GOOGLE TRENDS SCRAPER WITH ZENSERP 💚💙💔//

    //for google trends autocomplete link  ===  https://nodejsgithub.herokuapp.com/SCRAPER4?https://app.zenserp.com/api/v1/trends?apikey=d6e89390-e001-11ea-bf40-1d4910d948b2&keyword%5B%5D=Bitcoin&keyword%5B%5D=Etherum


app.get('/SCRAPER4', (req0, res0) => {
    const https = require('https');
    const url = require('url');
       
	var keyword1 = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[1];
	var keyword2 = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[2];
	var keyword3 = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[3];
	var keyword4 = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[4];
	var keyword5 = decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[5];
			
	
	
	
                https.get(decodeURIComponent(url.format({ pathname: req0.originalUrl })).split("☆")[0].replace('/SCRAPER4?','')   , (res) => {  
                    let data = '';
                    res.on('data', (chunk) => {data += chunk; });
                    res.on('end', () => {res0.header('Content-Type', 'application/json').send(JSON.parse(data).Bitcoin.trends);console.log(keyword1);
				      });});
			
		});
	







    
    
         //💔💙💚 Start the server
         
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

	
	module.exports = app;
