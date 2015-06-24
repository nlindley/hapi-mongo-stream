# hapi-mongo-stream

This is an example of how you can stream results from MongoDB through Hapi.

## Prerequisites

* Node ~0.12.0
* MongoDB

## Usage

Create a MongoDB database called `hapi-mongo-stream` and add some documents to a collection called `things`.

```
$ mongo
> use hapi-mongo-stream
switched to db hapi-mongo-stream
> db.things.insert({"name": "thing 1"})
WriteResult({ "nInserted" : 1 })
> db.things.insert({"name": "thing 2"})
WriteResult({ "nInserted" : 1 })
> db.things.insert({"name": "thing 3"})
WriteResult({ "nInserted" : 1 })
```

Now fire up the server.

```
npm install
npm start
```

Point your browser to http://localhost:3000/ to see some documents.
