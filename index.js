let fs = require('fs')

// console.log(fs);

fs.writeFile('data.txt', 'Mzwamadoda Louw first line of code', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

fs.writeFile('data.txt', 'Im adding a second line required by Joel', (err)=>{
    console.log(err);
})

  fs.appendFile('data.txt', '\n This is my second data ', (err)=> {
    if(err) throw err;
    console.log('second data updated!');
  })