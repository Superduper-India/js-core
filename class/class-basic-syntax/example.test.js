// 클래스와 기본 문법
// 클래스는 객체 지향 프로그래밍에서 특정 객체를 생성하기 위해
// 변수와 메소드를 정의하는 일종의 틀로, 객체를 정의하기 위한 상태(변수)와 메서드(함수)로 구성된다.

// 실무에선 사용자나 물건같이 동일한 종류의 객체를 여러 개 생성해야 하는 경우가 잦다.
// 이럴 때 생성자 함수 혹은 es6에서 도입된 클래스문법을 사용할 수 있다.

function example() {
  class User {
    // 객체의 기본 상태를 설정해주는 메서드 (new에 의해 자동으로 호출됨)
    constructor(name) {
      this.name = name;
    }

    // 메서드
    sayHi() {
      console.log('this.name:', this.name);
    }
  }

  // new User('선영')를 호출하면,
  // 내부에서 정의한 메서드가 들어있는 객체(=user,인스턴스)가 생성된다.
  // 넘겨받은 인수('선영')과 함께 constructor가 자동으로 실행된다.
  // 이때 인수 '선영'이 this.name에 할당된다. (this는 User자체이다)
  const user = new User('선영');

  // 이후 아래의 메서드를 호출할 수 있게 된다.
  user.sayHi();
}

function example2() {
  // 아래 문법 구조가 하는일은 다음과 같다.
  // 1. User라는 이름을 가진 함수를 만든다. 함수 본문은 생성자 메서드(constructor)에서 가져온다.
  //    constructor가 없으면 본문이 비워진 채로 함수가 만들어진다.
  // 2. sayHi같은 클래스 내에서 정의한 메서드를 User.prototype에 저장한다.
  class User {
    constructor(name) { this.name = name; }
    sayHi() { console.log(this.name); }
  }

  // 클래스는 함수다.
  console.log('typeof User:', typeof User);

  // 정확히는 constructor와 동일하다.
  console.log(
    'User === User.prototype.constructor:', User === User.prototype.constructor
  );

  // 클래스 내부에서 정의한 메서드는 User.prototype에 저장된다.
  console.log('User.prototype.sayHi:', User.prototype.sayHi);
}

function example3() {
  // 클래스 문법과 생성자 함수의 차이

  // 생성자 함수를 만든다. (즉 순수함수로 클래스 역할을 하는 함수를 선언한다.)
  // 모든 함수의 프로토타입은 constructor프로퍼티를 기본으로 갖고 있으므로
  // 명시적으로 만들 필요가 없다.
  function User(name) {
    this.name = name;
  }

  // 프로토타입에 메서드를 추가한다.
  User.prototype.sayHi = function () {
    console.log(this.name);
  }

  const user = new User('선영');
  // user.sayHi();

  // 위 방법은 클래스 함수와 거의 유사하다. 근데 몇 가지 차이가 있다.
  // 1. class로 만든 함수엔 특수 내부 프로퍼티인 [[IsClassConstructor]]가 있다.
  class User2 {
    constructor() { }
  }

  console.log('typeof User2:', typeof User2);
  //    아래와 같은에러가 발생할 때 위 프로퍼티가 사용된다.
  // User2(); // TypeError: Class constructor User2 cannot be invoked without 'new'

  // 2. 클래스에 정의된 메서드는 열거할 수 없다.
  //    즉, 클래스의 prototype프로퍼티에 추가된 메서드의 [[enumberable]] false다.
  //    그러므로 for...in으로 객체를 순회할 때 메서드는 순회 대상에서 제외된다.

  // 3. 마지막으로 클래스는 항상 엄격 모드로 실행된다.
}

function example4() {
  // 클래스 표현식
  // 아래 함수는 기명 함수 표현식과 유사하게 동작한다.
  const User = class A {
    sayHi() {
      // A라는 이름은 오직 클래스안에서만 쓸 수 있다.
      console.log(A);
    }
  };

  // new User().sayHi();
  // console.log(A); // ReferenceError: A is not defined

  // 아래와 같이 필요에 따라 클래스를 동적으로 생성하는 것도 가능하다. (클로저는 아니고, 값이 하위로 내려오는 개념임)
  function makeClass(phrase) {
    // 클래스를 선언하고 이를 반환함
    return class {
      sayHi() {
        console.log(phrase);
      };
    };
  }

  // 새로운 클래스를 만듦
  let User2 = makeClass("안녕하세요.");
  new User2().sayHi(); // 안녕하세요.
}

test("run", () => {
  // 클래스란?
  expect(example()).toBe();
  expect(example2()).toBe();
  // 클래스와 생성자 함수와의 차이
  expect(example3()).toBe();
  // 클래스 표현식
  expect(example4()).toBe();
});
