const fs = require('fs');

if (fs.existsSync('./test2/test3/test4')) {
  console.log('디렉토리가 이미 존재합니다.');
} else {
  fs.mkdir('./test2/test3/test4', { recursive: true }, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('폴더가 생성되었습니다.');
  });
}
