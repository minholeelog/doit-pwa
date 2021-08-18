fnMsg(fnHello)

function fnMsg(fnCallback) {
  console.log('1')
  fnCallback()
  console.log('3')
}

function fnHello() {
  setTimeout(() => console.log('2'), 1000)
}
