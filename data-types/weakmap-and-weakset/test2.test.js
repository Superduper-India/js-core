// 읽은 날짜 저장하기

// 이번 문제에선 "메시지를 언제 읽었나요?"라는 질문을 던지면 제대로 된 답이 반환되는 자료구조가 무엇인지 생각해봅시다.
// 위 문제에선 'yes’나 'no’만 저장해도 괜찮았는데, 이제는 날짜 정보를 저장해야 하고, 이 날짜 정보는 메시지가 기비지 컬렉션의 대상이 되기 전까지만 메모리에 남아있어야 합니다.

// 어떻게 풀것인가?
// WeakMap을 이용한다. .set({}, fullDate)로 읽은메시지를 저장해준다.

function test2() {
  const readMap = new Map();

  let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];

  const now = new Date();
  const fullDate = `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`;

  readMap.set(messages[0], fullDate);
  readMap.set(messages[1], fullDate);

  console.log(readMap.size);
  console.log(readMap.delete(messages[1]));
  console.log(readMap.size);

}

test("run", () => {
  expect(test2()).toEqual();
});
