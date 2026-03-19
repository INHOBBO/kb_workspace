const fs = require('fs');

// 동기
// const data = fs.readFileSync('./example.txt', 'utf-8');
// fs.writeFileSync('./text-1.txt, data');

// 비동기
const data = fs.readFile('example.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
