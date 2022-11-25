// contextual name property - 함수의 경우
function example() {
  // function sayHi() {
  //   console.log('hi');
  // }

  // 함수 표현식의 익명 함수라도 자동으로 이름을 할당한다.
  let sayHi = function () {
    console.log('bye')
  }

  // 기본값을 사용, 이름을 할당한 경우도!
  function f(sayHi = function () { }) {
    console.log(sayHi.name);
  }

  f();
  // console.log(sayHi.name); // name프로퍼티로 함수이름을 가져와라
}

// contextual name property - 객체의 메서드의 경우
function example2() {
  let user = {
    sayHi() {
      // ...
    },
    sayBye: function () {
      // ...
    }
  }

  console.log(user.sayHi.name)
  console.log(user.sayBye.name)

  // 그런데 객체 메서드 이름은 함수처럼 자동 할당이 되지 않는다.
  // 그래서 이때 name프로퍼티엔 빈 문자열이 저장된다.
  let arr = [function () { }]; // 익명함수
  console.log(arr[0].name); // <빈 문자열>
}

// length property
function example3() {
  // 내장 프로퍼티 length는 함수 매개변수의 개수를 반환한다.
  function f1(a) { }
  function f2(a, b) { }
  function many(a, b, ...more) { }

  console.log(f1.length); // 1
  console.log(f2.length); //2
  console.log(many.length); // 2 => 나머지 매개변수는 개수에 포함되지 않는다.
}

// length property - 함수의 타입을 검사
function example4() {
  function ask(question, ...handlers) {
    let isYes = confirm(question);

    for (let handler of handlers) {
      console.log(handler)
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }

  }

  // 사용자가 OK를 클릭한 경우, 핸들러 두 개를 모두 호출함
  // 사용자가 Cancel을 클릭한 경우, 두 번째 핸들러만 호출함
  ask("질문 있으신가요?", () => alert('OK를 선택하셨습니다.'), result => alert(result));
}

// 커스텀 프로퍼티
function example5() {
  function sayHi() {
    console.log('Hi');

    // 함수를 몇 번 호출했는지 센다.
    sayHi.counter++;
  }
  sayHi.counter = 0; // 초깃값
  sayHi(); // Hi
  sayHi(); // Hi

  console.log(`호출 횟수: ${sayHi.counter}회`) // 호출 횟수: 2회
}

// 커스텀 프로퍼티 - 클로저
function example6() {
  function makeCounter() {
    // let count = 0 대신 아래 메서드(프로퍼티)를 사용함
    function counter() { // (1) counter함수가 실행된다.
      return counter.count++; // (2) 증가연산자 후위이기 때문에 증가하기전(0)의 값이 리턴된다.
    }
    // 함수 프로퍼티가 아래에 있어도 위 counter함수에서 알 수 있는 이유?
    counter.count = 0; // (3) 위의 증가된 값으로 업데이트된다.
    return counter; // (4) 2번의 함수가 리턴된다.
  }

  let counter = makeCounter();
  // 아래코드를 뜯어보자면 첫번째괄호 => counter()호출이고, 
  // 두번째괄호 => counter()에 넘겨주는 인자값을 넣어준다.
  console.log(counter()); // 0 
  console.log(counter()); // 1
  // console.log(makeCounter()())이랑 똑같은 구조 아닌가? 왜 실행이 안되지?
  counter.count = 10;
  // 함수의 프로퍼티를 사용해 count를 함수에 바인딩한 경우에는 외부에서 접근해서 값을 변경할 수 있다.
  console.log(counter()); // 10
}

// 기명 함수 표현식(NFE) - 1
function example7() {
  let sayHi = function func(who) {
    console.log(`Hello, ${who}`);
  }

  // 기존의 익명 함수 표현식에 위와 같이 이름을 붙인다고 해도
  // 함수 선언문으로 바뀌지 않는다.
  sayHi("Sunyoung"); // Hello, Sunyoung
  // 하지만 기명 함수 표현식을 외부에서 호출하는 것은 불가능하다.
  func(); //ReferenceError: func is not defined
}

// 기명 함수 표현식(NFE) - 2
function example8() {
  // 아래와 같이 작성한 코드의 문제점은 무엇일까?
  let sayHi = function func(who) {
    if (who) { // 인자로 들어오는 who가 있다면,
      console.log(`hello, ${who}`);
    } else { // who가 없다면,
      func('guest'); // 인자로 'guest'를 넣어서 자기자신을 호출한다.
    }
  }

  // sayHi('Sunyoung');// hello, Sunyoung
  // sayHi();// hello, guest

  // 만약 위 함수 표현식을 새로운 변수에 할당하고,
  // 기존 변수에 null을 할당한다면?
  let welcome = sayHi;
  sayHi = null;

  welcome(); // TypeError: sayHi is not a function
  // 기명 함수 표현식으로 바꾼뒤, => hello, guest
}

test("run", () => {
  // expect(example()).toBe();
  // expect(example2()).toBe();
  // expect(example3()).toBe();
  // expect(example4()).toBe(); // ToDo 다시보기
  // expect(example5()).toBe();
  // expect(example6()).toBe(); // ToDo 다시보기
  // expect(example7()).toBe();
  expect(example8()).toBe();
});
