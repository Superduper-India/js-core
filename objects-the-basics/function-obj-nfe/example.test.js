// 옵셔널 체이닝
function example() {
  // 1. 스펙에 추가된 지 얼마 안됨. 구식 브라우저는 폴리필(명세서대로 구현하는 것)이 필요

  // 0. 아래부터 예시. 사용자가 여러명있는데, 몇 명은 아래처럼 빈객체로 주소 정보를 갖고 있지 않을때
  let user = {};
  // console.log(user.address.street); // TypeError: Cannot read properties of undefined (reading 'street')
  //    아래와 같은 방법도 있지만 이렇게하면 코드가 길어지는 단점이 있다.
  // console.log(user && user.address && user.address.street);

  // 2. ?.은 왼쪽 평가대상이 없어도 괜찮은 경우에만 선택적으로 사용 (즉, 왼쪽 평가대상이 null이나 undefined인지 확인 후 평가를 계속 진행)
  //    user객체안에 address프로퍼티가 존재하면 address.street를 반환하고,
  //    그렇지 않으면 undefined를 반환함
  //    아래의 경우 왼쪽 평가 대상이 undefined이기 때문에 undefined반환
  // console.log(user.address?.street);

  //    참고로 user가 null이나 undefined가 아니라, 실제 값이 존재한다면
  //    반드시 user.address프로퍼티는 있어야한다. 그렇지 않으면 user?.address.street의 두 번째 점 연산자에서 에러가 발생
  // console.log(user?.address.street); // TypeError: Cannot read properties of undefined (reading 'street')

  // 3. 해당 예시의 논리상 user는 반드시 있어야 하지만 address는 필수값이 아니다.
  //    실수로 인해 user에 값을 할당하지 않았다면 바로 알아낼 수 있도록 address뒤에 ?.가 붙는게 바람직하다.

  // 4. ?.앞의 변수는 꼭 선언되어 있어야 한다.
  // user?.address; // ReferenceError: user is not defined

  // 5. 단락 평가
  //    ?.는 왼쪽 평가대상에 값이 없으면 즉시 평가를 멈춘다.
  //    때문에 오른쪽에 있는 부가 동작은 ?.의 평가가 멈췄을 때 더는 일어나지 않는다.
  let user2 = null; // 왼쪽 평가대상에 값이 없으므로 평가를 멈추고, sayHi함수가 호출되지 않는다.
  // let user2 = {}; // sayHi함수가 호출된다.
  let x = 0;

  user2?.sayHi(x++);

  // 6. ?.()와 ?.[]
  //    존재 여부가 확실치 않은 함수를 호출할 때 ?.()를 어떻게 쓸 수 있는지 확인
  let user3 = {
    admin() {
      console.log('관리자 계정이다.');
    }
  }

  let user4 = {};

  // admin의 존재 여부를 확인한다.
  user3.admin?.(); // admin이 있기 때문에 호출 => 관리자 계정이다.
  user4.admin?.(); // 정의되어있지 않지만 undefined를 반환하지 않고 평가가 멈춤

  // .대신 []을 사용해 객체 프로퍼티에 접근하면
  // ?.[]를 사용할 수도 있다.
  // 이렇게하면 객체 존재 여부가 확실치 않은 경우에도 안전하게 프로퍼티를 읽을 수 있다.
  let user5 = {
    firstName: 'sunyoung'
  };

  let user6 = null; // user6는 권한이 없는 사용자라고 가정

  let key = 'firstName';

  console.log(user5?.[key]); // sunyoung
  console.log(user6?.[key]); // undefined => 만약 user6가 논리상 반드시 있어야 한다면, 이렇게하는건 바람직하지않다.

  // 7. ?.은 읽기나 삭제하기에는 사용할 수 있지만 쓰기에는 사용할 수 없다.
  //    user5가 존재하면 firstName삭제하기
  delete user5?.firstName;
  // console.log(user5);
  // user7?.name = 'sunyoung'; // SyntaxError: Invalid left-hand side in assignment expression.
}

test("run", () => {
  expect(example()).toBe();
});
