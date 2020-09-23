const https = require('https');

var options1 = {
    hostname: 'trends.google.com',
    path: '/trends/api/explore?hl=en-US&tz=-60&req=%7B%22comparisonItem%22:%5B%7B%22keyword%22:%22Bitcoins%22,%22geo%22:%22%22,%22time%22:%22today+5-y%22%7D%5D,%22category%22:0,%22property%22:%22youtube%22%7D&tz=-60',
    method: 'GET',};



https.get(options1, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        var cookie = res.headers['set-cookie'][0].split(';')[0];
        
        
        
        
        var options2 = {
    hostname: 'trends.google.com',
    path: '/trends/api/explore?hl=en-US&tz=-60&req=%7B%22comparisonItem%22:%5B%7B%22keyword%22:%22Bitcoins%22,%22geo%22:%22%22,%22time%22:%22today+5-y%22%7D%5D,%22category%22:0,%22property%22:%22youtube%22%7D&tz=-60',
    method: 'GET',
    headers: {'cookie': cookie}
    };
       



https.get(options2, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
                console.log(JSON.parse(data.slice(4)).widgets[1].token);          console.log(JSON.parse(data.slice(4)).widgets[1].request);

    });

})
    });

})
