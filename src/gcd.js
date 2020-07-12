// 最大公约数
function gcd(p, q) {
  const [max, min] = p > q ? [p, q] : [q, p];
  if (min === 0) {
    return max;
  }
  let divisor = min;
  while (divisor !== 1) {
    if (max % divisor === 0 && min % divisor === 0) {
      return divisor;
    }
    divisor--;
  }
  return divisor;
}

/**
 * 辗转相除法
 * gcd(a, b) = gcd(b, a mod b)
 * a mod b是a除以b所得的余数
 * a,b的最大公约数就是b,a mod b的最大公约数
 */

function gcd_1(p, q) {
  if (q === 0) return p;
  return gcd_1(q, p % q);
}

// const a = gcd_1(10, 3);
// const b = gcd_1(3, 10);
// const c = gcd_1(10, 0);
// const d = gcd_1(10, 5);
// const e = gcd_1(27, 24);
// const f = gcd_1(0, 24);
// console.log(a, b, c, d, e, f);

// 最小公倍数是 a * b / gcd(a, b)
function fn(p, q) {
  return (p * q) / gcd_1(p, q);
}

// const a = fn(10, 5);
// const b = fn(13, 2);
// console.log(a, b);

function fn1(p, q) {
  if (q === 0) return q;
  let count = 1;
  while ((p * count) % q === 0) {
    count++;
  }
  return p * count;
}

const a = fn(10, 5);
const b = fn(13, 2);
console.log(a, b);
