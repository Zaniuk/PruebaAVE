const multiply = (a, b) => {
    
    a = parseInt(a);
    b = parseInt(b);

    if (a === 0 || b === 0) {
        return 0;
    }else{
        for(let i = 0; i < b; i++){
            return a + multiply(a, b - 1);
        }
    }
}

const a = document.getElementById('n_1');
const b = document.getElementById('n_2');
const submit = document.getElementById('submit');
const resultValue = document.getElementById('result_value');
const operation = document.getElementById('operation');
submit.addEventListener('click', () => {
    const result = multiply(a.value, b.value);
    operation.innerHTML = `El resultado de ${a.value} x ${b.value} es: `;
    resultValue.innerHTML = result;
});