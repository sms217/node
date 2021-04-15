console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis(){
    console.log('함수', this===exports, this === global);
}
whatIsThis();