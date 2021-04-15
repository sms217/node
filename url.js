const url = require('url');

const { URL } = url;
const myURL = new URL( //WHATWG방식
    'https://www.youtube.com/'
)
console.log('new URL()', myURL);
console.log('new URL() : ', url.format(myURL));

const parsedUrl = url.parse('https://www.youtube.com/');
//기존노드의 방식
console.log('url.parse() : ', url.parsedUrl);
console.log('url.format() : ', url.format(parsedUrl));