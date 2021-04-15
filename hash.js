const crypto = require('crypto');
console.log('base64 : ', crypto.createHash('sha512') //사용할 해시 알고리즘을 선택하여 crypto객체생성
.update('암호화할 문자열') // 암호화 --> 비트로 나옴
.digest('base64').length //비트로 나온 것을 base64 encoding
);