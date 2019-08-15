var http = require('http');

http.get('http://localhost', function(res) {
  res.on('data', function(pedaco) {
    console.log(' ' + pedaco);
  });

  res.on('end', function() {
    //
  });
});
