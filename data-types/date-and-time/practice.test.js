// 날짜 생성하기
function practice(date) {
}

// 요일 보여주기
function practice2(date) {
  const week = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
  return week[date.getDay() - 1];
}

// 유럽 기준 달력
function practice3(date) {
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }

  return day + 1;
}

// n일 전 '일' 출력하기
function practice4(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}

// 달의 마지막 일
function practice5(year, month) {
  let date = new Date(year, month + 1, 0);
  // new Date의 세 번째 매개변수의 기본값은 1이다.
  // 그러므로 0을 넘겨주게 되면, 첫 번째 일의 1일 전을 의미하게 된다.

  return date.getDate();
}

// 오늘 하루가 시작된 이후 몇 초나 지났을까요?
function practice6() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today;
  Math.round(diff / 1000); // 밀리초를 초로 변환
}

// 오늘 하루가 끝날 때까지 몇 초나 남았을까요?
function practice7() {
  let now = new Date();
  let tmrrw = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tmrrw - now;
  Math.round(diff / 1000); // 밀리초를 초로 변환
}

test("run", () => {
  let date = new Date(2012, 1, 20, 3, 12);
  let date2 = new Date(2012, 0, 3);  // 2012년 1월 3일
  let date3 = new Date(2019, 11, 5);
  let date4 = new Date(2015, 0, 2);

  expect(practice(date)).toBe();
  expect(practice2(date2)).toBe("TU");
  expect(practice3(date3)).toBe(5);
  expect(practice4(date4, 1)).toBe(1);
  expect(practice5(2012, 1)).toBe(29);
  expect(practice6()).toBe();
  expect(practice7()).toBe();
});
