const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if(height === "" || height < 0 || isNaN(height)){
        results.innerHTML = "Plz give a valid height !"
        results.style.color = "tomato"
    }else if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = "Plz give a valid weight !"
        results.style.color = "tomato"
    }else{
        const res1 = (weight / ((height*height) / 10000)).toFixed(2)
        const res2 = (res1 < 18.6) ? 'Under Weight' : (res1>18.6 && res1<24.9) ? 'Normal Range' : 'OverWeight';
        results.innerHTML = res1
        results.appendChild(document.createTextNode(`\n${res2}`))
        results.style.color = "aqua"
    }
})