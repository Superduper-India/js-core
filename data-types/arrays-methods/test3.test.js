// 확장 가능한 계산기

function Solution() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    const arr = str.split(' ');
    numberOne = +arr[0] // 첫 번째 숫자
    operator = arr[1] // 연산자
    numberTwo = +arr[2] // 두 번째 숫자

    if (!this.methods[operator] || isNaN(numberOne) || isNaN(numberTwo)) {
      return NaN;
    }

    return this.methods[operator](numberOne, numberTwo);
  };

  this.addMethod = function (operator, func) {
    this.methods[operator] = func;
  };
}

// 생성자 함수 알고리즘
// 1. 빈 객체를 만들어 this에 할당.
// 2. 함수 본문을 실행하여, this에 새로운 프로퍼티를 추가해 수정.
// 3. this를 반환.

test("run", () => {
  const calc = new Solution(); // 생성자 함수

  expect(calc.calculate("3 + 7")).toBe(10);

  expect(calc.calculate("2 ** 3")).toBeNaN(); // 구현전 "2 ** 3"은 NaN이 뜰 것이다.

  calc.addMethod("**", (a, b) => a ** b); // addMethod 메서드를 호출한다.
  expect(calc.calculate("2 ** 3")).not.toBeNaN(); // 구현전 "2 ** 3"은 숫자 결과값이 나올 것 이다.
  calc.addMethod("*", (a, b) => a * b);
  expect(calc.calculate("2 * 3")).not.toBeNaN();
  calc.addMethod("/", (a, b) => a / b);
  expect(calc.calculate("2 / 3")).not.toBeNaN();

  const calculate = calc.calculate;
  expect(calculate.bind(calc)("2 ** 3")).toBe(8); // 변수 calculate를 calc라는 this에 강제로 바인딩시키기.
});
