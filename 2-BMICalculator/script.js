const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height == "" || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height`
    }else if(weight == "" || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let guide

        if(bmi < 18.6){
            guide = "Under weight" 
        }else if(18.6<=bmi && bmi<=24.9){
            guide = "Normal range"
        }else{
            guide = "Overweight"
        }

        results.innerHTML = `<span>${bmi} : ${guide}</span>`
    }
})