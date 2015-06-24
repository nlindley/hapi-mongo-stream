var JSONStream = require('./json-stream');

module.exports = function(db) {
  return [
    {
      method: 'GET',
      path: '/',
      handler: function(request, reply) {
        const js = new JSONStream({ writableObjectMode: true });
        reply(db.collection('things').find({}).stream().pipe(js)).type('application/json');
      }
    }
  ];
};
