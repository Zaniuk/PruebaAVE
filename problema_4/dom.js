const f1 = document.getElementById("f_1");
const f2 = document.getElementById("f_2");
const maxPercentage = document.getElementById("max_percentage");
const oddPercent = document.getElementById("odd_percent");
const evenPercent = document.getElementById("even_percent");
const min = document.getElementById("min_value");
const max = document.getElementById("max_value");
const count = document.getElementById("count");

const setData = (data) => {
    maxPercentage.innerHTML = `El porcentaje máximo es: ${data.maxPercentage}%`
    oddPercent.innerHTML = `El porcentaje de impares es: ${data.oddPercent}%`
    evenPercent.innerHTML = `El porcentaje de pares es: ${data.evenPercent}%`
    min.innerHTML = `El valor mínimo es: ${data.min}`
    max.innerHTML = `El valor máximo es: ${data.max}`
    count.innerHTML = `El número de elementos es: ${data.count}`
};


f1.addEventListener("click", () => {
    const array = [9, 365, 998, 51, 859, 999, 434, 681, 10, 170];
    const data = arrayInfo(array);
    setData({...data});
});

f2.addEventListener("click", () => {
    const array = [1, 33, 18, 14, 45, 21, 22, 28, 12, 46, 18, 40, 39, 31, 4];
    const data = arrayInfo(array);
    setData({...data});
});