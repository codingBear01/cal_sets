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
