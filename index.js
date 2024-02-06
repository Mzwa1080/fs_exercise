let fs = require('fs')

// console.log(fs);

fs.writeFile('data.txt', 'shwan content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  fs.appendFile('data.txt', '\n This is my second data ', (err)=> {
    if(err) throw err;
    console.log('second data updated!');
  })