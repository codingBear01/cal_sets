const pushUp = (cnt) => {
  const sets = {};
  for (let i = 1; i <= cnt; i++) {
    if (!sets[i]) sets[i] = [];

    sets[i][0] = cnt - i + 1;
    sets[i][1] = i;
  }

  return sets;
};

const pullUp = (cnt) => {
  const sets = [];
  for (let i = 0; i < cnt * 2 - 1; i++) {
    if (i < cnt) sets[i] = i + 1;
    else sets[i] = sets[i - 1] - 1;
  }

  return sets;
};

console.log('pushUp:', pushUp(10));
console.log('pullUp:', pullUp(5));

/* 하체(스쿼트, 런지)
하트, 클로버 = 스쿼트
클로버 = 런지(왼)
스페이드 = 런지(오)

1~10 = 숫자 그대로
J, K, Q = 11
Joker = 12
*/
