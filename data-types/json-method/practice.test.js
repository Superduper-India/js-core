function practice(user) {
  let newUser = JSON.parse(JSON.stringify(user));
  return newUser;
}

function practice2(room, meetup) {
  // 순환 참조
  room.occupiedBy = meetup;
  meetup.self = meetup;

  // meetup을 참조하는 프로퍼티를 제외, 모든 프로퍼티를 직렬화하는 함수
  const result = JSON.stringify(meetup,
    function replacer(key, value) {
      return (key != "" && value == meetup) ? undefined : value;
    })

  console.log(result);
}

test("run", () => {
  let user = {
    name: "John Smith",
    age: 35
  };

  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    occupiedBy: [{ name: "John" }, { name: "Alice" }],
    place: room
  };

  // expect(practice(user)).toStrictEqual(user);
  expect(practice2(room, meetup)).toBe();
});
