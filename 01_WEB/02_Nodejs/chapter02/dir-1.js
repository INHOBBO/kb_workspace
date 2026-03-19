const fs = require('fs');

if (fs.existsSync('./text')) {
  console.log('디렉토리가 이미 존재합니다.');
} else {
  fs.mkdir('./test', (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('폴더가 생성되었습니다.');
  });
}
