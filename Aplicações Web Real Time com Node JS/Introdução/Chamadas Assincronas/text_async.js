const fs = require('fs');

for(let i = 1; i <= 5; i++) {
  let file = "async-txt" + i + ".txt";
  fs.writeFile(file, "Hello Node.js!", function(err, out) {
    console.log(out);
  });
}
