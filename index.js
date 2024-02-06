let fs = require('fs')

// console.log(fs);

let secondText = 'This will be my second text or line required by Joel ... '


fs.writeFile('data.txt', 'Mzwamadoda Louw first line of code', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

fs.writeFile('data.txt', secondText,  (err)=>{
    console.log(err);
})

  fs.appendFile('data.txt', '\n This is my second data ', (err)=> {
    if(err) throw err;
    console.log('second data updated!');
  })