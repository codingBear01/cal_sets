푸쉬업과 풀업 세트 수를 계산해주는 간단한 코드입니다.

ex)
console.log('pushUp:', pushUp(5));
// pushUp: {
  '1': [ 10, 1 ],
  '2': [ 9, 2 ],
  '3': [ 8, 3 ],
  '4': [ 7, 4 ],
  '5': [ 6, 5 ]
}
console.log('pullUp:', pullUp(5));
// pullUp: [
  1, 2, 3, 4, 5,
  4, 3, 2, 1
]
