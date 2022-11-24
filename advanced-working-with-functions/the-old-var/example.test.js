// var는 블록 스코프가 없다
function example() {
  // case1. if문
  // if (true) {
  //   // var test = true; // var는 코드블록을 무시하므로 test는 전역변수가 된다!
  //   let test = true; // let으로 변수를 선언함
  // }

  // case2. for문
  for (var i = 0; i < 10; i++) {
    // ...
  }

  // console.log(i);
  // var => if, for문이 끝났어도 변수에 여전히 접근할 수 있다.
  // let => ReferenceError: test is not defined

  // case3. 코드블록이 함수내에 있는 경우
  function sayHi() {
    if (true) {
      // 코드블록이 함수 안에 있다면 var는 함수 레벨 변수가 된다.
      var phrase = 'hello';
    }

    console.log(phrase);
  }

  sayHi(); // hello
  console.log(phrase); // ReferenceError: phrase is not defined
}

// var는 변수의 중복 선언을 허용한다
function example2() {
  // let user;
  // let user; // SyntaxError: Identifier 'user' has already been declared.

  var user = "Pete";
  var user = "John"; // 이 var는 이전에 이미 선언됐기 때문에 무시됩니다. 따라서 재할당만 일어납니다.
  console.log(user); // John
}

// 선언하기 전 사용할 수 있는 vars
function example3() {
  // var선언은 함수가 시작될 때 처리된다. (전역변수라면 스크립트가 시작될 때 처리된다)
  function sayHi() {
    // 함수 본문 내에서 var로 선언한 변수는 선언 위치와 상관없이
    // 함수 본문이 시작되는 지점에서 정의된다 
    // (단, 변수가 중첩 함수 내에서 정의되지 않아야 이 규칙이 적용된다.)

    // 그래서 이 시점에서 변수 호이스팅에 의해 이미 phrase변수가 선언
    // phrase변수는 undefined로 초기화된다. => 선언과 초기화가 한번에 진행된다.
    // var phrase; // 변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다.
    phrase = "hello"; // 할당
    // console.log(phrase); // hello
    // var phrase; // 변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다.

    if (false) {
      var phrase; // 코드 블록은 무시되기 때문에, 아래 코드 역시 동일하게 동작한다.
    }

    console.log(phrase); // hello
  }
  sayHi();
}

// 선언은 호이스팅 되지만 할당은 호이스팅되지 않는다.
function example4() {
  function sayHi() {
    console.log(phrase); // undefined
    var phrase = "hello"; // 변수 선언(var) => 변수에 값을 할당(=)
    // 위 코드의 동작을 코드로 풀게되면 아래와 같이 동작한다.

    // var phrase // 선언은 함수 시작 시 처리된다.
    // console.log(phrase) // undefined
    // phrase = "hello"; // 할당은 실행 흐름이 해당 코드에 도달했을 때 처리된다.
  }
  sayHi();
}

// 즉시 실행 함수 표현식
function example5() {
  (function () {
    console.log("함수를 괄호로 둘러싸기");
  })();

  (function () {
    console.log("전체를 괄호로 둘러싸기");
  }());

  !function () {
    console.log("표현식 앞에 비트 NOT 연산자 붙이기");
  }();

  +function () {
    console.log("표현식 앞에 단항 덧셈 연산자 붙이기");
  }();
}

test("run", () => {
  // expect(example()).toBe();
  // expect(example2()).toBe();
  // expect(example3()).toBe();
  // expect(example4()).toBe();
  expect(example5()).toBe();
});
