const input = document.querySelector('input')
const button = document.querySelector('button')
const error = document.querySelector('.error')
const temparature = document.querySelector('.temp')
const city = document.querySelector('.location')
const weather = document.querySelector('.weather')
const date = document.querySelector('.date')
const form = document.querySelector('.form')
button.addEventListener('click', ()=>{
    const location = input.value
    temparature.textContent = ""
    weather.textContent = ""
    city.textContent = ""
    date.textContent = ""
    error.textContent = "Loading..."
    if(!location){
            temparature.textContent = ""
            weather.textContent = ""
            city.textContent = ""
            date.textContent = ""
            error.textContent = "Give some input"
    }
    else{
     fetch(`http://127.0.0.1:8000/search?location=${location}`).then((res)=>{
        res.json().then((data)=>{
            if(data.error){
                temparature.textContent = ""
                weather.textContent = ""
                city.textContent = ""
                date.textContent = ""
                error.textContent = data.error 
            }
            else{       
                error.textContent = ""     
                temparature.textContent = data.temperature+"°"+"c"
                weather.textContent = data.weather
                city.textContent = data.city+" , " +data.country
                date.textContent = data.date
            }
        })
    })
    
     input.value = ""
    }
})

    

