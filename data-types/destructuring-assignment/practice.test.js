function practice() {
  // 구조 분해 할당
  let user = {
    name: "John",
    years: 30
  };

  const { name, years: age, isAdmin = false } = user;

  console.log(name, age, isAdmin);
}

function practice2(salaries) {
  // 최대 급여 계산하기
  let max = 0;
  let maxName = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}

test("run", () => {
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  // expect(practice()).toBe();
  expect(practice2(salaries)).toBe("Pete");
});
