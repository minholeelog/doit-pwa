const inputValue = document.getElementById('inputValue');
const inputBtn = document.getElementById('inputBtn');

const handleInputBtn = () => {
  const value = Number(inputValue.value);
  let answer = '';
  console.log(value);
  if (value > 0 && value <= 100) {
    answer = '성공적으로 입력하셨습니다!';
  } else {
    answer = '입력 범위가 맞지 않습니다!';
  }
  result.innerText = answer;
};

inputBtn.addEventListener('click', handleInputBtn);
