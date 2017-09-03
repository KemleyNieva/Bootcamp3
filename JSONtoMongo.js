'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config'),
    buildingsList = require('./listings.json');

/* Connect to your database */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user1:user1@ds119014.mlab.com:19014/bootcamp3',{
  useMongoClient: true,
});

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */

 Listing.insertMany(buildingsList.entries,function(error, docs) {});

/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
