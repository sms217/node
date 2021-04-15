const dep1 = require('./dep1');
const dep2 = require('./dep2');
//상호 참조한다.
dep1();
dep2();

