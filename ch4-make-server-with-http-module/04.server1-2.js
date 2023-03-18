const http = require('http');

// 한 번에 여러 서버를 실행할 수도 있다. (실무에서는 이런 식으로 서버를 여러 개 띄우는 일은 드물다.)
// createServer를 원하는 만큼 호출하면 됨.

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
  })
  .listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다!');
  });

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>hello Node!</h1>');/
    res.end('<p>Hello Server!</p>');
  })
  .listen(8081, () => {
    console.log('8081번 포트에서 서버 대기 중입니다!');
  });

// res.write과 res.end에 일일이 HTML을 적는 것을 비효율적이므로 미리 HTML 파일을 만드는 것이 바람직함.
