/*
서버에 암호화 적용하려면 https 모듈을 사용해야하는데, https는 아무나 사용할 수 없다.
암호화를 적용하는 만큼, 그것을 인증해줄 수 있는 기관도 필요.
인증서는 인증 기관에서 구입해야 하는데, Let's Encrypt 같은 기관에서 무료로 발급해주기도 한다.

발급 받은 인증사거 있다면 다음과 같은 코드 작성
*/

const https = require('https');
const fs = require('fs');

https
  .createServer(
    {
      cert: fs.readFileSync('도메인 인증서 경로'),
      key: fs.readFileSync('도메인 비밀키 경로'),
      ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
      ],
    },
    (req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.write('<h1>Hello Node!</h1>');
      res.end('<p>Hello Server!</p>');
    }
  )
  .listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다!');
  });
