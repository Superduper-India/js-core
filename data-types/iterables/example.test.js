// Symbol.iterator로 range를 반복 가능한 객체로 만들기
function example() {
  let range = {
    from: 1,
    to: 5
  };

  // 1. for..of 최초 호출 시, Symbol.iterator가 호출됩니다.
  range[Symbol.iterator] = function () {

    // Symbol.iterator는 이터레이터 객체를 반환합니다.
    // 2. 이후 for..of는 반환된 이터레이터 객체만을 대상으로 동작하는데, 이때 다음 값도 정해집니다.
    console.log(this)
    return {
      current: this.from,
      last: this.to,

      // 3. for..of 반복문에 의해 반복마다 next()가 호출됩니다.
      next() {
        // 4. next()는 값을 객체 {done:.., value :...}형태로 반환해야 합니다.
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };

  // 이제 의도한 대로 동작합니다!
  for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
  }
}

// 이터레이터를 명시적으로 호출하기
function example2() {
  let str = "Hello";

  // for..of를 사용한 것과 동일한 작업을 합니다.
  // for (let char of str) alert(char);

  let iterator = str[Symbol.iterator]();

  while (true) {
    let result = iterator.next();
    if (result.done) break; // result객체의 done값이 true면 반복문 끝
    console.log(result.value); // 글자가 하나씩 출력됩니다.
  }
}

function example3() {
  let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },

    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  console.log(range)

  let arr = Array.from(range, num => num * num);
  console.log(arr);
}

test("run", () => {
  //expect(example()).toBe();
  //expect(example2()).toBe();
  expect(example3()).toBe();
});
