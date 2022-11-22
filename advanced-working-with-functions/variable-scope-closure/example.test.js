// 코드블록 {...} 안에서 선언한 변수는 블록 안에서만 사용할 수 있다.
function example() {
  // 지역 변수를 선언하면 그 결과를 밖에서 볼 수 없다.
  let secret = "걔가 뭐랬는지 알아? 속닥속닥..."; // 블록 내에서만 변숫값을 얻을 수 있다.

  console.log(secret); // 걔가 뭐랬는지 알아? 속닥속닥...
}
// console.log(secret) // ReferenceError: secret is not defined

// 이미 선언된 변수와 동일한 이름을 가진 변수를 별도의 블록 없이 선언하면 에러가 발생
function example2() {
  let mssg = "안녕하세요~"
  console.log(mssg) // 안녕하세요~
  // let mssg = "안녕히 가세요~";
  // console.log(mssg) // SyntaxError: Identifier 'mssg' has already been declared.
}
// if, for, while 등에서도 코드블록 안에서 선언한 변수는 오직 블록 안에서만 접근 가능
function example3() {
  if (true) {
    let mssg = "안녕하세요!";
    console.log(mssg) // 안녕하세요!
  }

  // console.log(mssg) // ReferenceError: mssg is not defined
}

// 중첩 함수
function example4(firstName, lastName) {
  // 헬퍼(helper) 중첩 함수
  function getFullName() {
    return firstName + " " + lastName;
  }

  console.log("Hello, " + getFullName());
  console.log("Bye, " + getFullName());
}

// ---렉시컬 환경---
// 1. 변수

// 자바스크립트에선 실행 중인 함수, 코드블록, 스크립트 전체가
// 렉시컬 환경(숨겨진 내부 연관 객체)를 갖는다. 그리고 이 것은 두 부분으로 구성된다.
// * 환경 레코드: 모든 지역 변수를 프로퍼티로 저장하고 있는 객체 (this값도 여기에 저장된다)
// * 외부 렉시컬 환경에 대한 참조: 외부 코드와 연관됨
function example5() {
  // console.log(phrase) // ---- phrase: <uninitialized> ----> null(outer)
  //ReferenceError: Cannot access 'phrase' before initialization
  let phrase; // ---- phrase: undefined (초기화)
  console.log(phrase) // undefined
  phrase = "hello"; // ---- phrase: "hello" (할당)
  console.log(phrase) // hello
  phrase = "bye"; // ---- phrase: "bye" (재할당)
  console.log(phrase) // bye
}

// 2. 함수 선언문
function example6() {
  // console.log(phrase) // ReferenceError: Cannot access 'phrase' before initialization
  console.log(say) // [Function: say]

  let phrase = 'hello';
  function say(name) {
    return `hi, ${name}`;
  }
}

// 3. 내부와 외부 렉시컬 환경
function example7() {
  let phrase = 'hello';

  function say(name) {
    console.log(`${phrase}, ${name}`);
  }
  // Lexical Environment of the call
  // [name: 'Sunyoung'] --(outer)--> [say: function, phrase: 'hello'] --(outer)--> null

  say("Sunyoung"); // hello, Sunyoung
}

// 4. 함수를 반환하는 함수
function example8() {
  const makeCounter = () => {
    let count = 0;

    return function () { // [[Environment]] => 함수가 생성된 곳의 렉시컬 환경을 기억한다.
      return count++;
    };
  }
  // 실행 흐름이 중첩 함수이 본문으로 넘어오면?
  // count 변수가 필요하다. 먼저 자체 렉시컬 환경에서 찾는다
  // 익명 중첩 함수엔 지역변수가 없다. 때문에 이 렉시컬 환경은 비어있다. <empty>
  // counter()의 렉시컬 환경이 참조하는 외부 렉시컬 환경에서 count를 찾아보자. count를 찾았다!

  const counter = makeCounter();
  // counter를 여러 개 만들었을 때, 이 함수들은 서로 독립적일까?
  // 함수와 중첩함수 내 count 변수엔 어떤 값이 할당될까?
  // 호출될 때 마다 새로운 렉시컬 환경(함수가 참조하는 내부 렉시컬 환경과 내부 렉시컬 환경이 가르키는 외부 렉시컬 환경)이 생성된다.
  // 그리고 이 렉시컬 환경은 counter.[[Environment]]에 저장된 렉시컬 환경을 외부 렉시컬 환경으로서 참조
  // 즉, 함수의 숨김 프로퍼티인 [[Environment]]를 통해 함수가 어디서 태어났는지 기억하고, 렉시컬 환경을 참조할 수 있다.
  console.log(counter()); //0
  console.log(counter()); //1
  console.log(counter()); //2
}

// 가비지 컬렉션
function example9() {
  function f() {
    let value = 123;

    return function () {
      console.log(value);
    }
  }

  // g.[[Environment]]에 f()호출 시 만들어지는 렉시컬 환경이 저장된다.
  let g = f();
  // 배열 안의 세 함수는 각각 f()를 호출할 때 생성된
  // 렉시컬 환경과 연관 관계를 맺는다.
  let arr = [f(), f(), f()];
  // 렉시컬 환경 객체를 참조하는 중첩함수가
  // 하나라도 있으면 사라지지 않는다.
  // 때문에 아래와 같이 중첩 함수를 메모리에서 삭제해야 렉시컬 환경이 제거된다.
  g = null;
  arr = null;
  console.log(g, arr)
}

test("run", () => {
  // expect(example()).toBe();
  // expect(example2()).toBe();
  // expect(example3()).toBe();
  // expect(example4('Sunyoung', 'Park')).toBe();
  // expect(example5()).toBe();
  // expect(example6()).toBe();
  // expect(example7()).toBe();
  // expect(example8()).toBe();
  expect(example9()).toBe();
});
