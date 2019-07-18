const fs = require('fs');

for(let i = 1; i <= 5; i++) {
  let file = "sync-txt" + i + ".txt";
  let out = fs.writeFileSync(file, "Hello Node.js!");
  console.log(out);
}
