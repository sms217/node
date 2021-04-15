const url = require('url');
const queryString = require('queryString');
//deprecated 가능성 있음 : url.parse();
const parsedUrl = url.parse('http://wwww.gilbut.co.kr/?page=3&li')
const query = queryString.parse(parsedUrl.query);

