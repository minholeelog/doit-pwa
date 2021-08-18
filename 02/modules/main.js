import { conHello, fnPlusNumber } from './library_named.js'
console.log(conHello, '이름으로 내보내기입니다.')
console.log('1+2 = ', fnPlusNumber(1, 2))

import * as myLibrary from './library_named.js'
console.log(myLibrary.conHello, '*를 사용한 이름으로 내보내기입니다.')
console.log('3+4 = ', myLibrary.fnPlusNumber(3, 4))

import fnMyFunction from './library_default.js'
console.log('안녕하세요! 기본으로 내보내기입니다.')
console.log('5+6 = ', fnMyFunction(5, 6))
