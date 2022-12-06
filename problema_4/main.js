const checkParity = (n) => {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
const parityPercentage = (odds, evens) => {
  const total = odds.length + evens.length;
  const oddPercent = (odds.length / total) * 100;
  const evenPercent = (evens.length / total) * 100;
  return [oddPercent, evenPercent];
};
const arrayInfo = (array) => {
  const odd = [];
  const even = [];
  const min = Math.min(...array);
  const max = Math.max(...array);
  const maxPercentage = (min / max) * 100;
  const count = array.length;
  array.forEach((element) => {
    // Mirar si el numero es par o impar y añadirlo al array correspondiente
    checkParity(element) ? even.push(element) : odd.push(element);
  });
  const [oddPercent, evenPercent] = parityPercentage(odd, even);
  return { oddPercent, evenPercent, min, max, maxPercentage, count };
};
const array = [9, 365, 998, 51, 859, 999, 434, 681, 10, 170];
console.log(arrayInfo(array));
