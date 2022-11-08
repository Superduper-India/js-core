function example() {
  let now = new Date(); // 2022-11-08T02:01:56.304Z
  new Date(2011, 0, 1, 0, 0, 0, 0); // 2011년 1월 1일, 00시 00분 00초

  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  // Date객체의 메서드들 (2022.11.08 화요일 기준)
  now.getFullYear(); // 2022
  now.getMonth() + 1; // 11
  now.getDate(); // 8
  days[now.getDay()]; // tue
  new Date(2022, 0, 32); // 2022-01-31T15:00:00.000Z

  // Date.parse와 문자열로 타임스탬프 구하기
  Date.parse('2012-01-26T13:51:50.417-07:00'); //1327611110417
}

test("run", () => {
  expect(example()).toBe();
});
