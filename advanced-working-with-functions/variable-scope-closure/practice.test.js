// sayHi함수는 외부변수이름의 가장 최근의 변경을 반영할까?
function practice() {
  let name = 'John'; // 1.name식별자에 'John'을 할당(바인딩)

  function sayHi() {
    console.log("Hi, " + name);
  }
  // 4. 해당 함수의 내부렉시컬환경의 환경 레코드에서 name을 찾는다. 
  // name이 없음 => 외부 렉시컬 환경에 대한 참조를 본다. name('Pete')을 찾았다!

  name = 'Pete'; // 2. name식별자에 'Pete'을 재할당
  sayHi(); // 3. sayHi함수 호출
}

// counter는 독립적일까요?
function practice2() {
  // makeCounter를 사용해 두 개의 counter와 counter2를 만들었다.
  // 두 counter는 독립적일까?
  function makeCounter() {
    let count = 0;

    return function () {
      return count++
    };
  }

  let counter = makeCounter();
  let counter2 = makeCounter();

  // console.log(counter());
  // console.log(counter());
  // console.log(counter2());
  // console.log(counter2());
}

// counter 객체
function practice3() {
  // 생성자 함수를 이용해 counter 객체를 만들어보았다.
  // 아래 예시는 잘 작동할까?
  function Counter() {
    let count = 0;

    this.up = function () {
      return ++count;
    }
    this.down = function () {
      return --count;
    }
  }

  let counter = new Counter();

  // 생성자 함수의 두 중첩함수는 environment프로퍼티로 태어난 곳을 기억한다.
  // 때문에 동일한 외부 렉시컬 환경의 count변수를 공유하고 있다.
  // console.log(counter.up()); 
  // console.log(counter.up()); 
  // console.log(counter.down()); 
}

// if 문 안의 함수
function practice4() {
  let phrase = 'hello';

  if (true) {
    let user = 'John';

    function sayHi() {
      console.log(`${phrase}, ${user}`);
    }
  }

  // 어떤 결과값이 출력될까?
  // 해당 sayHi함수의 외부 렉시컬 환경은 if문 코드블록 내부이고,
  // if문 코드블록안에서 유효범위가 끝난다.
  // 때문에 참조에러(혹은 undefined)가 날거라고 예상한다.
  console.log(sayHi());
}

// 클로저를 이용하여 합 구하기
function practice5() {
  // sum(a)(b) = a+b와 같은 연산을 해주는 중첩함수 sum만들기

  // 두 번째 괄호가 제대로 동작하려면 첫 번째 괄호는 반드시 함수를 반환해야한다.
  function sum(a) {
    return function (b) {
      return a + b; // a는 외부 렉시컬 환경에서 가져옴
    };
  }

  // sum(a)(b) => 중첩익명함수에 b인자를 넘겨주겠다는 뜻???
  console.log(sum(1)(2)) // = 1+2 = 3
  console.log(sum(5)(-1)) // = 5+(-1) = 4
}

// Is variable visible? (TDZ)
function practice6() {
  // P.S. There’s a pitfall in this task. The solution is not obvious.
  let x = 1;

  function func() {
    // 코드블록의 시작 ~

    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    // 접근불가 => let, const도 호이스팅이 일어나지만, 초기화되지 않았기 때문에 접근할 수 없다.
    // (x변수는 let전에는 {uninitialized}상태이다. 따라서 여기까지는 해당변수에 접근할 수 없다.)

    // ~ temporal dead zone

    let x; // 선언, 초기화 완!! *접근가능*
    console.log(x); // undefined
    x = 1; // 값할당
    console.log(x); // 1
  }

  function func2() {
    console.log(z); // 초기화 완!! undefined *접근가능*
    var z; // 선언 완!!
    console.log(z); // undefined
    z = 1; // 값할당
    console.log(z); // 1
  }

  func();
  // 이 예제에서 우리는 {non-existing} 변수와 {uninitialized} 변수 사이의 독특한 차이를 관찰 할 수 있다.
  // 변수는 코드 블록(또는 함수)에 들어가는 순간부터 "초기화되지 않은" 상태로 시작된다.
  // 그리고 그것은 해당 let문이 나올 때까지 비초기화 상태로 유지된다.
  // 즉, 변수는 기술적으로 존재하지만, let전에는 사용할 수 없습니다.
  // 위의 코드가 이걸 보여줍니다.
  // 변수의 일시적인 사용 불가능 영역(코드 블록의 시작부터 let까지)은 때때로 데드 존(dead zone)이라고 불린다.

  func2();
}

// 함수를 이용해 원하는 값만 걸러내기
function practice7() {
  // a이상 b이하 판별
  function inBetween(a, b) { // 함수 생명주기가 끝나고 나서도 함수를 참조할 수 있어야한다.
    // console.log(x)// ReferenceError: x is not defined
    return function (x) {
      console.log(x) // 정상출력 왜지??
      return x >= a && x <= b
    }
  }

  // 배열 안에 있는 값인가? 판별
  function inArray(arr) {
    return function (x) {
      return arr.includes(x)
    }
  }

  let arr = [1, 2, 3, 4, 5, 6, 7];

  console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
  console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
}

// 필드를 기준으로 정렬하기
function practice8() {
  function byField(para) {
    return function (a, b) {
      return a[para] > b[para] ? 1 : -1;
    }
  }

  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  // console.log(users.sort(byField('name')));
  console.log(users.sort(byField('age')));
}

// 함수를 사용해 군대 만들기
function practice9() {
  function makeArmy() {
    let shooters = [];

    let i = 0; // i의 증가는 외부 스코프에서 이루어지기 때문에 shooter함수 내부에 지역변수 i를 가져야한다.
    // for (let i = 0; i < 10; i++) {
    //   let shooter = function () { // shooter 중첩함수
    //     console.log(i); // 몇 번째 shooter인지 출력해줘야 함
    //   };
    //   shooters.push(shooter);
    // }

    while (i < 10) {
      let j = i; // 외부변수 i를 지역변수 j에 복사
      let shooter = function () { // shooter 중첩함수
        console.log(j); // 몇 번째 shooter인지 출력해줘야 함
      };
      shooters.push(shooter);
      i++;
    }
    return shooters;
  }

  let army = makeArmy();

  army[0](); // 0번째 shooter가 10을 출력함
  army[5](); // 5번째 shooter 역시 10을 출력함
  // 모든 shooter가 자신의 번호 대신 10을 출력하고 있음
}

test("run", () => {
  // expect(practice()).toBe();
  // expect(practice2()).toBe();
  // expect(practice3()).toBe();
  // expect(practice4()).toBe();
  // expect(practice5()).toBe();
  // expect(practice6()).toBe();
  // expect(practice7()).toBe();
  // expect(practice8()).toBe();
  expect(practice9()).toBe();
});
