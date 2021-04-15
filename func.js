const{odd,even} = require('./var');
//다른 파일의 모듈 불러오기
//구조분해 할당


function checkOddOrEven(num){
    if(num%2){
    return odd;
    }
return even;
}

module.exports = checkOddOrEven;