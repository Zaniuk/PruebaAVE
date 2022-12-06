const imgWrapper = document.getElementById('img-wrapper');
const imgCount = document.getElementById('img-count')
const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault()

    //Por simplicidad usaré la misma imagen para todos los elementos
    const img = '<img src="https://picsum.photos/200/300" alt="imagen">'    

    const htmlElements = img.repeat(imgCount.value)
    if(imgCount.value % 2=== 0){
        imgWrapper.classList.add('even-rows')
        imgWrapper.classList.remove('odd-rows')
    }else{
        imgWrapper.classList.add('odd-rows')
        imgWrapper.classList.remove('even-rows')
    }
    
    console.log(htmlElements)
    imgWrapper.innerHTML = htmlElements

})