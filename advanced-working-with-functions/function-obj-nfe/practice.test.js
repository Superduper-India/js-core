// 숫자 설정과 감소가 가능한 counter만들기
// 클로저, 함수프로퍼티를 활용한 문제풀이
function practice() {
  // counter()는 다음 숫자를 반환해야 합니다.
  // counter.set(value)는 counter를 value로 설정해야 합니다.
  // counter.decrease()는 counter를 1 감소시켜야 합니다.

  function makeCounter() {
    let count = 0;
    function counter() {
      return count++;
    }

    // 함수 counter에 추가 메서드를 구현한다.
    counter.set = (value) => count = value; // 화살표함수
    counter.decrease = () => count--; // 화살표함수

    return counter; // 10라인의 함수를 여기서 리턴한다.
  }

  let counter = makeCounter();

  console.log(counter()); // 0
  console.log(counter()); // 1

  counter.set(10); // set the new count
  console.log(counter()); // 10

  counter.decrease(); // decrease the count by 1
  console.log(counter()); // 10 (instead of 11)
}

test("run", () => {
  expect(practice()).toBe();
});
