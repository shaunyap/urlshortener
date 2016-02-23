var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';
var urls = {"Website": "www.facebook.com"};
var website = [];

exports.findWebsiteID = function(number) {
    MongoClient.connect(url, function(err, db) {
        if (err) { throw err }
        db.collection('urls').find({"siteID": number}).toArray(function(err, docs) {
            if(err) { throw err }
            website.push(docs[0].Website);
            console.log(website);
        });
    })
}

exports.addWebsite = function(website, number) {
    MongoClient.connect(url, function(err, db) {
      if (err) { throw err }
      var doc = { 'Website': website,
                'siteID': number.toString() };

      db.collection('urls').insert(doc, function(err, data){
        if(err) { throw err }
        console.log(JSON.stringify(doc))
        db.close()
    }); 
 
    });
}