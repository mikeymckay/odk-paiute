ODK Paiute renders json defined forms in a browser and then saves the results to couchdb.
=========================================================================================

Instructions
------------

You will need [couchdb](http://couchdb.apache.org/) to make it run:

    apt-get install couchdb

We need to create a database called "odk". You can create a new database using futon, the handy couchdb GUI by clicking here: [futon on localhost](http://localhost:5984/_utils), or by running this curl command:

    curl -X PUT http://localhost:5984/odk

To get ODK Paiute working you need to put the files in this directory into a couchdb database. You can accomplish this by using the
[couchapp tool](http://couchapp.org/page/couchapp-python).

    apt-get install couchapp

Now we can use couchapp to push the files into your database:

    couchapp push

Now you can point your browser at the [ODK Paiute](http://localhost:5984/odk/_design/render/index.html):

How does this work?
-------------------

CouchDB, [Backbone.js](http://documentcloud.github.com/backbone), JQuery, Underscore.js, Handlebars.js, json, fermented eyebrow sweat, fairy dust.


How is this organized?
----------------------

All of the backbone models and views have their own file and are in [_attachments/app/models](https://github.com/mikeymckay/odk-paiute/tree/master/_attachments/app/models) and [_attachments/app/views](https://github.com/mikeymckay/odk-paiute/tree/master/_attachments/app/views). [app/app.js](https://github.com/mikeymckay/odk-paiute/blob/master/_attachments/app/app.js) is responsible for tying it all together.

You can put json forms into the [\_docs](https://github.com/mikeymckay/odk-paiute/blob/master/_docs) directory and they will be added to your couch when you do a couchapp push.

Other useful info
-----------------

It's a pain to run 'couchapp push' everytime you make a change. I wrote a little [watchr script](https://github.com/mikeymckay/odk-paiute/blob/master/file.watchr) that watches for changes to any relevant files and then automatically pushes them into your couch. To get it you need to install rubygems and [watchr](http://rubygems.org/gems/watchr).

    apt-get install rubygems
    gem install watchr

Now open a separate terminal, start watchr and just let it watch and push for you.

    watchr file.watchr

Help!
----
Check out the project's [issues](https://github.com/mikeymckay/odk-paiute/issues). Please help me fix issues and add any problem that you come across.
