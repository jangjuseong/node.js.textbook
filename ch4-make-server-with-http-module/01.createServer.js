const http = require('http'); // http 서버가 있어야 웹브라우저의 요청을 처리할 수 있으므로 http 모듈 사용.

/*
http 모듈에는 createServer 메서드가 있다.
인수로 요청에 대한 콜백 함수를 넣을 수 있으며, 요청이 들어올 때마다 매번 콜백 함수가 실행된다.
따라서 이 콜백 함수에 응답을 적으면 된다.
*/
http.createServer((req, res) => {
  // 여기에 어떻게 응답할지 적어준다.
});
