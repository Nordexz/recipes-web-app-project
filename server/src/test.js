const letters = 'abcdefghijklmnopqrstuvwxyz'
const url = 'http://www.themealdb.com/api/json/v1/1/search.php?f=';

let count = [];

// letters.split('').forEach(el => {
//   fetch(url + el)
//     .then(res => res.json())
//     .then(data => data.meals !== null ? count += data.meals.length : count += 0)
// })

letters.split('').forEach(el => {
  (async () => {
    const response = await fetch(url + el);
    const data = await response.json();
    if (data.meals)
    count.push(data.meals.length);
  })();
})

setTimeout(() => {
  console.log(count.reduce((acc, sum) => acc + sum));
}, 120000); //293

// (async () => {
//   const response = await fetch('http://www.themealdb.com/api/json/v1/1/search.php?f=zx');
//   const data = await response.json();
//   if (data.meals)
//   count.push(data.meals.length);
// })();

// setTimeout(() => {
//   console.log(count);
// }, 1000);
