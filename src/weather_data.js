const request = require('request')
const weather = (location,callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=63382e026494fec8df102c549e970415`
    request({url,json:true},(err,data)=>{
        if(err){
            callback('check the internet connection',undefined)
        }
        else if(data.body.message){
            callback(data.body.message,undefined)
        }
        else {
            callback(undefined,data.body)
        }
    })
}
module.exports = weather