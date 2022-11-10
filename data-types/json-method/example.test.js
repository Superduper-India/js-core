function example() {
  let user = {
    name: 'john',
    age: 30,

    // 사용자 지정 개체에서 재정의?
    // 문제점: 객체 프로퍼티가 바뀔 때마다 수동으로 값을 바꿔줘야함.
    toString() {
      return `my name is ${this.name}, and i'm ${this.age} years old.`
    }
  }

  console.log(user.toString()); // [object Object]
  console.log(user); // my name is john, and i'm 30 years old.
}

function example2() {
  const student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };

  const studentJSON = JSON.stringify(student);
  console.log(typeof studentJSON); // string
  console.log(studentJSON);
  // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}
}

function example3() {
  // console.log(typeof JSON.stringify(1)); // string => 출력값엔 왜 따옴표가 없는지?
  // console.log(JSON.stringify('꽃돼지')); // "꽃돼지"
  // console.log(JSON.stringify(true)); // true
  // console.log(JSON.stringify([1, 2, 3, 4])); // [1,2,3,4]
  console.log(JSON.parse(JSON.stringify([1, 2, 3, 4]))[3]); // 4
}

function example4() {
  let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
  };

  console.log(JSON.stringify(meetup));
  // 중첩객체도 직렬화 고고!
  // {"title":"Conference","room":{"number":23,"participants":["john","ann"]}}

  console.log(JSON.stringify(meetup, null, 2));
  // 3번째 인수 space로 중첩객체 들여쓰기 가능!
}

function example5() {
  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    participants: [{ name: "john" }, { name: "ann" }]
  };

  meetup.place = room;
  room.occupiedBy = meetup;

  // console.log(JSON.stringify(meetup)); // TypeError: Converting circular structure to JSON

  // console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'number']));
  // {"title":"Conference","participants":["john","ann"],"place":{"number":23}}

  console.log(JSON.stringify(meetup, function replacer(key, value) {
    return (key == 'occupiedBy') ? undefined : value;
  }));
  // {"title":"Conference","participants":["john","ann"],"place":{"number":23}}
}

function example6() {
  let room = {
    number: 23,
    toJSON() {
      return this.number;
    }
  }

  let meetup = {
    room
  }

  console.log(JSON.stringify(room)); // 23
  console.log(JSON.stringify(meetup)); // {"room":23}
}

function example7() {
  let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

  let meetup = JSON.parse(str, function (key, value) {
    if (key == 'date') {
      return new Date(value);
    } else return value;
  });

  console.log(meetup.date.getDate()); // 30
}

test("run", () => {
  // expect(example()).toBe();
  // expect(example2()).toBe();
  // expect(example3()).toBe();
  // expect(example4()).toBe();
  // expect(example5()).toBe();
  // expect(example6()).toBe();
  expect(example7()).toBe();
});
